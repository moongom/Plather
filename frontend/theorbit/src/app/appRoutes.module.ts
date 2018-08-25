import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UsertimelineComponent } from './usertimeline/usertimeline.component';
import { HorizontalLineComponent } from './horizontal-line/horizontal-line.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';


const appRoutes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'horizontalline', component: HorizontalLineComponent },
    { path: 'login', component:LoginComponent},
    { path: 'signup', component:Signup1Component},
    { path: 'signup2', component:Signup2Component},
    { path: 'profile', component: ProfileComponent }
  ];


  @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}