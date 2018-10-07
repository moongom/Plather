import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivityPostComponent } from '../activity-post/activity-post.component'

@Component({
  selector: 'usertimeline-specific',
  templateUrl: './usertimeline-specific.component.html',
  styleUrls: ['./usertimeline-specific.component.css']
})

export class UsertimelineSpecificComponent implements OnInit {

  constructor(public dialog: MatDialog) {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ActivityPostComponent, {
      width: '100%',
      height: '100%',
      maxWidth: '2000px'
      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });

  }

  ngOnInit() {

  }

}
