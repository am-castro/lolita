import { Component, Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
