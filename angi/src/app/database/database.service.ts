import { UserService } from './../user/user.service';
import { AngularFirestore, Action } from "@angular/fire/firestore";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { firestore } from 'firebase';

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(private db: AngularFirestore, private userService: UserService) {}

  getUserData(userId: string): Observable<Action<firestore.DocumentSnapshot>> {
    return this.db.collection("users").doc(userId).snapshotChanges()
  }
}
