import { element } from 'protractor';
import { FormGroup } from '@angular/forms';
import { Trip } from './../app.trip';
import { AngularFirestore, Action, DocumentData } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Observable, Subscriber } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(private db: AngularFirestore) {}

  getUserData(userId: string): Observable<Action<firestore.DocumentSnapshot>> {
    return this.db.collection("users").doc(userId).snapshotChanges()
  }
  updateTripsData(userId: string, trips: object): Observable<Promise<void>> {
    return new Observable(subscriber => {
      subscriber.next(this.db.collection("users").doc(userId).update(trips));
      subscriber.complete();
    }) 
  }
  createUserData(userId: string) {
    this.db.collection("users").doc(userId).get().subscribe(documentInfo => {
      if (!documentInfo.exists) {
        let newUserData = {
          trips: [],
        }
        this.db.collection("users").doc(userId).set(newUserData);
      }
    })
  }
  tryCreateNewUser(userData: any): void {
    if (userData.additionalUserInfo.isNewUser) {
      this.createUserData(userData.user.email);
    }
  }
  generateId(trips: DocumentData): number {
    let maxId = 0;
    trips.trips.forEach(element => {
      if (element.id && element.id > maxId) {
        maxId = element.id;
      }
    });
    return maxId + 1;
  }
  createNewTrip(userId: string, formData: FormGroup): Observable<number> {
    return new Observable(subscriber => {
      const formDataValues = formData.value;
      this.db.collection("users").doc(userId).get().subscribe(data => {
        let trips = data.data();
        const tripId = this.generateId(trips)
        let newTrip: Trip;
        newTrip = {
          id: tripId,
          title: formDataValues.title,
          date: [formDataValues.dateStart, formDataValues.dateEnd],
          description: formDataValues.description,
          mainImg: "assets/images/tripDefault.jpg",
          type: "future",
          rating: 0,
        };
        trips.trips.push(newTrip);
        this.updateTripsData(userId, trips).subscribe(() => {
          subscriber.next(tripId);
        });
      });
    })
  }
}
