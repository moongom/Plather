import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
  providers: []
})

export class LandingPageComponent implements OnInit {

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  constructor() {}

  imageUrlArray=["/assets/images/forest1.jpg", "/assets/images/forest2.jpg", "/assets/images/forest3.jpg"];
}
