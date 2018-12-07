import { ElementRef, Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';
import * as global from '../../global'

@Component({
  selector: 'portfolio-show',
  templateUrl: './portfolio-show.component.html',
  styleUrls: ['./portfolio-show.component.css'],
})

export class PortfolioShowComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public portfolio: any, @Inject(MAT_DIALOG_DATA) public tags: any, @Inject(MAT_DIALOG_DATA) public currentPortfolioInd: number, public dialogRef: MatDialogRef<any>,  private dialog: MatDialog, private elementRef:ElementRef ) { }

  screenWidth:number = window.innerWidth;
  portfolioInd:number = 0;
  useSampleData:boolean = global.useSampleData
  videoSource:string = 'https://youtu.be/E0KXWi4SRIw';

  ngOnInit() {

    this.portfolioInd = this.portfolio.currentPortfolioInd;

  }

  ngAfterViewInit() {
    setInterval(() => {
      this.elementRef.nativeElement.querySelector('#preloader').style.display = "none";
      this.elementRef.nativeElement.querySelector('#main-content').style.display = "block";
    }, 750);

    // this.elementRef.nativeElement.querySelector('.portfolio-specific').addEventListener('animationend', function(){
      
    // }.bind(this));
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  setAnimation(){
    this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.remove('animated');
    this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.remove('fadeInRight');
    this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.remove('fadeInLeft');
  }

  clickRightButton(){

    this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('animated');
    this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('fadeInRight');
    if(this.portfolioInd == this.portfolio.portfolio.length - 1){
      this.portfolioInd = 0;
    }else{
      this.portfolioInd++;
    }

  }

  clickLeftButton(){
    this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('animated');
    this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('fadeInLeft');
    if(this.portfolioInd == 0){
      this.portfolioInd = this.portfolio.portfolio.length - 1;
    }else{
      this.portfolioInd--;
    }
  }

  // changePosition() {
  //   this.dialogRef.updatePosition({ top: '50px', left: '50px' });
  // }

}
