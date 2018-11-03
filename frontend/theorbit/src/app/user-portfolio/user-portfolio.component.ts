import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserPortfolioModalComponent } from '../user-portfolio-modal/user-portfolio-modal.component';
import { UserPortfolioLeftProfileComponent } from '../user-portfolio-left-profile/user-portfolio-left-profile.component';

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
  superTagName = ['스포츠', '프로그래밍', '볼빨간사춘기', '디자인', '추석', 'Swift', '레이나'];
  content = ['모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 대한민국의 국민이 되는 요건은 법률로 정한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.\n\
  국회는 국가의 예산안을 심의·확정한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.\
  형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.\n\
  모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.','국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다.\
  대한민국은 민주공화국이다. 형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서 진술할 수 있다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다.\n\
  국무총리는 국회의 동의를 얻어 대통령이 임명한다. 국가원로자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 모든 국민은 거주·이전의 자유를 가진다.\
  대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 국회는 국가의 예산안을 심의·확정한다. 국가는 청원에 대하여 심사할 의무를 진다. 모든 국민은 직업선택의 자유를 가진다. 국회는 의장 1인과 부의장 2인을 선출한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.', '근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.\n\
  제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 대한민국은 민주공화국이다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.\n\
  국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다. 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.\n\
  국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.']
  images = ['https://mir-s3-cdn-cf.behance.net/projects/404/97f0cd70467197.Y3JvcCw4ODEsNjg5LDAsMg.png', 'https://mir-s3-cdn-cf.behance.net/projects/404/b6381169862963.Y3JvcCwxMDI1LDgwMSwxMDksNjA.jpg', 'https://mir-s3-cdn-cf.behance.net/projects/404/686b2870702065.Y3JvcCw4MjgsNjQ3LDIwNSw2NDU.png', 'https://mir-s3-cdn-cf.behance.net/projects/404/b02d6870489325.Y3JvcCwyNTU4LDIwMDEsMjIxLDA.jpg',
  'https://mir-s3-cdn-cf.behance.net/projects/404/a5952770249167.Y3JvcCw4MTksNjQwLDQwLDE0.jpg',
  'https://mir-s3-cdn-cf.behance.net/projects/404/0fd4d569586409.Y3JvcCwxOTk5LDE1NjQsMCww.png'];
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

  getKey(portfolios){
    return Object.keys(portfolios);
  }

  showPortfolio(index){

    var portfolio = this.portfolios[this.getKey(this.portfolios)[index]];
    
    var tagSet = new Set();
    for ( var i = 0 ; i < portfolio.length ; i++){
      for( var j = 0 ; j < portfolio[i].tag.length ; j++ ){
        tagSet.add(portfolio[i].tag[j]);
      }
    }
    this.openPortfolio(portfolio, Array.from(tagSet));

  }

  // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
  openPortfolio( portfolio, tags ): void {

    history.pushState(null, null, '/user-portfolio/user_id');

    const userPortfolio = this.dialog.open(UserPortfolioModalComponent, {

      width: '68%',
      height: '80%',
      maxWidth: '2000px',
      data: { 
        portfolio: portfolio, 
        tags: tags,
        currentPortfolioInd: 0
      },
      hasBackdrop: true,
      position: {
        'top': '5%',
        'left': '27%'
      }

    });

    const userPortfolioLeftProfile = this.dialog.open(UserPortfolioLeftProfileComponent, {

      width: '20%',
      height: '80%',
      maxWidth: '2000px',
      data: { 
        portfolioTitle: portfolio[0].supertag, 
        tags: tags
      },
      hasBackdrop: false,
      backdropClass: 'white',
      position: {
        'top': '5%',
        'left': '5%'
      }

    });
    
    userPortfolio.afterClosed().subscribe(result => {

      console.log('ShowSpecificActivitiesComponent Modal was closed');
      history.pushState(null, null, '/user-portfolio');
      userPortfolioLeftProfile.close();

    });
    
    userPortfolioLeftProfile.afterClosed().subscribe(result => {

      console.log('ShowSpecificActivitiesComponent Modal was closed');
      history.pushState(null, null, '/user-portfolio');
      userPortfolio.close();

    });
    

  }

  ngOnInit() {

    // Dummy 활동 데이터 생성
    for(var i = 0 ; i < 25 ; i++){

      var tempActivity = {

        supertag: this.superTagName[Math.floor(Math.random()*this.superTagName.length)],
        tag: [
          this.tagName[Math.floor(Math.random()*this.tagName.length)], this.tagName[Math.floor(Math.random()*this.tagName.length)], this.tagName[Math.floor(Math.random()*this.tagName.length)]
        ],
        user: this.userName[Math.floor(Math.random()*this.userName.length)],
        content: this.content[Math.floor(Math.random()*this.content.length)],
        images: [
          this.images[Math.floor(Math.random()*this.images.length)],
          this.images[Math.floor(Math.random()*this.images.length)],
          this.images[Math.floor(Math.random()*this.images.length)]
        ]

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

    console.log(this.portfolios);

  }

  ngAfterViewInit() {

  }

}
