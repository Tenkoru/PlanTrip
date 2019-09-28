import { UserService } from "src/app/user/user.service";
import { DatabaseService } from "./../../database/database.service";
import { Injectable } from "@angular/core";
import { Friends } from "./friends";
import { Friend } from "./friend";
import { Observable, Subscriber } from "rxjs";

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

  constructor(private databaseService: DatabaseService, private userService: UserService) {}
}
