import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'show-activity',
  templateUrl: './show-activity.component.html',
  styleUrls: ['./show-activity.component.css']
})

export class ShowActivityComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() {
    console.log(this.data);
  }

}
