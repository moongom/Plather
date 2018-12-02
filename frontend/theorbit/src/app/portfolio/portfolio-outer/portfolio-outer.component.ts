import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'portfolio-outer',
  templateUrl: './portfolio-outer.component.html',
  styleUrls: ['./portfolio-outer.component.css']
})
export class PortfolioOuterComponent implements OnInit {

  constructor() { }

  currentComponent: String = 'portfolioList';
  @Output() currentSupertag: String;

  ngOnInit() {
  }

  toggleComponent($event){
    this.currentComponent = 'portfolioFiltered';
    this.currentSupertag = $event;
  }

}
