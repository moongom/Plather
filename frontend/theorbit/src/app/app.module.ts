import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HorizontalLineComponent } from './horizontal-line/horizontal-line.component';
import { UsertimelineComponent } from './usertimeline/usertimeline.component';
import { UsertimelineSpecificComponent } from './usertimeline-specific/usertimeline-specific.component';
import { UserPortfolioComponent } from './user-portfolio/user-portfolio.component';
import { UserPortfolioModalComponent } from './user-portfolio-modal/user-portfolio-modal.component';
import { UserPortfolioLeftProfileComponent } from './user-portfolio-left-profile/user-portfolio-left-profile.component';
import { ActivityPostComponent } from './activity-post/activity-post.component';
import { ActivityPostPreviewComponent } from './activity-post-preview/activity-post-preview.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './appRoutes.module';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SlideshowModule } from 'ng-simple-slideshow';
import { LoginComponent } from './login/login.component';
import { Signup1Component } from './signup1/signup1.component';
import { Signup2Component } from './signup2/signup2.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowSpecificActivitiesComponent } from './show-specific-activities/show-specific-activities.component';
import { AlertService } from './alert.service';
import { SignupService } from './services/signup.service';
import { ActiivtyPostService } from './services/actiivty-post.service';

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



@NgModule({

  declarations: [
    AppComponent,
    HorizontalLineComponent,
    UsertimelineComponent,
    ProfileComponent,
    UsertimelineSpecificComponent,
    UserPortfolioComponent,
    UserPortfolioModalComponent,
    UserPortfolioLeftProfileComponent,
    ActivityPostComponent,
    ActivityPostPreviewComponent,
    EditProfileComponent,
    LandingPageComponent,
    LoginComponent,
    Signup1Component,
    Signup2Component,
    ShowSpecificActivitiesComponent,
  ],

  entryComponents: [ActivityPostComponent, ActivityPostPreviewComponent, EditProfileComponent, Signup2Component, ShowSpecificActivitiesComponent, UserPortfolioModalComponent, UserPortfolioLeftProfileComponent],

  imports: [

    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
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

  providers: [SignupService, AlertService, ActiivtyPostService],
  bootstrap: [AppComponent]

})
export class AppModule { }
