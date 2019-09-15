import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss']
})
export class BackArrowComponent implements OnInit {

  @Input() props: {
    className: string;
    link: string;
  }

  image: string= "./assets/icons/backArrow.svg";
  iconColo: string = '#435A59';

  getClass(): string {
    let className: string = "back-arrow ";
    
    if (this.props.className) {
      className += this.props.className;
    }
    return className;
  }

  constructor() { }

  ngOnInit() {
  }

}
