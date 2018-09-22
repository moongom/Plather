import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserPortfolioModalComponent } from '../user-portfolio-modal/user-portfolio-modal.component';

@Component({

  selector: 'user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']

})

export class UserPortfolioComponent implements OnInit {

  constructor(public dialog: MatDialog, private elementRef:ElementRef) { }

  /*
    이 곳에서는 태그이름, 슈퍼태그 (포트폴리오 index 페이지에 필요한 성분들) 만 로드할 예정이다.
    이미지, 글들과 같이 구체적인 contents들은 portfolio show 페이지에서 보여져야 한다.
    (여기에서는 로드되지 않을 예정)
  */

  tagName = [ "테니스", "수영", "요가", "메이크업", "디자인", "퀼트", "회화", "소믈리에", "발레", "채식주의자", "서브웨이", "문곰과 귤", "인문역량강화사업", "그래픽 디자인" ];
  superTagName = ['스포츠', '프로그래밍', '취미생활', '디자인', '추석', '가나다라마바사아', '자차카타파하마바'];
  userName = ['김희재']
  cellWidth;
  activities = [];
  portfolios = {};

  getRow(portfolios){
    var row = Math.floor(Object.keys(this.portfolios).length / 4)
    return new Array(row+1);
  }

  getCol(row: number, portfolios) {
    var totalNum = Object.keys(this.portfolios).length;
    var cellNum = totalNum - row*4;
    if(cellNum >= 4){
      return new Array(4);
    }else{
      return new Array(cellNum);
    }
  }

  getArray(n: number) {
    return new Array(n);
  }

  getSupertags(portfolios){
    return Object.keys(this.portfolios);
  }

  showPortfolio(index){

    var portfolio = this.portfolios[this.getSupertags(this.portfolios)[index]];
    this.openDialog(portfolio);

  }

  // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
  openDialog( portfolio ): void {

    history.pushState(null, null, '/user-portfolio/user_id');

    const dialogRef = this.dialog.open(UserPortfolioModalComponent, {

      width: '1000px',
      height: '800px',
      data: { portfolio: portfolio }

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('ShowSpecificActivitiesComponent Modal was closed');
      history.pushState(null, null, '/user-portfolio');
    });

  }

  ngOnInit() {

    // Dummy 활동 데이터 생성
    for(var i = 0 ; i < 15 ; i++){

      var tempActivity = {

        supertag: this.superTagName[Math.floor(Math.random()*this.superTagName.length)],
        tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)] + '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],
        user: this.userName[Math.floor(Math.random()*this.userName.length)],

      }

      this.activities.push(tempActivity);

    }
    for(var i = 0 ; i < this.activities.length ; i++){

      if( i == 0 ){

        this.portfolios[this.activities[i].supertag] = [];
        this.portfolios[this.activities[i].supertag].push(this.activities[i]);

      }else{

        var alreadyExists = false;

        for( var supertag in this.portfolios ){

          if(supertag == this.activities[i].supertag){

            alreadyExists = true;
            this.portfolios[this.activities[i].supertag].push(this.activities[i]);

          }

        }

        if(!alreadyExists){

          this.portfolios[this.activities[i].supertag] = [];
          this.portfolios[this.activities[i].supertag].push(this.activities[i]);

        }

      }

    }


    console.log(Object.keys(this.portfolios))


  }

  ngAfterViewInit() {

  }

}
