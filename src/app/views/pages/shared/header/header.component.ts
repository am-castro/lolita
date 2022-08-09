import { Component, OnInit } from '@angular/core';
import { faHouse, faCirclePlus, faBell } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  icons = {home: faHouse, new: faCirclePlus, alert: faBell};
  constructor() { }

  ngOnInit(): void {
  }

}
