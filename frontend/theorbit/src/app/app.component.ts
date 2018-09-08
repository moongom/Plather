import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Signup2Component } from './signup2/signup2.component'
import { LoginComponent } from './login/login.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignupService } from './signup.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  sidenavTest = false;
  title = 'theorbit';
  constructor(router:Router, public dialog: MatDialog, private logoutservice:SignupService){
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

  ngOnInit() {


  }

  openSignup2Dialog(): void {
    const dialogRef = this.dialog.open(Signup2Component, {
      width: '400px',
      panelClass: 'full-dialog'

      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {

      width: '400px',
      panelClass: 'full-dialog'

      // data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }

  logout(){
    this.logoutservice.logout()
  }



}
