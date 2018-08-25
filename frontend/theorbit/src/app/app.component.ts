import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Signup2Component } from './signup2/signup2.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  sidenavTest = false;
  title = 'theorbit';
  constructor(router:Router, public dialog: MatDialog){
    // 특정 url에 떨어질 때에만 사이드바가 형성되게 한다.
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.sidenavTest = (
          event.url == "/horizontalline"
          || event.url == "/profile"
        );
      }
    });
  }

  animal: string;
  name: string;

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(Signup2Component, {
      width: '400px',
      panelClass: 'full-dialog'

      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });

  }

}
