import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';

@Component({

  selector: 'user-portfolio',
  templateUrl: './user-portfolio.component.html',
  styleUrls: ['./user-portfolio.component.css']

})

export class UserPortfolioComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  tagName = [ "테니스", "수영", "요가", "메이크업", "디자인", "퀼트", "회화", "소믈리에", "발레", "채식주의자", "서브웨이", "문곰과 귤", "인문역량강화사업", "그래픽 디자인" ];
  superTagName = ['스포츠', '프로그래밍', '취미생활'];
  cellWidth;
  activities = [];
  portfolios = {};

  getRow(portfolios){
    var row = Math.floor(Object.keys(this.portfolios).length / 4)
    if(row == 0)
      return new Array(1);
    else
    return new Array(row);
  }

  getCol(row: number, portfolios) {
    var totalNum = Math.floor(Object.keys(this.portfolios).length);
    var cellNum = totalNum - row*4;
    if(totalNum >= 4){
      return new Array(4);
    }else{
      return new Array(totalNum);
    }
  }

  getSupertags(portfolios){
    return Object.keys(this.portfolios);
  }

  ngOnInit() {



    // Dummy 활동 데이터 생성
    for(var i = 0 ; i < 15 ; i++){

      var tempActivity = {

        supertag: this.superTagName[Math.floor(Math.random()*this.superTagName.length)],
        tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)] + '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],

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
