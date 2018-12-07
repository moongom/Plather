import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
@Component({
  selector: 'portfolio-modal-left-profile',
  templateUrl: './portfolio-modal-left-profile.component.html',
  styleUrls: ['./portfolio-modal-left-profile.component.css']
})
export class PortfolioModalLeftProfileComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public portfolioTitle: String, @Inject(MAT_DIALOG_DATA) public tags: any, @Inject(MAT_DIALOG_DATA) public user:String) { }

  isProfileArea: boolean = true; // true: 프로필 영역, false: 프로필 목차 영역

  ngOnInit() {
    
  }
  clickRightButton(){
    this.isProfileArea = !(this.isProfileArea);
  }
}
