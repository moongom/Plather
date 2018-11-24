import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShowActivityComponent } from '../../show-activity/show-activity.component';
import { PortfolioShowComponent } from '../../portfolio-show/portfolio-show.component';
import { PortfolioModalLeftProfileComponent } from '../../portfolio-show/portfolio-modal-left-profile/portfolio-modal-left-profile.component';
import { Router } from '@angular/router';
import * as global from '../../global'

@Component({

  selector: 'line-upper',
  templateUrl: './line-upper.component.html',
  styleUrls: ['./line-upper.component.css']

})


export class LineUpperComponent implements OnInit {

  constructor(private elementRef:ElementRef,
     public dialog: MatDialog,
    private router: Router
    ) { }

  initCount = 1;
  miniDate;
  maximDate;
  startDate:any;
  endDate:any;
  // endDatePointer;
  totalDate:any;
  horizontalLineOffsetLeft: number;
  horizontalLineOffsetTop: number;
  markDate;
  activityDate;
  dateGraduation;
  graduationStartMarker;
  rangeVal = 0;
  graduationNumber = 2;
  horizontalLine;
  mousePointerArea;
  unit = 50000;
  currentVisibleCard;
  currentlyClicked = false;
  cardMargin;
  listImageHeight = 100;
  scrollTimeout = Date.now();
  isClicked = [];

  isScreenBlack = false;
  // Drag
  isDragging = false;
  // dragStart;

  activities: any[];

  
  ngOnInit() {

    this.startDate = new Date(new Date().getFullYear() - 3, 0, 1);

    this.endDate = new Date(new Date().getFullYear() + 1, 0, 1);

    this.totalDate=this.endDate-this.startDate;

    
    // console.log(this.activities)
  }

  ngAfterViewInit() {

    this.horizontalLineOffsetLeft = this.elementRef.nativeElement.querySelector('.horizontalLine').offsetLeft;
    this.horizontalLineOffsetTop = this.elementRef.nativeElement.querySelector('.horizontalLine').offsetTop;

    // Four Years : 0, Whole Year : 1, Four Month : 2, One Month : 3 의 range-input 값을 지닌다.
    this.elementRef.nativeElement.querySelector('#range-input').value = 0;

    // !!! 필요없는 것 같아서, 일단 주석처리 했다. 추가적인 문제가 발생하지 않으면, 아래 한 줄을 지워도 된다.
    // this.elementRef.nativeElement.querySelector('#mousePointerArea').addEventListener('mousedown', this.startDragging.bind(this));

    /*
     * 이전에는 사용되었던 이벤트들이지만, 현재에는 사용되지 않는 이벤트들을
     * 주석처리했다.
    */

    // this.elementRef.nativeElement.querySelector('#mousePointerArea').addEventListener('mouseup', this.stopDragging.bind(this));

    // this.elementRef.nativeElement.querySelector('#mousePointerArea').addEventListener('wheel', this.doScroll.bind(this));

    // this.elementRef.nativeElement.querySelector('#mousePointerArea').addEventListener('mouseenter', this.doMouseEnterCard.bind(this));

    // this.elementRef.nativeElement.querySelector('#mousePointerArea').addEventListener('mouseleave', this.doMouseLeaveCard.bind(this));

    this.elementRef.nativeElement.querySelector('#left-triangle-move').addEventListener('click', this.clickLeftTriangleMove.bind(this));

    this.elementRef.nativeElement.querySelector('#right-triangle-move').addEventListener('click', this.clickRightTriangleMove.bind(this));

    this.elementRef.nativeElement.querySelector('#left-triangle-select').addEventListener('click', this.clickLeftTriangleSelect.bind(this));

    this.elementRef.nativeElement.querySelector('#right-triangle-select').addEventListener('click', this.clickRightTriangleSelect.bind(this));

    this.elementRef.nativeElement.querySelector('#range-input').addEventListener('change', this.filterByRange.bind(this));
    this.horizontalLine = this.elementRef.nativeElement.querySelector('.horizontalLine');
    this.horizontalLine.style.width = (window.innerWidth - (<HTMLElement>document.querySelectorAll('.mat-sidenav')[0]).offsetWidth) * 0.9 + "px";

    this.cardMargin = this.horizontalLine.offsetTop;
    // if(global.useSampleData){
    //   // Dummy Data 생성
    //   this.createSampleData();
    //   this.filterByRange();  
    // }else{
    //   this.getActivityPostData();
      
    // }
    
    
    this.elementRef.nativeElement.querySelector('#current-date').innerText = this.startDate.getFullYear();
    this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Years";

    (<HTMLElement>document.querySelectorAll('.fixedclass')[0]).style.top = (<HTMLElement>document.querySelectorAll('.navbar')[0]).offsetHeight + 13 + "px";

  }

  // getActivityPostData(){
  //   let jsonResponse;
  //   var result = [];
  //   var tempSuperTagName = [];

  //   this.service.getAll().subscribe(response => {
  //     console.log(response)
  //     jsonResponse = response;
      
  //     for(var i = 0 ; i < jsonResponse.length ; i++){
  //       let singleData = {
  //         content: jsonResponse[i]['portfolioContent'],
  //         date: new Date(parseInt(jsonResponse[i]['activityDate'])),
  //         thumbnail: jsonResponse[i]['thumbnail'] ? jsonResponse[i]['thumbnail'] :  this.images[Math.floor(Math.random()*this.images.length)],
  //         images: [
  //           this.images[Math.floor(Math.random()*this.images.length)],
  //           this.images[Math.floor(Math.random()*this.images.length)],
  //           this.images[Math.floor(Math.random()*this.images.length)]
  //         ],
  //         supertag: jsonResponse[i]['superTag'],
  //         tag: jsonResponse[i]['subTag'],
  //         user: "김희재",
  //         filter: true
  //       };
  //       result[i] = singleData;
  //       tempSuperTagName.push(jsonResponse[i]['superTag']);
  //     }
  //     // console.log(result)
  //     this.superTagName = tempSuperTagName.filter( this.onlyUnique );
  //     console.log(this.superTagName)
  //     this.activities = result;
  //     this.filterByRange();
  //   })
    
