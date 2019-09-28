import { UserService } from "src/app/user/user.service";
import { DatabaseService } from "./../../database/database.service";
import { Injectable } from "@angular/core";
import { Friends } from "./friends";
import { Friend } from "./friend";
import { Observable, Subscriber } from "rxjs";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class FriendsService {
  sortFriendsList(friends: Friends): Friends {
    function sortFunction(a: Friend, b: Friend): number {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    }
    if (typeof friends.accepted !== "undefined" && friends.accepted.length > 1) {
      friends.accepted = friends.accepted.sort(sortFunction);
    }
    if (typeof friends.unaccepted !== "undefined" && friends.unaccepted.length > 1) {
      friends.unaccepted = friends.unaccepted.sort(sortFunction);
    }
    return friends;
  }
  getFriendsList(): Observable<any> {
    return new Observable(subscriber => {
      this.userService.getCurrentUser().subscribe(user => {
        this.databaseService.getUserData(user.email).subscribe(userdata => {
          if (userdata.payload.data()) {
            let friends = userdata.payload.data().friends;
            friends = this.sortFriendsList(friends);
            subscriber.next(friends);
          }
        });
      });
    });
  }
  isFriendRegistered(email: string): Observable<any> {
    return new Observable(subscriber => {
      this.databaseService.getUserData(email).subscribe(userdata => {
        subscriber.next(userdata.payload.exists);
        subscriber.complete();
      });
    });
  }
  trySubmitRequest(requestForm: FormGroup): Observable<any> {
    return new Observable(subscriber => {
      const requestAnswer = {
        submitOk: false,
        submitError: false,
        submitMessageText: ""
      };
      console.log(123)
      if (requestForm.status === "INVALID") {
        if (typeof requestForm.controls.input.errors.required !== "undefined") {
          requestAnswer.submitOk = false;
          requestAnswer.submitError = true;
          requestAnswer.submitMessageText = "Поле не должно быть пустым";
        } else if (typeof requestForm.controls.input.errors.email !== "undefined") {
          requestAnswer.submitOk = false;
          requestAnswer.submitError = true;
          requestAnswer.submitMessageText = "Поле должно содержать email";
        }
        subscriber.next(requestAnswer);
        subscriber.complete();
      } else {
        this.tryToSendFriendRequest(requestForm.controls.input.value).subscribe(value => {
          switch (value) {
            case "noFriend": {
              requestAnswer.submitOk = false;
              requestAnswer.submitError = true;
              requestAnswer.submitMessageText = "Пользователь с таким email не зарегистрирован";
              break;
            }
            case "alreadySent": {
              requestAnswer.submitOk = false;
              requestAnswer.submitError = true;
              requestAnswer.submitMessageText = "Заявка уже отправлена";
              break;
            }
            case "alreadyFriend": {
              requestAnswer.submitOk = false;
              requestAnswer.submitError = true;
              requestAnswer.submitMessageText = "Пользователь уже в друзьях";
              break;
            }
            case "requestSent": {
              requestAnswer.submitOk = true;
              requestAnswer.submitError = false;
              requestAnswer.submitMessageText = "Заявка отправлена";
              break;
            }
            default: {
              requestAnswer.submitOk = false;
              requestAnswer.submitError = true;
              requestAnswer.submitMessageText = "Неизвестная ошибка";
            }
          }
          subscriber.next(requestAnswer);
          subscriber.complete();
        });
      }
    });
  }
  tryToSendFriendRequest(email: string): Observable<any> {
    return new Observable(subscriber => {
      const friendSubscription = this.isFriendRegistered(email).subscribe(value => {
        if (value) {
          const friendSubscription = this.userService.getCurrentUser().subscribe(currentUser => {
            const databaseSubscription = this.databaseService.getUserData(email).subscribe(userData => {
              const friends: Friends = userData.payload.data().friends;
              const isMessageAlreadySent = friends.unaccepted.find((friend: Friend) => {
                return friend.email === currentUser.email;
              });
              const isAlreadyFriend = friends.accepted.find((friend: Friend) => {
                return friend.email === currentUser.email;
              });
              if (isAlreadyFriend) {
                subscriber.next("alreadyFriend");
                subscriber.complete();
              } else if (isMessageAlreadySent) {
                subscriber.next("alreadySent");
                subscriber.complete();
              } else {
                const friend: Friend = {
                  name: currentUser.displayName,
                  email: currentUser.email,
                  avatar: currentUser.photoURL
                };
                friends.unaccepted.push(friend);
                this.databaseService.updateFriendsData(email, { friends: friends }).subscribe(() => {
                  subscriber.next("requestSent");
                  subscriber.complete();
                });
              }
              databaseSubscription.unsubscribe();
            });
            friendSubscription.unsubscribe();
          });
        } else {
          subscriber.next("noFriend");
          subscriber.complete();
        }
        friendSubscription.unsubscribe();
      });
    });
  }

  constructor(private databaseService: DatabaseService, private userService: UserService) {}
}
