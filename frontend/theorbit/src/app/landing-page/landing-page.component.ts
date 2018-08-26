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

  imageUrlArray=["static/ang/assets/images/carousel1.jpeg", "static/ang/assets/images/carousel2.png", "static/ang/assets/images/carousel3.png", "static/ang/assets/images/carousel4.png", "static/ang/assets/images/carousel5.png", "static/ang/assets/images/carousel6.png"];
  // imageUrlArray=["/assets/images/carousel1.png"];
}
