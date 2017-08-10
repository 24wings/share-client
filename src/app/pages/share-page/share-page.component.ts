import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share-page',
  templateUrl: './share-page.component.html',
  styleUrls: ['./share-page.component.css']
})
export class SharePageComponent implements OnInit {
  path = '';

  constructor() {
    this.getActivePath();
  }

  ngOnInit() {
  }


  getActivePath() {
    this.path = location.pathname.split('/')[2];
    console.log(this.path);
  }
}