  // }

  // onlyUnique(value, index, self) { 
  //   return self.indexOf(value) === index;
  // }

  // createSampleData(){
  //   for(var i = 0 ; i < 15 ; i++){

  //     var tempActivity = {

  //       supertag: this.superTagName[Math.floor(Math.random()*this.superTagName.length)],
  //       // tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],
  //       date: this.randomDate(new Date(2015, 1, 1), new Date(2025, 1, 1)),
  //       filter: true,
  //       tag: [
  //         this.tagName[Math.floor(Math.random()*this.tagName.length)], this.tagName[Math.floor(Math.random()*this.tagName.length)], this.tagName[Math.floor(Math.random()*this.tagName.length)]
  //       ],
  //       user: this.userName[Math.floor(Math.random()*this.userName.length)],
  //       content: this.content[Math.floor(Math.random()*this.content.length)],
  //       images: [
  //         this.images[Math.floor(Math.random()*this.images.length)],
  //         this.images[Math.floor(Math.random()*this.images.length)],
  //         this.images[Math.floor(Math.random()*this.images.length)]
  //       ]
  //     }
  //   }
  //   this.activities.push(tempActivity);

  //   for(var i = 0 ; i < 3 ; i++){

  //     var tempActivity = {

  //       supertag: this.superTagName[Math.floor(Math.random()*this.superTagName.length)],
  //       // tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],
  //       date: this.randomDate(new Date(new Date().setDate(((new Date().getDate()- 42)))), new Date()),
  //       filter: true,
  //       tag: [
  //         this.tagName[Math.floor(Math.random()*this.tagName.length)], this.tagName[Math.floor(Math.random()*this.tagName.length)], this.tagName[Math.floor(Math.random()*this.tagName.length)]
  //       ],
  //       user: this.userName[Math.floor(Math.random()*this.userName.length)],
  //       content: this.content[Math.floor(Math.random()*this.content.length)],
  //       images: [
  //         this.images[Math.floor(Math.random()*this.images.length)],
  //         this.images[Math.floor(Math.random()*this.images.length)],
  //         this.images[Math.floor(Math.random()*this.images.length)]
  //       ]

  //     }

  //     this.activities.push(tempActivity);

  //   }
    
  // }

  // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
  openDialog( params ): void {
    const dialogRef = this.dialog.open(ShowActivityComponent, {

      width: '1000px',
      height: '800px',
      data: { activities: params }

    });

    dialogRef.afterClosed().subscribe(result => {
      
    });

  }

  pointDate(){
      
      var activityPointer = this.elementRef.nativeElement.querySelector('#activities');
      activityPointer.innerHTML = "";

      for( var i = 0 ; i < this.activities.length ; i++ ){
        // 활동들을 선 위에 표시해 준다.
        if( this.activities[i].filter == true ){
          var newActivity = '<div id="activity_' + i + '" style="position:absolute; visibility:hidden;"><div style="height:15px; width:15px; background-color: orange; border-radius: 25px; visibility: hidden;"></div>';
          newActivity += '<div style= "color:orange; margin-top:10px; visibility: hidden;"><p>' + this.activities[i].tag + '</p><p>'+ this.activities[i].date.getFullYear() + '<br>' + ( this.activities[i].date.getMonth()+1 ) + " " + this.activities[i].date.getDate() + "일"; +'</p></div></div>';

          activityPointer.innerHTML = activityPointer.innerHTML + newActivity;
        }

      }

      /* !!! activities 들에 있는 활동들을 수직선 상에 표시해준다.
       * ! 활동들을 카드에 나타내는 것이 아니고, 선 위에 정확한 위치를 표현해 준다.
       * ! 예전에는 절대적인 위치를 표현해 주어야 했지 지금은 카드에만 표시하면 되게 기능이 변
       */
      // for(var i = 0 ; i < activities.length ; i++){
      //
      //   if( activities[i].filter == true ){
      //     var addActivity = this.elementRef.nativeElement.querySelector('#activity_' + i);
      //
      //     var newActivity_offsetLeft = ((activities[i].date - this.startDate) / this.totalDate) * this.horizontalLine.offsetWidth;
      //     addActivity.style.left = newActivity_offsetLeft + "px";
      //   }
      //
      // }

  }


