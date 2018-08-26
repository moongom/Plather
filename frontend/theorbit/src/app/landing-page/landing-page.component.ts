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

  // imageUrlArray=["static/ang/assets/images/carousel1.png", "static/ang/assets/images/forest2.jpg", "static/ang/assets/images/forest3.jpg"];
  imageUrlArray=["/assets/images/carousel1.png"];
}
