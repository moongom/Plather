import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LineComponent } from './line/line.component';
import { LineUpperComponent } from './line/line-upper/line-upper.component';
import { LineBottomComponent } from './line/line-bottom/line-bottom.component';
import { PortfolioOuterComponent } from './portfolio/portfolio-outer/portfolio-outer.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioFilteredComponent } from './portfolio/portfolio-filtered/portfolio-filtered.component';
import { PortfolioShowComponent } from './portfolio/portfolio-show/portfolio-show.component';
import { PortfolioModalLeftProfileComponent } from './portfolio/portfolio-show/portfolio-modal-left-profile/portfolio-modal-left-profile.component';
import { ActivityPostComponent } from './activity-post/activity-post.component';
import { ActivityPostPreviewComponent } from './activity-post/activity-post-preview/activity-post-preview.component';
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
import { ShowActivityComponent } from './show-activity/show-activity.component';
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

import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({

  declarations: [
    AppComponent,
    LineComponent,
    LineUpperComponent,
    ProfileComponent,
    LineBottomComponent,
    PortfolioOuterComponent,
    PortfolioListComponent,
    PortfolioShowComponent,
    PortfolioFilteredComponent,
    PortfolioModalLeftProfileComponent,
    ActivityPostComponent,
    ActivityPostPreviewComponent,
    EditProfileComponent,
    LandingPageComponent,
    LoginComponent,
    Signup1Component,
    Signup2Component,
    ShowActivityComponent,
  ],

  entryComponents: [ActivityPostComponent, ActivityPostPreviewComponent, EditProfileComponent, Signup2Component, ShowActivityComponent, PortfolioShowComponent, PortfolioModalLeftProfileComponent],

  imports: [

    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
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
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTreeModule,
    SlideshowModule,

    ImageCropperModule
  ],

  providers: [SignupService, AlertService, ActiivtyPostService],
  bootstrap: [AppComponent]

})
export class AppModule { }
