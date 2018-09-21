import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorizontalLineComponent } from './horizontal-line/horizontal-line.component';
import { UsertimelineComponent } from './usertimeline/usertimeline.component';
import { UsertimelineSpecificComponent } from './usertimeline-specific/usertimeline-specific.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { ActivityPostComponent } from './activity-post/activity-post.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './appRoutes.module';
import { HttpClientModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { LoginComponent } from './login/login.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowSpecificActivitiesComponent } from './show-specific-activities/show-specific-activities.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MAT_DIALOG_DATA,

} from '@angular/material';
import { AlertService } from './alert.service';
import { SignupService } from './signup.service';


@NgModule({

  declarations: [
    AppComponent,
    HorizontalLineComponent,
    UsertimelineComponent,
    ProfileComponent,
    UsertimelineSpecificComponent,
    UserPortfolioComponent,
    ActivityPostComponent,
    EditProfileComponent,
    LandingPageComponent,
    LoginComponent,
    Signup1Component,
    Signup2Component,
    ShowSpecificActivitiesComponent,
  ],

  entryComponents: [ActivityPostComponent, EditProfileComponent, Signup2Component, ShowSpecificActivitiesComponent],

  imports: [

    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    SlideshowModule,
  ],

  providers: [SignupService, AlertService],
  bootstrap: [AppComponent]

})
export class AppModule { }
