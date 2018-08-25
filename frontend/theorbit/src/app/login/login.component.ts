import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder, private loginservice:SignupService, private router: Router, private AlertService:AlertService) { }
  loginForm;
  submitted;
  loading = false;
  returnUrl='/horizontalline'
  ngOnInit() {
    this.loginForm = this.fb.group({
      ID: new FormControl('', [Validators.required, Validators.minLength(4)]),
      Password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
}

login(){
  if (this.loginForm.invalid) {
    console.log(this.loginForm.value)
    return;
}
else{
  this.loginservice.login(this.loginForm.value)
  .subscribe(
    data => {
        this.router.navigate([this.returnUrl]);
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



