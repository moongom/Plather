import { AfterViewInit, Component, OnInit, ElementRef, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-activity-post',
  templateUrl: './activity-post.component.html',
  styleUrls: ['./activity-post.component.css']
})

export class ActivityPostComponent implements OnInit {

  constructor(
   public dialogRef: MatDialogRef<ActivityPostComponent>,
   @Inject(MAT_DIALOG_DATA) public data: DialogData,
   private elementRef:ElementRef) {}

   onNoClick(): void {
     this.dialogRef.close();
   }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#activity-post-btn').addEventListener('click', this.buttonClicked.bind(this));
  }

  buttonClicked(e){
    var title = this.elementRef.nativeElement.querySelector('#title').value;
    var content = this.elementRef.nativeElement.querySelector('#content').value;
    var json = {
      "title": title,
      "content": content
    }
  }

}
