import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
@Component({
  selector: 'app-user-portfolio-left-profile',
  templateUrl: './user-portfolio-left-profile.component.html',
  styleUrls: ['./user-portfolio-left-profile.component.css']
})
export class UserPortfolioLeftProfileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public portfolioTitle: String, @Inject(MAT_DIALOG_DATA) public tags: any) { }

  isProfileArea: boolean = true; // true: 프로필 영역, false: 프로필 목차 영역

  ngOnInit() {
    
  }
  clickRightButton(){
    this.isProfileArea = !(this.isProfileArea);
  }
}
