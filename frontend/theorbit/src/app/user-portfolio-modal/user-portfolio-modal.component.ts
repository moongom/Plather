import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';


@Component({
  selector: 'user-portfolio-modal',
  templateUrl: './user-portfolio-modal.component.html',
  styleUrls: ['./user-portfolio-modal.component.css']
})

export class UserPortfolioModalComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public portfolio: any, @Inject(MAT_DIALOG_DATA) public tags: any, public dialModalRef: MatDialogRef<any> ) { }

  ngOnInit() {
    console.log(this.portfolio);
    // this.changePosition()
  }

  changePosition() {
    this.dialModalRef.updatePosition({ top: '50px', left: '50px' });
  }

}
