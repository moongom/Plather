import { Component, OnInit, Input } from '@angular/core';
import { ActiivtyPostService } from '../../services/actiivty-post.service';
import { MatDialog } from '@angular/material';
import { PortfolioShowComponent } from '../portfolio-show/portfolio-show.component';
import { PortfolioModalLeftProfileComponent } from '../portfolio-show/portfolio-modal-left-profile/portfolio-modal-left-profile.component';

export class Activity {
  // 서버로부터 받아온 특정 supertag의 Activity 들을 해당 클래스로 정리해서 관리한다.

  id: number;
  user: String;
  date: Date;
  content: String;
  tag: String;
  supertag: String;
  thumbnail: String

  constructor(id: number, date: number, content: String, tag: String, superTag: String, thumbnail: String){
    this.id = id;
    this.date = new Date(date);
    this.content = content;
    this.tag = tag;
    this.supertag = superTag;
    this.thumbnail = thumbnail;
  }

}

@Component({
  selector: 'portfolio-filtered',
  templateUrl: './portfolio-filtered.component.html',
  styleUrls: ['./portfolio-filtered.component.css']
})

export class PortfolioFilteredComponent implements OnInit {

  @Input() currentSupertag: String
  activities: Activity[] = [];
  
  constructor(public dialog: MatDialog, private service: ActiivtyPostService) { }

  ngOnInit() {
    
    this.getActivityPostData();
    console.log(this.activities)

  }

  getActivityPostData(){
    // 서버로부터 특정 슈퍼태그에 해당하는 활동들만 얻어온다.
    let query = this.currentSupertag.replace('##', '');
    
    this.service.getActivitiesWithSupertag(query).subscribe(response => {
      
      let activityArr = response as any[];
      activityArr.forEach((element) => {

        let activity = new Activity(parseInt(element['id']), parseInt(element['activityDate']), element['portfolioContent'], element['subTag'], element['superTag'], element['thumbnail']);

        this.activities.push(activity);
        
      })
      
    })

  }
  // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
  openPortfolio( activity: Activity ): void {

    history.pushState(null, null, '/portfolio/user_id');
    
    let activityArr: Activity[] = [];
    activityArr.push(activity);

    const userPortfolio = this.dialog.open(PortfolioShowComponent, {
      
      width: '68%',
      height: '80%',
      maxWidth: '3000px',
      data: {
        portfolio: activityArr,
        tags: Array(activity.tag),
        currentPortfolioInd: 0
      },
      hasBackdrop: true,
      position: {
        'top': '5%',
        'left': '27%'
      }

    });

    const userPortfolioLeftProfile = this.dialog.open(PortfolioModalLeftProfileComponent, {

      width: '20%',
      height: '80%',
      maxWidth: '3000px',
      data: {
        portfolioTitle: activity.supertag,
        tags: Array(activity.tag)
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
      history.pushState(null, null, '/portfolio');
      userPortfolioLeftProfile.close();

    });

    userPortfolioLeftProfile.afterClosed().subscribe(result => {

      console.log('ShowSpecificActivitiesComponent Modal was closed');
      history.pushState(null, null, '/portfolio');
      userPortfolio.close();

    });

  }
}
