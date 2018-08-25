import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignUpType } from '../models/signuptype';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from '../signup.service';
import { FormBuilder } from '@angular/forms';
import { matchOtherValidator } from './password-validation';

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
      ID: new FormControl('', [Validators.required, Validators.minLength(4)]),
      Nickname: new FormControl('', [Validators.required, Validators.minLength(4)] ),
      passwordFormGroup: this.passwordFormGroup,
      Email: new FormControl('', [Validators.required, Validators.email]),
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
  register(){
    this.submitted=true;
    if (this.signupForm.invalid) {
      console.log(this.signupForm.value)
      return;
  }
  else{
    this.signup.register(this.signupForm.value).subscribe();
    console.log(this.signupForm.value)
    console.log('success')
    alert('회원가입이 완료됐습니다.')
  }
  }

}
