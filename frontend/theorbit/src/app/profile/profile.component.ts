import { Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditProfileComponent } from '../edit-profile/edit-profile.component'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor( public dialog: MatDialog, private elementRef:ElementRef ) { }

  animal: string;
  name: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      width: '1000px',
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    var float_btn = this.elementRef.nativeElement.querySelector('#float-btn');
    var profile_img = this.elementRef.nativeElement.querySelectorAll('.user-profile')[0];
    float_btn.style.left =  profile_img.offsetWidth * 0.18 + "px";
    float_btn.style.top = "15px";

  }

  onFileChanged(event) {
    const file = event.target.files[0]
  }

  onUpload() {
    // upload code goes here
  }

}
