import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
import { LogInType } from '../models/logintype';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private loginservice: SignupService, private router: Router, private AlertService: AlertService,
    public dialogRef: MatDialogRef<LoginComponent>) { }
  loginForm;
  submitted;
  loading = false;
  returnUrl = '/horizontalline'
  ngOnInit() {
    this.loginForm = this.fb.group({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }

  login(logintype: LogInType) {
    if (this.loginForm.invalid) {
      console.log('error is occured hahahaha')
      return;
    }
    else {
      this.loginservice.login(logintype)
        .subscribe(
          data => {
            this.router.navigate([this.returnUrl]);
            
            console.log('login is success')
            this.dialogRef.close();
            if (this.router.url==this.returnUrl){
              window.location.reload();
            }
          },
          error => {
            this.AlertService.error(error);
            this.loading = false;
          });
    }
    console.log(this.loginForm.value)
    console.log('success')
    
  }

}
