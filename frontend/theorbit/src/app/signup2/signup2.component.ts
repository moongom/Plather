import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignUpType } from '../models/signuptype';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { FormBuilder } from '@angular/forms';
import { matchOtherValidator } from './password-validation';
import * as global from '../global'

@Component({
  selector: 'signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})

export class Signup2Component implements OnInit, OnDestroy {

  constructor(private signup:SignupService, private fb: FormBuilder) { }
  signupForm: FormGroup;
  signUpType:SignUpType;
  submitted = false;
  passwordFormGroup;
  ngOnInit() {
    this.passwordFormGroup = this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(8)]],
      Password_Confirm: ['', Validators.required]
    }, {
      validator: matchOtherValidator.validate.bind(this)
    });
    this.signupForm = this.fb.group({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Nickname: new FormControl('', [Validators.required, Validators.minLength(4)] ),
      passwordFormGroup: this.passwordFormGroup,
      Phone: new FormControl('', [Validators.required])
  }
)
  }
  get f() { return this.signupForm.controls; }
  ngOnDestroy(){
    this.signupForm
  }

  passwordmatch(password, password_confirm){
    if (password!=password_confirm){
      return
    }
  }
  register(signuptype:SignUpType){
    this.submitted=true;
    if (this.signupForm.invalid) {
      console.log(this.signupForm.value)
      return;
  }
  else{
    this.signup.register(signuptype).subscribe();
    console.log(this.signupForm.value)
    console.log('success')
    alert('회원가입이 완료됐습니다.')
  }
  }

}
