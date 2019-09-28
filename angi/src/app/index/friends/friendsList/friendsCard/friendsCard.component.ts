import { Friend } from './../../friend';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-friendsCard',
  templateUrl: './friendsCard.component.html',
  styleUrls: ['./friendsCard.component.scss']
})
export class FriendsCardComponent implements OnInit {

  @Input() card: Friend;
  @Input() isAccepted: boolean;

  constructor() { }

  ngOnInit() {
  }

}
