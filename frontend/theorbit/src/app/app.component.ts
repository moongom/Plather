import { Component, OnInit, OnChanges, AfterContentInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Signup2Component } from './signup2/signup2.component'
import { LoginComponent } from './login/login.component'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignupService } from './signup.service';
import { AccountService } from './account.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
  email;
  sidenavTest = false;
  title = 'theorbit';
  screen_name;
  constructor(router:Router, public dialog: MatDialog, private logoutservice:SignupService,
    private accountservice:AccountService){
    // 특정 url에 떨어질 때에만 사이드바가 형성되게 한다.
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.sidenavTest = (
          event.url == "/horizontalline"
          || event.url == "/profile"
        );
      }
      if (localStorage.getItem('currentUser')){
        this.email = JSON.parse(localStorage.getItem('currentUser')).email;
        this.accountservice.getUser()
        .subscribe(data =>{
            this.screen_name = data.screen_name;
            console.log(this.screen_name)
          }
        )
      }
      else{
        console.log('there are no data')
      }

    });



  }

  ngOnInit() {


  }

  animal: string;
  name: string;
  user: string;


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
