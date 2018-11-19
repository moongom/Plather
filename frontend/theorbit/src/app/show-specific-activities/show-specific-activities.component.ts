import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'show-specific-activities',
  templateUrl: './show-specific-activities.component.html',
  styleUrls: ['./show-specific-activities.component.css']
})

export class ShowSpecificActivitiesComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    console.log(this.data);
  }

}
