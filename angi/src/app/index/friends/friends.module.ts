import { FriendsCardComponent } from './friendsList/friendsCard/friendsCard.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FriendsComponent } from "./friends.component";
import { AngularSvgIconModule } from "angular-svg-icon";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import { FriendsSearchComponent } from './friendsSearch/friendsSearch.component';
import { FriendsListComponent } from './friendsList/friendsList.component';

@NgModule({
  imports: [CommonModule, AngularSvgIconModule, SharedModule, ReactiveFormsModule],
  declarations: [FriendsComponent, FriendsSearchComponent, FriendsListComponent, FriendsCardComponent],
})
export class FriendsModule {}
