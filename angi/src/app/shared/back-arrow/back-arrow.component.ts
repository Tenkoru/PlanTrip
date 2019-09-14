import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-back-arrow',
  templateUrl: './back-arrow.component.html',
  styleUrls: ['./back-arrow.component.scss']
})
export class BackArrowComponent implements OnInit {

  @Input() props: {
    className: String;
    link: String;
  }

  image = "./assets/icons/backArrow.svg";
  iconColor = '#435A59';

  getClass() {
    let className = "back-arrow ";
    
    if (this.props.className) {
      className += this.props.className;
    }
    return className;
  }

  constructor() { }

  ngOnInit() {
  }

}
