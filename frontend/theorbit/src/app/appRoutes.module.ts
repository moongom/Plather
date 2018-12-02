import { NgModule }              from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LineUpperComponent } from './line/line-upper/line-upper.component';
import { LineComponent } from './line/line.component';
import { PortfolioOuterComponent } from './portfolio/portfolio-outer/portfolio-outer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { PortfolioShowComponent } from './portfolio/portfolio-show/portfolio-show.component';


const appRoutes: Routes = [
    { path: '', component: LandingPageComponent},
    { path: 'horizontalline', component: LineComponent },
    { path: 'login', component:LoginComponent},
    { path: 'signup', component:Signup1Component},
    { path: 'signup2', component:Signup2Component},
    { path: 'profile', component: ProfileComponent },
    { path: 'portfolio', component: PortfolioOuterComponent },
    { path: 'portfolio/:id', component: PortfolioShowComponent },
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
