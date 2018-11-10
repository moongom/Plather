import { ElementRef, Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import * as global from '../global'

@Component({
  selector: 'activity-post-preview',
  templateUrl: './activity-post-preview.component.html',
  styleUrls: ['./activity-post-preview.component.css']
})

export class ActivityPostPreviewComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public html: any, public dialogRef: MatDialogRef<any>, private elementRef:ElementRef ) { }


  ngOnInit() {

    this.elementRef.nativeElement.querySelector('#preview-content').innerHTML = this.html.html;

  }
  ngOnAfterInit(){

  }

}