  clickLeftTriangleMove(e){
    /*
     *  왼쪽 버튼이 눌리면, 한 단계 전 기간으로 탐색하는
     *  함수이다.
     */

    if(this.rangeVal == 0){
       // 4 years
       this.startDate = new Date(this.startDate.getFullYear() - 4, 0, 1);
       this.endDate = new Date(this.startDate.getFullYear() + 4, 0, 1);

    }else if(this.rangeVal == 1){

      // 1 years
      this.startDate = new Date(this.startDate.getFullYear() - 1, 0, 1);
      this.endDate = new Date(this.startDate.getFullYear() + 1, 0, 1);

    }else if(this.rangeVal == 2){
       // 4 months
      this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth()  -4, 1);
      this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 4, 1);

    }else if(this.rangeVal == 3){

       // 1 month
      this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth(), this.startDate.getDate() - 30);
      this.endDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth(), this.startDate.getDate() + 30);

    }

    this.totalDate = this.endDate - this.startDate;
    this.elementRef.nativeElement.querySelector('#current-date').innerText = this.startDate.getFullYear();

    this.pointDate()
    this.isActivitiesIn();
    this.markDateGraduation();
    this.markCard();
    this.addActivityToCard(this.activities);
    this.howManyActivities();

  }

  clickRightTriangleMove(e){
    /*
     *  오른쪽 버튼이 눌리면, 한 단계 다음 기간으로 탐색하는
     *  함수이다.
     */
    if(this.rangeVal == 0){
       // 4 years
       this.startDate = new Date(this.startDate.getFullYear() + 4, 0, 1);
       this.endDate = new Date(this.startDate.getFullYear() + 4, 0, 1);


    }else if(this.rangeVal == 1){

      // 1 years
      this.startDate = new Date(this.startDate.getFullYear() + 1, 0, 1);
      this.endDate = new Date(this.startDate.getFullYear() + 1, 0, 1);


    }else if(this.rangeVal == 2){
       // 4 months
      this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth() + 4, 1);
      this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 4, 1);


    }else if(this.rangeVal == 3){

       // 1 month
      this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth(), this.startDate.getDate() + 30);
      this.endDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth(), this.startDate.getDate() + 30);

    }

    this.totalDate = this.endDate - this.startDate;
    this.elementRef.nativeElement.querySelector('#current-date').innerText = this.startDate.getFullYear();

    this.pointDate()
    this.isActivitiesIn();
    this.markDateGraduation();
    this.markCard();
    this.addActivityToCard(this.activities);
    this.howManyActivities();

  }

  clickLeftTriangleSelect(e){

    // 왼쪽 버튼이 눌리면, rangeVal 을 하나 낮춘다. (탐색 기간을 하나 낮춘다)
    this.rangeVal = parseInt(this.elementRef.nativeElement.querySelector('#range-input').value);

    if( this.rangeVal > 0 ){

      this.elementRef.nativeElement.querySelector('#range-input').value= this.rangeVal - 1;
      this.rangeVal = this.rangeVal - 1;

    }else{

      return;

    }

    if( this.rangeVal == 0 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Years";
    }else if( this.rangeVal == 1 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "Whole Year";
    }else if( this.rangeVal == 2 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Months";
    }else if( this.rangeVal == 3 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "One Month";
    }

  }

  clickRightTriangleSelect(e){

    // 왼쪽 버튼이 눌리면, rangeVal 을 하나 낮춘다. (탐색 기간을 하나 낮춘다)
    this.rangeVal = parseInt(this.elementRef.nativeElement.querySelector('#range-input').value);

    if( this.rangeVal < 3 ){

      this.elementRef.nativeElement.querySelector('#range-input').value = this.rangeVal + 1;
      this.rangeVal = this.rangeVal + 1;

    }else{

      return;

    }

    if( this.rangeVal == 0 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Years";
    }else if( this.rangeVal == 1 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "Whole Year";
    }else if( this.rangeVal == 2 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Months";
    }else if( this.rangeVal == 3 ){
      this.elementRef.nativeElement.querySelector('#period-select').innerText = "One Month";
    }

  }

  // startDragging(e:MouseEvent){

    /*
     원이 클랙되었을 때 실행되는 함수였는데, 현재는 필요 없어졌다.
     문제가 발생하지 않으면 지워도 되는 코드들이다
    */

    // this.isDragging = true;
    // this.dragStart = e.clientX;

    // if( e['srcElement'].parentElement.id == "dateGraduation" ){
    //   // 만약 원이 클릭된 경우, 카드를 사라지지 않게 한다.
    //   // var cards = this.elementRef.nativeElement.querySelectorAll('card')
    //   //
    //   // for( var i = 0 ; i < cards.length ; i++ ){
    //   //   // 다른 행성이 클릭되면, 이전에 보여지고 있던 카드들은 감춘다.
    //   //
    //   //   cards[i].style.visibility = "hidden";
    //   //
    //   // }
    //
    //   this.isDragging = false;
    //   this.dragStart = undefined;
    //   this.doClickCard(e);
    //
    // }
  // }

  // handleMouseMove(e:MouseEvent){
    // 드래그 이벤트 / 마우스 움직임을 관리하는 함수

    // var horizontalLine = document.getElementsByClassName('horizontalLine')[0];
    // var posX = e.clientX;
    // var distance_p = (this.dragStart - posX) / this.horizontalLine.offsetWidth;
    // this.rangeVal = this.elementRef.nativeElement.querySelector('#range-input').value;
    // // this.startDate = new Date((this.totalDate - 0 ) * distance_p + (this.startDate - 0 ) );
    // // this.endDate = new Date((this.totalDate - 0 ) * distance_p + (this.endDate - 0 ) );
    //
    //  if( this.isDragging ){
    //
    //    if(this.rangeVal == 0){
    //       // 4 years
    //       if( distance_p > 0 ){
    //         this.startDate = new Date(this.startDate.getFullYear() + 4, 0, 1);
    //         this.endDate = new Date(this.endDate.getFullYear() + 4, 0, 1);
    //       }else if( distance_p < 0 ){
    //         this.startDate = new Date(this.startDate.getFullYear() - 4, 0, 1);
    //         this.endDate = new Date(this.endDate.getFullYear() - 4, 0, 1);
    //       }
    //
    //    }else if(this.rangeVal == 1){
    //
    //      // 1 years
    //      if( distance_p > 0 ){
    //        this.startDate = new Date(this.startDate.getFullYear() + 1, 0, 1);
    //        this.endDate = new Date(this.endDate.getFullYear() + 1, 0, 1);
    //      }else if( distance_p < 0 ){
    //        this.startDate = new Date(this.startDate.getFullYear() - 1, 0, 1);
    //        this.endDate = new Date(this.endDate.getFullYear() - 1, 0, 1);
    //      }
    //
    //    }else if(this.rangeVal == 2){
    //       // 4 months
    //       if( distance_p > 0 ){
    //         this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth()+1, 1);
    //         this.endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth()+1, 1);
    //       }else if( distance_p < 0 ){
    //         this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth()-1, 1);
    //         this.endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth()-1, 1);
    //       }
    //
    //    }else if(this.rangeVal == 3){
    //
    //    }
    //
    //
    //   this.totalDate = this.endDate - this.startDate;
    //   this.startDatePointer.innerText = this.startDate.getFullYear() + "\n" + ( this.startDate.getMonth() + 1) + " " + this.startDate.getDate() + "일";
    //   // this.endDatePointer.innerText = this.endDate.getFullYear() + "\n" + ( this.endDate.getMonth() + 1) + " " + this.endDate.getDate() + "일";
    //   this.dragStart = posX;
    //
    //   this.pointDate(this.activities)
    //   this.isActivitiesIn();
    //   this.markDateGraduation();
    //   this.markCard();
    //   this.addActivityToCard(this.activities);
    // }
  // }

  /*
   * stopDragging 은 드래그 기능이 실제로 나타나게 하는 함수이다.
   * 현재는 필요가 없어져서 주석 처리해 놓았다.
   * ( 나중에 다시 활용될 수 도 있어서 지우지는 않았다. )
   */
  // stopDragging(e:MouseEvent){
  //   var horizontalLine = document.getElementsByClassName('horizontalLine')[0];
  //   var posX = e.clientX;
  //   var distance_p = (this.dragStart - posX) / this.horizontalLine.offsetWidth;
  //   this.rangeVal = this.elementRef.nativeElement.querySelector('#range-input').value;
  //
  //    if( this.isDragging ){
  //
  //      if(this.rangeVal == 0){
  //         // 4 years
  //         if( distance_p > 0 ){
  //           this.startDate = new Date(this.startDate.getFullYear() + 4, 0, 1);
  //           this.endDate = new Date(this.endDate.getFullYear() + 4, 0, 1);
  //         }else if( distance_p < 0 ){
  //           this.startDate = new Date(this.startDate.getFullYear() - 4, 0, 1);
  //           this.endDate = new Date(this.endDate.getFullYear() - 4, 0, 1);
  //         }
  //
  //      }else if(this.rangeVal == 1){
  //
  //        // 1 years
  //        if( distance_p > 0 ){
  //          this.startDate = new Date(this.startDate.getFullYear() + 1, 0, 1);
  //          this.endDate = new Date(this.endDate.getFullYear() + 1, 0, 1);
  //        }else if( distance_p < 0 ){
  //          this.startDate = new Date(this.startDate.getFullYear() - 1, 0, 1);
  //          this.endDate = new Date(this.endDate.getFullYear() - 1, 0, 1);
  //        }
  //
  //      }else if(this.rangeVal == 2){
  //         // 4 months
  //         if( distance_p > 0 ){
  //           this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth()+1, 1);
  //           this.endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth()+1, 1);
  //         }else if( distance_p < 0 ){
  //           this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth()-1, 1);
  //           this.endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth()-1, 1);
  //         }
  //
  //      }else if(this.rangeVal == 3){
  //
  //         // 1 month
  //         if( distance_p > 0 ){
  //           this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth(), this.startDate.getDate() + 7);
  //           this.startDate = new Date(this.endDate.getFullYear() , this.endDate.getMonth(), this.endDate.getDate() + 7);
  //         }else if( distance_p < 0 ){
  //           this.startDate = new Date(this.startDate.getFullYear() , this.startDate.getMonth(), this.startDate.getDate() - 7);
  //           this.startDate = new Date(this.endDate.getFullYear() , this.endDate.getMonth(), this.endDate.getDate() - 7);
  //         }
  //
  //      }
  //
  //   }
  //
  //   this.totalDate = this.endDate - this.startDate;
  //   this.dragStart = posX;
  //
  //   this.pointDate(this.activities)
  //   this.isActivitiesIn();
  //   this.markDateGraduation();
  //   this.markCard();
  //   this.addActivityToCard(this.activities);
  //   this.howManyActivities();
  //   this.isDragging = false;
  //
  // }

  isActivitiesIn(){

    for( var i = 0 ; i < this.activities.length ; i++ ){

      if( this.activities[i].filter == true ){
        var checkActivityPointer = this.elementRef.nativeElement.querySelector('#activity_' + i);
        var activityPointer_l = parseFloat(checkActivityPointer.style.left.replace("px", ""));

        // 수평선 밖으로 나가면 html 을 보이지 않게 설정한다.
        if( activityPointer_l < 0 || activityPointer_l > this.horizontalLine.offsetWidth ){

          checkActivityPointer.style.visibility = "hidden";

        }else{

          checkActivityPointer.style.visibility = "visible";

        }

      }

    }

  }

  /*
   * 아래 함수는 스크롤했을 때 실행되는
   * 함수이다.
   */

  // doScroll(e){
  //
  //   this.scrollTimeout = Date.now();
  //   e.preventDefault();
  //
  //
  //   var startDateCandidate = new Date( this.startDate - (this.unit * e.deltaY * (e.clientX - this.horizontalLine.offsetLeft)) * -1 );
  //   var endDateCandidate = new Date( this.endDate - (this.unit * e.deltaY * (this.horizontalLine.offsetLeft + this.horizontalLine.offsetWidth - e.clientX )));
  //
  //   if(startDateCandidate < endDateCandidate ){
  //
  //     this.startDate = new Date(this.startDate - (this.unit * e.deltaY * (e.clientX - this.horizontalLine.offsetLeft))*-1);
  //     this.endDate = new Date(this.endDate - (this.unit * e.deltaY * (this.horizontalLine.offsetLeft + this.horizontalLine.offsetWidth - e.clientX )));
  //
  //     this.totalDate = this.endDate - this.startDate;
  //
  //     this.filterByRange();
  //
  //   }
  //
  // }

  filterByRange(activities: any[]){

    this.activities = activities
    /*
     *  기간 단위 별로, 해당하는 startDate, endDate 를 설정하는 함수이다.
     *  0: 1년 단위 -> 6년 전 ~ 오늘
     *  1: 3개월 단위 -> 18개월 전 ~ 오늘
     *  2: 1개월 단위 -> 6개월 전 ~ 오늘
     *  3: 1주일 단위 -> 한달 전 ~ 오늘
     */

    this.horizontalLine = this.elementRef.nativeElement.querySelector('.horizontalLine');
    var val = this.elementRef.nativeElement.querySelector('#range-input').value;

     if( val == 0 ){

        // 5 years
        this.endDate = new Date( new Date().getFullYear() + 1, 0, 1 );
        this.startDate = new Date(this.endDate.getFullYear() - 4, 0, 1);


     }else if( val == 1 ){

        this.endDate = new Date( new Date().getFullYear() + 1, 0, 1 );
        this.startDate = new Date(this.endDate.getFullYear() - 1, 0, 1);
        // 3개월 단위 기준으로 변경 -> 18개월 전 ~ endDate까지가 범위가 된다.
        // startDate => endDate 에서 눈금의 수 * 3만큼 빼 주면 된다.
        // this.startDate.setMonth(this.endDate.getMonth() - this.graduationNumber * 3);


     }else if( val == 2 ){

       this.endDate = new Date( new Date().getFullYear(), new Date().getMonth() + 1, 1 );
       this.startDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth() - 4, 1);

     }else if( val == 3 ){

       this.endDate = new Date( new Date().getFullYear(), new Date().getMonth() + 1, 1 );
       this.startDate = new Date(this.endDate.getFullYear(), new Date().getMonth(), 1);

     }

    this.totalDate = this.endDate - this.startDate;
     
    this.pointDate();
    this.isActivitiesIn();
    this.markDateGraduation();
    this.markCard();
    this.addActivityToCard(this.activities);
    this.howManyActivities();

  }

  markDateGraduation(){

    // 수평선 위에 눈금을 표시해 주는 함수
    var dateGraduation = document.getElementById('dateGraduation');
    var dateGraduationMarker = new Date(this.startDate);
    var html = '';
    var dateGraduationLeft;
    var dateGraduationDate;
    var rangeVal = this.elementRef.nativeElement.querySelector('#range-input').value;

    // 첫번째 원 표시
    html += '\
    <p class="animated fadeInRightBig  dateGraduation_p" style="position:absolute; bottom:15px;left: 0px">'+ this.startDate.getFullYear() + ' / ' +( this.startDate.getMonth() + 1 ) + '</p><div class="animated zoomInRight dateGraduation hoverable" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; top: -14px; border: 1px solid #727272 ; left:"0px" data-graduation-date = "' + ( this.startDate - 0 ) + '" ></div>';

    dateGraduation.innerHTML = html;

    while( dateGraduationMarker  < this.endDate ){
      // 4 years
      if( rangeVal == 0 ){

        if( new Date( dateGraduationMarker.getFullYear() + 1, 0, 1 ) < this.endDate ){

          dateGraduationMarker = new Date(dateGraduationMarker.getFullYear() + 1, 0, 1);

        }else{

          break;

        }

      }else if( rangeVal == 1 ){

        if( new Date( dateGraduationMarker.getFullYear(), dateGraduationMarker.getMonth() + 3, 1 ) < this.endDate ){

          dateGraduationMarker.setMonth(dateGraduationMarker.getMonth() + 3);

        }else{

          break;

        }

      }else if( rangeVal == 2 ){

        if( new Date( dateGraduationMarker.getFullYear(), dateGraduationMarker.getMonth() + 1, 0 ) < this.endDate ){

          dateGraduationMarker.setMonth(dateGraduationMarker.getMonth() + 1);

        }else{

          break;

        }

      }else if( rangeVal == 3 ){

        if( new Date( dateGraduationMarker.getFullYear(), dateGraduationMarker.getMonth(), dateGraduationMarker.getDate() + 7 ) < this.endDate ){

          dateGraduationMarker.setDate(dateGraduationMarker.getDate() + 7);

        }else{

          break;

        }

      }

      if( dateGraduationMarker  < this.endDate ){
        dateGraduationDate = new Date( dateGraduationMarker );
        dateGraduationLeft = this.horizontalLine.offsetWidth * ( Date.parse(dateGraduationMarker + "") - Date.parse(this.startDate + "") ) / this.totalDate + "";

        html +='\
        <p class="animated fadeInRightBig  dateGraduation_p" style="position:absolute; bottom:15px;left:'+ dateGraduationLeft + 'px">'+ dateGraduationDate.getFullYear()+ ' / ' +( dateGraduationDate.getMonth() + 1 )  + '</p><div class="animated zoomInRight dateGraduation hoverable" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; border: 1px solid #727272 ; top: -14px; left:'+ dateGraduationLeft + 'px" data-graduation-date = "' + ( dateGraduationDate - 0 ) + '" ></div>';
      }

    }

    dateGraduationLeft = this.horizontalLine.offsetWidth;
    // 마지막 원 표시
    html += '\
    <img id="right-arrow" class="animated zoomInRight" src= "/assets/images/right_arrow.png" style="width: 80px; position: absolute; left:'+ (dateGraduationLeft - 80) + 'px; top: -140px;" />';
    html +='\
    <div class="animated zoomInRight dateGraduation hoverable" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; visibility:hidden; border: 1px solid #727272 ; top: -14px; left:'+ dateGraduationLeft + 'px" data-graduation-date = "' + ( dateGraduationDate - 0 ) + '" ></div>';

    dateGraduation.innerHTML = html;

    this.elementRef.nativeElement.querySelector('#right-arrow').addEventListener('click', this.clickRightTriangleMove.bind(this));

    for( var i = 0 ; i < dateGraduation.children.length - 2 ; i++ ){
      // 마지막 원은 이벤트에서 제거한다.
      dateGraduation.children[i].addEventListener('mouseenter', this.doMouseEnterCard.bind(this));
      dateGraduation.children[i].addEventListener('mouseout', this.doMouseLeaveCard.bind(this));
      dateGraduation.children[i].addEventListener('click', this.doClickCard.bind(this));

    }

  }

  markCard(){

    /*
     * 점의 개수만큼, 카드를 생성해 주는 함수이다.
     */

    var cardArea = this.elementRef.nativeElement.querySelector('#cardArea');
    cardArea.innerHTML = "";
    var graduations = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
    var cardWidth;
    var cardAreaHTML = cardArea.innerHTML;

    for( var i = 0 ; i < graduations.length ; i++ ){

      if( i==0 ){
        // 첫번째 카드는 Dummy (실제로는 아무런 기능을 하지 않지만, 이 코드들을 지우면 안된다.)
        cardWidth = graduations[i].offsetLeft;

        cardAreaHTML +=
        '<div class="card horizontal hoverable white" style="position: absolute; left: 0px; width:'+  cardWidth * 1 +'px; visibility: hidden; display: none; z-index: 100;" >\
          <div class="row" id="card_' + i + '" style="margin: 0px; width: 100%;">\
          </div>\
          <div class="card-bubble-arrow-border" style="border-color: rgba(0, 0, 0, 0.2) transparent\
          transparent transparent !important;\
          border-style: solid;\
          border-width: 20px;\
          height: 0;\
          width: 0;\
          position: absolute;\
          bottom: -42px;\
          left: -0.5px;"></div>\
          <div class="card-bubble-arrow" style="border-color: #ffffff transparent transparent transparent !important;\
          border-style: solid;\
          border-width: 20px;\
          height: 0;\
          width: 0;\
          position: absolute;\
          bottom: -39px;\
          left: -0.5px;"></div>\
        </div>';

      }else{

        cardWidth = graduations[i].offsetLeft - graduations[i-1].offsetLeft;

        cardAreaHTML +=
        '<div class="card horizontal hoverable white" style="position: absolute; left:' + (graduations[i-1].offsetLeft + this.horizontalLineOffsetLeft) + 'px; width:'+  cardWidth * 2 +'px; visibility:hidden; z-index: 100;">\
          <div class="row" id="card_' + i + '" style="margin: 0px; width: 100%;">\
          </div>\
          <div class="card-bubble-arrow-border" style="border-color: rgba(0, 0, 0, 0.2) transparent transparent transparent !important;\
          border-style: solid;\
          border-width: 20px;\
          height: 0;\
          width: 0;\
          position: absolute;\
          bottom: -42px;\
          left: -0.5px;"></div>\
          <div class="card-bubble-arrow" style="border-color: #ffffff transparent transparent transparent !important;\
          border-style: solid;\
          border-width: 20px;\
          height: 0;\
          width: 0;\
          position: absolute;\
          bottom: -39px;\
          left: -0.5px;"></div>\
        </div>';

      }

    }

    this.elementRef.nativeElement.querySelector('#cardArea').innerHTML = cardAreaHTML;

    var cards = this.elementRef.nativeElement.querySelectorAll('.card');

    for( var i = 0 ; i < cards.length  - 2; i++ ){

      this.isClicked[i] = false;
      // cards[i].addEventListener('mouseenter', this.doMouseEnterCard.bind(this));
      // cards[i].addEventListener('click', this.doClickCard.bind(this));
      // cards[i].addEventListener('mouseout', this.doMouseLeaveCard.bind(this));

    }

  }

  changeCardFormat(index){

    var activityParent = this.elementRef.nativeElement.querySelectorAll('.card')[index].firstElementChild.children;
    var selected_card = this.elementRef.nativeElement.querySelectorAll('.card')[this.currentVisibleCard];
    var past_width = selected_card.offsetWidth;
    var past_left = selected_card.offsetLeft;

    selected_card.style.zIndex = "10";

    // 활동이 6개 이상이면 더이상 출력하지 않는다.
    for(var j = 0 ; j < selected_card.children[0].children.length ; j++){

      if( j > 2){

        selected_card.children[0].children[j].style.display = "none";

      }

    }

    if( selected_card.children[0].children.length > 3 ){

      selected_card.insertAdjacentHTML('beforeend', '\
        <div class="plus_button_section">\
            <p id="plus_button_'+ index +'" style="float: right; margin-right: 20px;">'+ '+ ' + (selected_card.children[0].children.length-3) +'</p>\
        </div>\
      ');

      this.elementRef.nativeElement.querySelector('#plus_button_' + index).addEventListener('click', function(e){
        var params = [];

        // var selected_card = e['srcElement'].parentElement.parentElement.parentElement;
        var selected_card = e['srcElement'].parentElement.parentElement;
        var included_activities = selected_card.childNodes[4].children;


        for( var i = 0 ; i < included_activities.length ; i++ ){

          let activity_id = included_activities[i].dataset.activity_id;
          params.push( this.activities[activity_id] );

        }

        this.openDialog( params );

      }.bind(this))

    }

    // 카드에 최소화, 최대화 버튼 추가
    selected_card.insertAdjacentHTML("afterbegin",

      '\
      <div class = "card-buttons" style = "float: right;">\
        <div class = "row">\
          <div class = "col s9 m9 l9"></div>\
          <div class = "col s2 m2 l2"></div>\
            <img src="/assets/images/maximize_button.png" id="maximize-button-'+ index +'" style="width: 20px; height: 20px;">\
            <img src="/assets/images/close_button_circle.png" id="close-button-'+ index +'" style="width: 20px; height: 20px;">\
          &nbsp;&nbsp;&nbsp;&nbsp;\
        </div>\
      </div>\
      '

    );

    this.elementRef.nativeElement.querySelector('#maximize-button-'+index).addEventListener('click', function(e){

      var params = [];

      var selected_card = e['srcElement'].parentElement.parentElement.parentElement;

      var included_activities = selected_card.querySelectorAll(".card-activity");


      for( var i = 0 ; i < included_activities.length ; i++ ){

        let activity_id = included_activities[i].dataset.activity_id;
        params.push( this.activities[activity_id] );

      }

      this.openDialog( params );

    }.bind(this));

    this.elementRef.nativeElement.querySelector('#close-button-'+index).addEventListener('click', function(e){

      // 닫기 버튼이 눌리면, 어두운 배경 화면을 없앤다.
      this.elementRef.nativeElement.querySelectorAll('.black-background')[0].style.display = "none";
      this.isScreenBlack = false;

      var selected_card = e['srcElement'].parentElement.parentElement.parentElement;
      var past_width = selected_card.offsetWidth;
      var past_left = selected_card.offsetLeft;
      activityParent = this.elementRef.nativeElement.querySelectorAll('.card')[index].children[1].children;

      selected_card.querySelector('.plus_button_section') != null ? selected_card.querySelector('.plus_button_section').remove() : console.log("Plus Button not exist");
      selected_card.querySelector('.card-buttons').remove();

      // 카드의 너비를 늘려야 하는 경우 (원래 상태로 복귀해야 함)
      if( activityParent.length > 1 ){
        selected_card.style.width = past_width * 2 + "px";
        selected_card.style.top = 0 - selected_card.offsetHeight + "px";

        for(var i = 0 ; i < activityParent.length ; i++){

          activityParent[i].classList.remove("s12");
          activityParent[i].classList.remove("m12");
          activityParent[i].classList.remove("s12");
        	activityParent[i].classList.add("s6");
        	activityParent[i].classList.add("m6");
        	activityParent[i].classList.add("l6");
          activityParent[i].classList.add("clickable");
          activityParent[i].style.display = "block";

        }

      }

      selected_card.style.visibility = "hidden";
      selected_card.classList.remove('card-pinned');

    }.bind(this));

    // 카드의 너비를 줄여야 하는 경우
    if( activityParent.length > 1 ){

      selected_card.style.width = past_width / 2 + "px";

      for(var i = 0 ; i < activityParent.length ; i++){

        activityParent[i].classList.remove("s6");
        activityParent[i].classList.remove("m6");
        activityParent[i].classList.remove("l6");
        activityParent[i].classList.remove("clickable");
        activityParent[i].classList.add("s12");
        activityParent[i].classList.add("m12");
        activityParent[i].classList.add("s12");

      }
    }

    selected_card.style.visibility = "visible";
    selected_card.classList.add('animated');
    selected_card.classList.add('fadeIn');
    this.isClicked[this.currentVisibleCard] = true;
    selected_card.classList.add('card-pinned');
    selected_card.style.top = 0 - selected_card.offsetHeight + "px";

  }

  makePortfolioWithSuperTag(supertag, activityInd){

    var portfolio = [];
    var portfolioInd = 0;

    this.activities.forEach((portfolioActivity, i) => {

      if(portfolioActivity.supertag == supertag){
        // 포트폴리오 모달에서 클릭된 활동을 보여주기 위해 portfolioInd라는 변수가 필요하다.
        if(activityInd > i){
          portfolioInd++;
        }

        portfolio.push(portfolioActivity);

      }
    })

    let result = new Object();
    result['portfolio'] = portfolio;
    result['portfolioInd'] = portfolioInd;

    return result;

  }

  addActivityToCard(activities){

    var cards = this.elementRef.nativeElement.querySelectorAll('.card');
    var dateGraduation = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
    var dateGraduationWidth = dateGraduation[1].getAttribute('data-graduation-date') - dateGraduation[0].getAttribute('data-graduation-date');

    for( var i = 0 ; i < activities.length ; i++ ){

      if( activities[i].filter == true ){

        var activityDate = Date.parse(activities[i].date) - Date.parse(this.startDate);

        var cardIndex = Math.floor(activityDate / dateGraduationWidth) + 1;

        if(cards.length > cardIndex && cardIndex > 0 ){

          var cardHTML = cards[cardIndex].children[0].innerHTML;

          cardHTML += '\
              <div class="col s6 m6 l6 card-activity" id="card-activity-'+ i +'" style="padding: 0px;" data-activity_id=' + i + '>\
                <div class="card-image" style="float:left;">\
                  <img class="card-image-specific" src="'+ activities[i].thumbnail +'" style="height: ' + this.listImageHeight + 'px; padding: 15px; ">\
                </div>\
                <div class="card-content" style="margin-left: 110px; padding: 15px;">\
                  <p style="font-size: 15px; font-weight:bold;" id= "cardTitle_' + i + '" class="card-title">' + activities[i].tag + '</p>\
                  <p style="text-overflow: ellipsis;">'+ activities[i].supertag +'</p>\
                  <p style="text-overflow: ellipsis;">'+activities[i].date.getFullYear() + '/' + (activities[i].date.getMonth()+1)+ '/' + activities[i].date.getDate()+'</p>\
                </div>\
              </div>\
            ';

          cards[cardIndex].children[0].innerHTML = cardHTML;

        }

      }

    }


    this.activities.forEach((portfolioActivity, i) => {

      let activity = this.elementRef.nativeElement.querySelector('#card-activity-'+i);

      if(activity != null){
        // 활동을 클릭되었을 때 취해져야 할 액션을 표시한다.

        activity.addEventListener('click', function(e){

          let result = this.makePortfolioWithSuperTag(portfolioActivity.supertag, activity.dataset.activity_id);

          let portfolio = result.portfolio;
          var tagSet = new Set();

          for ( var i = 0 ; i < portfolio.length ; i++){
            for( var j = 0 ; j < portfolio[i].tag.length ; j++ ){
              tagSet.add(portfolio[i].tag[j]);
            }
          }

          this.openPortfolio(portfolio, Array.from(tagSet), result.portfolioInd);

        }.bind(this))

        // 활동이 hover되었을 때 나타내야 할 액션을 표현해야 한다.(썸네일 이미지를 어둡게 하고, 밑줄이 쳐지게 해야 한다. )
        activity.addEventListener('mouseenter', function(e){

          var cardActivityImageSpecific = activity.querySelector('.card-image-specific');
          var cardTitle = activity.querySelector('.card-title');

          cardTitle.style.textDecoration = "underline";
          cardActivityImageSpecific.style.filter = "brightness(75%)";
        }.bind(this))


        activity.addEventListener('mouseleave', function(e){

          var cardActivityImageSpecific = activity.querySelector('.card-image-specific');
          var cardTitle = activity.querySelector('.card-title');

          cardTitle.style.textDecoration = "none";
          cardActivityImageSpecific.style.filter = "brightness(100%)";

        }.bind(this))

      }
    })

    for( var i = 0 ; i < cards.length ; i++ ){

      if( this.elementRef.nativeElement.querySelector('#card_' + i).children.length == 1 ){

        cards[i].style.width = parseInt(cards[i].style.width.replace("px", "")) / 2 + "px";
        // cards[i].style.left = cards[i].offsetLeft + parseInt(cards[i].style.width.replace("px", "")) / 3 + "px";
        cards[i].style.top = 0 - cards[i].offsetHeight + "px";

      }

    }

  }

  doMouseEnterCard(e){

    /*
     * 원에 마우스가 들어갈 때, 카드가 눈에 보이게 한다.
     */

    if( !(this.currentlyClicked) ){
      if( !(this.isScreenBlack) ){
        // 화면이 밝으면
        (<HTMLElement>document.querySelectorAll('.black-background')[0]).style.display = "block";
        this.isScreenBlack = true;
      }

      var d = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
      var cards = this.elementRef.nativeElement.querySelectorAll('.card');

      for( var i = 0 ; i < cards.length ; i++ ){

        if( cards[i].children[0].innerHTML.replace(/\s/g, '') == "" ){

          // 카드 내용이 비었을 경우에는 활동 내역이 없다는 문구를 출력한다.
          cards[i].children[0].innerHTML += "<p>활동 내역이 없습니다.</p>" ;
          cards[i].style.width = cards[i].offsetWidth / 2 + "px";
          // cards[i].style.left = parseInt(cards[i].style.left.replace("px", "")) +  cards[i].offsetWidth / 2 + "px";

        }else{

          cards[i].style.top = 0 - cards[i].offsetHeight + "px";

          // 활동이 6개 이상이면 더이상 출력하지 않는다.
          for(var j = 0 ; j < cards[i].children[0].children.length ; j++){

            if( j > 6){
              cards[i].children[0].children[j].style.display = "none";
            }

          }
          if( cards[i].children[0].children.length > 6 ){

            cards[i].children[0].insertAdjacentHTML('beforeend', '<p style="float: right">더보기</p>');

          }

        }

      }

      // if(d[0].getBoundingClientRect().left > e.clientX){
      //
      //   this.currentVisibleCard = 0;
      //
      // }else{

        for( var i = 0 ; i < d.length ; i++ ){

          if( d[i].getBoundingClientRect().left  > e.clientX ){

            this.currentVisibleCard = i;

            break;

          }

        }


      if( this.currentVisibleCard < cards.length ){

        cards[this.currentVisibleCard].style.visibility = "visible";
        cards[this.currentVisibleCard].style.zIndex = "11";
        cards[this.currentVisibleCard].classList.add("animated");

      }

    }

  }

  doClickCard(e){

    // this.currentlyClicked = true;
    /*
     * hovering 했었을 때 나타난 카드를
     * 클릭했을 때 발생하는 함수이다.
     */

    var d = this.elementRef.nativeElement.querySelectorAll('dateGraduation');
    var cards = this.elementRef.nativeElement.querySelectorAll('card');
    var minLength = Infinity;

    for(var i = 0 ; i < d.length ; i++){

      if( d[i].getBoundingClientRect().left > e.clientX ){

        this.currentVisibleCard = i;

        break;

      }

    }

    if( this.isClicked[this.currentVisibleCard] == false ){
      // 카드의 너비를 조정한다. ( 클릭되면 카드의 너비를 좁게 만든다. )
      this.changeCardFormat(this.currentVisibleCard);

    }

  }

  doMouseLeaveCard(e){

    // 마우스가 카드에서 벗어났을 때 실행되는 함수이다.
    this.currentlyClicked = false;
    var d = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
    var cards = this.elementRef.nativeElement.querySelectorAll('.card');
    var minLength = Infinity;

    if( this.isScreenBlack ){

      (<HTMLElement>document.querySelectorAll('.black-background')[0]).style.display = "none";
      this.isScreenBlack = false;

    }

    if( this.isClicked.length == 0 ){

      for( var i = 0 ; i < cards.length ; i++ ){
        cards[i].style.visibility = "hidden";
        cards[i].style.zIndex = "10";
      }

    }

    for(var i = 0 ; i < cards.length ; i++){

      if( cards[i].classList.contains('card-pinned') == false ){

        cards[i].style.visibility = "hidden";
        cards[i].style.zIndex = "10";
        this.isClicked[i] = false;

      }

    }
  }

  howManyActivities(){

    /*
     * 카드에 얼마나 많은 활동이 있는지 세고, 이에 따라서 카드의 top position을 결정한다.
     * (카드에 활동이 많아지게 되면, 카드가 너무 아래에까지 침범하게 되는 현상이 발생하게 되서 이러한 함수가 필요하다.)
     */

    var cards = this.elementRef.nativeElement.querySelectorAll('.card');
    var dateGraduations = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');

    for( var i = 1 ; i < cards.length ; i++ ){

      var activities_count = cards[i].children[0].childElementCount;

      dateGraduations[i-1].style.width = parseInt(dateGraduations[i-1].style.width.replace("px", "")) + (10 * activities_count) + "px";
      dateGraduations[i-1].style.height = parseInt(dateGraduations[i-1].style.height.replace("px", "")) + (10 * activities_count) + "px";
      dateGraduations[i-1].style.borderRadius = parseInt(dateGraduations[i-1].style.borderRadius.replace("px", "")) + (10 * activities_count) + "px";
      dateGraduations[i-1].style.top = parseInt(dateGraduations[i-1].style.width.replace("px", "")) / 2  * -1  + "px";

      cards[i].style.top = 0 - cards[i].offsetHeight + "px";

    }

  }

  // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
  openPortfolio( portfolio, tagSets, portfolioInd ): void {


    history.pushState(null, null, '/portfolio/user_id');

    const userPortfolio = this.dialog.open(PortfolioShowComponent, {

      width: '68%',
      height: '80%',
      maxWidth: '3000px',
      data: { portfolio: portfolio, tags: tagSets, currentPortfolioInd: portfolioInd },
      hasBackdrop: true,
      position: {
        'top': '5%',
        'left': '27%'
      }

    });

    userPortfolio.afterClosed().subscribe(result => {

      history.pushState(null, null, '/horizontalline');
      userPortfolioLeftProfile.close();

    });
    const userPortfolioLeftProfile = this.dialog.open(PortfolioModalLeftProfileComponent, {

      width: '20%',
      height: '80%',
      maxWidth: '3000px',
      data: { 
        portfolioTitle: portfolio[0].supertag, 
        tags: tagSets
      },
      hasBackdrop: false,
      backdropClass: 'white',
      position: {
        'top': '5%',
        'left': '5%'
      }

    });
    
    userPortfolioLeftProfile.afterClosed().subscribe(result => {

      console.log('ShowSpecificActivitiesComponent Modal was closed');

    });

  }

}