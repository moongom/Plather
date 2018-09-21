import { AfterViewInit, Component, OnInit, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShowSpecificActivitiesComponent } from '../show-specific-activities/show-specific-activities.component';

@Component({

  selector: 'usertimeline',
  templateUrl: './usertimeline.component.html',
  styleUrls: ['./usertimeline.component.css']

})


export class UsertimelineComponent implements OnInit {

  constructor(private elementRef:ElementRef, public dialog: MatDialog) { }

  initCount = 1;
  miniDate;
  maximDate;
  startDate:any;
  endDate:any;
  // endDatePointer;
  totalDate:any;
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
  activities = [];
  isScreenBlack = false;
  tagName = [ "테니스", "수영", "요가", "메이크업", "디자인", "퀼트", "회화", "소믈리에", "발레", "채식주의자", "서브웨이", "문곰과 귤", "인문역량강화사업", "그래픽 디자인" ];
  superTagName = ['스포츠', '프로그래밍', '취미생활'];
  // Drag
  isDragging = false;
  dragStart;

  ngOnInit() {

    this.startDate = new Date(new Date().getFullYear() - 3, 0, 1);

    this.endDate = new Date(new Date().getFullYear() + 1, 0, 1);

    this.totalDate=this.endDate-this.startDate;

  }

  ngAfterViewInit() {

    // Dummy Data 생성
    for(var i = 0 ; i < 15 ; i++){

      var tempActivity = {

        supertag: this.superTagName[Math.floor(Math.random()*this.superTagName.length)],
        tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)] + '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],
        date: this.randomDate(new Date(2015, 1, 1), new Date(2025, 1, 1)),
        filter: true

      }

      this.activities.push(tempActivity);

    }

    for(var i = 0 ; i < 3 ; i++){

      var tempActivity = {

        tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)] + '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],
        date: this.randomDate(new Date(new Date().setDate(((new Date().getDate()- 42)))), new Date()),
        supertag: this.superTagName[Math.floor(Math.random()*this.superTagName.length)],
        filter: true

      }

      this.activities.push(tempActivity);

    }

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

    this.filterByRange();
    this.elementRef.nativeElement.querySelector('#current-date').innerText = this.startDate.getFullYear();
    this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Years";

    (<HTMLElement>document.querySelectorAll('.fixedclass')[0]).style.top = (<HTMLElement>document.querySelectorAll('.navbar')[0]).offsetHeight + 13 + "px";

  }

  // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
  openDialog( params ): void {
    const dialogRef = this.dialog.open(ShowSpecificActivitiesComponent, {

      width: '1000px',
      height: '800px',
      data: { activities: params }

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('ShowSpecificActivitiesComponent Modal was closed');

    });

  }

  randomDate(start, end) {

    // 랜덤 샘플 데이터들을 생성해준다.
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  }

  pointDate( activities ){

      var activityPointer = this.elementRef.nativeElement.querySelector('#activities');
      activityPointer.innerHTML = "";

      for( var i = 0 ; i < activities.length ; i++ ){
        // 활동들을 선 위에 표시해 준다.
        if( activities[i].filter == true ){
          var newActivity = '<div id="activity_' + i + '" style="position:absolute; visibility:hidden;"><div style="height:15px; width:15px; background-color: orange; border-radius: 25px; visibility: hidden;"></div>';
          newActivity += '<div style= "color:orange; margin-top:10px; visibility: hidden;"><p>' + activities[i].tag + '</p><p>'+ activities[i].date.getFullYear() + '<br>' + ( activities[i].date.getMonth()+1 ) + " " + activities[i].date.getDate() + "일"; +'</p></div></div>';

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

    this.pointDate(this.activities)
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

    this.pointDate(this.activities)
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

  startDragging(e:MouseEvent){

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
  }

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

  filterByRange(){

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

    this.pointDate(this.activities);
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

    html += '\
    <p class="animated fadeInRightBig  dateGraduation_p" style="position:absolute; bottom:15px;left: 0px">'+ this.startDate.getFullYear() + ' / ' +( this.startDate.getMonth() + 1 ) + '</p><div class="animated zoomInRight dateGraduation" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; top: -14px; border: 1px solid #727272 ; left:"0px" data-graduation-date = "' + ( this.startDate - 0 ) + '" ></div>';

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
        <p class="animated fadeInRightBig  dateGraduation_p" style="position:absolute; bottom:15px;left:'+ dateGraduationLeft + 'px">'+ dateGraduationDate.getFullYear()+ ' / ' +( dateGraduationDate.getMonth() + 1 )  + '</p><div class="animated zoomInRight dateGraduation" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; border: 1px solid #727272 ; top: -14px; left:'+ dateGraduationLeft + 'px" data-graduation-date = "' + ( dateGraduationDate - 0 ) + '" ></div>';
      }

    }

    dateGraduationLeft = this.horizontalLine.offsetWidth;

    html += '\
    <p class="animated fadeInRightBig  dateGraduation_p" style="position:absolute; bottom:15px;left:'+ dateGraduationLeft + 'px">'+ this.endDate.getFullYear() + ' / ' +( this.endDate.getMonth() + 1 ) + '</p><div class="animated zoomInRight dateGraduation" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; top: -14px; border: 1px solid #727272 ; left:'+ dateGraduationLeft + 'px" data-graduation-date = "' + ( this.endDate - 0 ) + '" ></div>';

    dateGraduation.innerHTML = html;

    for( var i = 0 ; i < dateGraduation.children.length ; i++ ){

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

        cardWidth = graduations[i].offsetLeft;

        cardAreaHTML +=
        '<div class="card horizontal white" style="position: absolute; left: 0px; width:'+  cardWidth * 1 +'px; visibility: hidden; z-index: 1000;" >\
          <div class="row" id="card_' + i + '" style="margin: 0px; width: 100%;">\
          </div>\
         </div>';

      }else{

        cardWidth = graduations[i].offsetLeft - graduations[i-1].offsetLeft;

          cardAreaHTML +=
          '<div class="card horizontal white" style="position: absolute; left:' + (graduations[i-1].offsetLeft - cardWidth/2) + 'px; width:'+  cardWidth * 1.7 +'px; visibility:hidden; z-index: 1000;">\
            <div class="row" id="card_' + i + '" style="margin: 0px; width: 100%;">\
            </div>\
          </div>';

      }

    }

    this.elementRef.nativeElement.querySelector('#cardArea').innerHTML = cardAreaHTML;

    var cards = this.elementRef.nativeElement.querySelectorAll('.card');

    for( var i = 0 ; i < cards.length ; i++ ){

      this.elementRef.nativeElement.querySelectorAll('.card')[i].addEventListener('click', this.doClickCard.bind(this));
      this.elementRef.nativeElement.querySelectorAll('.card')[i].addEventListener('mouseleave', this.doMouseLeaveCard.bind(this));
      this.isClicked[i] = false;

    }

  }

  changeCardFormat(index){

    var activityParent = this.elementRef.nativeElement.querySelectorAll('.card')[index].firstElementChild.children;
    var selected_card = this.elementRef.nativeElement.querySelectorAll('.card')[this.currentVisibleCard];
    var past_width = selected_card.offsetWidth;
    var past_left = selected_card.offsetLeft;

    // 활동이 6개 이상이면 더이상 출력하지 않는다.
    for(var j = 0 ; j < selected_card.children[0].children.length ; j++){

      if( j > 2){

        selected_card.children[0].children[j].style.display = "none";

      }

    }

    if( selected_card.children[0].children.length > 3 ){

      selected_card.insertAdjacentHTML('beforeend', '\
      <div class="row plus_button_section">\
        <div class="col s10 m10 l10">\
          \<img id="plus_button_'+ index +'" src = "/assets/images/plus_button.png" style="width:20px;height:20px;float:right;"/>\
        </div>\
      </div>\
      ');

      this.elementRef.nativeElement.querySelector('#plus_button_' + index).addEventListener('click', function(e){
        var params = [];

        var selected_card = e['srcElement'].parentElement.parentElement.parentElement;
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
          <div class = "col s3 m3 l3"></div>\
            <img src="/assets/images/maximize_button.png" id="maximize-button-'+ index +'" style="width: 20px; height: 20px;">\
            <img src="/assets/images/close_button.png" id="close-button-'+ index +'" style="width: 20px; height: 20px;">\
          </div>\
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

      // 카드의 너비를 늘려야 하는 경우
      if( activityParent.length > 1 ){
        selected_card.style.width = past_width * 2 + "px";
        selected_card.style.left = selected_card.offsetLeft - past_width / 2 + "px";

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
      selected_card.style.left = selected_card.offsetLeft + past_width / 4 + "px";

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
    selected_card.classList.remove('zoomIn');
    selected_card.classList.add('animated');
    selected_card.classList.add('fadeIn');
    this.isClicked[this.currentVisibleCard] = true;
    selected_card.classList.add('card-pinned');

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
              <div class="col s6 m6 l6 card-activity" style="padding: 0px;" data-activity_id=' + i + '>\
                <div class="card-image" style="float:left; margin-bottom: 0px;">\
                  <img src="http://via.placeholder.com/100x100" style="width: ' + this.listImageHeight + 'px;">\
                </div>\
                <div class="card-content" style="margin-left: 110px;">\
                  <p style="font-size: 15px; font-weight:bold;" id= "cardTitle_' + i + '" class="card-title">' + activities[i].tag + '</p>\
                  <p>'+ activities[i].supertag +'</p>\
                  <p>'+activities[i].date.getFullYear() + '/' + (activities[i].date.getMonth()+1)+ '/' + activities[i].date.getDate()+'</p>\
                </div>\
              </div>\
            ';

            cards[cardIndex].children[0].innerHTML = cardHTML;

        }

      }

    }

    for( var i = 0 ; i < cards.length ; i++ ){

      if( this.elementRef.nativeElement.querySelector('#card_' + i).children.length == 1 ){

        cards[i].style.width = parseInt(cards[i].style.width.replace("px", "")) / 2 + "px";
        cards[i].style.left = cards[i].offsetLeft + parseInt(cards[i].style.width.replace("px", "")) / 3 + "px";

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
          cards[i].style.left = parseInt(cards[i].style.left.replace("px", "")) +  cards[i].offsetWidth / 2 + "px";

        }else{

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

      if(d[0].offsetLeft > e.clientX){

        this.currentVisibleCard = 0;

      }else{

        for( var i = 0 ; i < d.length ; i++ ){

          if( d[i].offsetLeft  > e.clientX ){

            this.currentVisibleCard = i - 1;
            break;

          }
          if( i == d.length-1 ){

            this.currentVisibleCard = d.length - 1;

          }
        }


      }

      if( this.currentVisibleCard < cards.length ){

        cards[this.currentVisibleCard].style.visibility = "visible";
        cards[this.currentVisibleCard].classList.add("animated");
        cards[this.currentVisibleCard].classList.add("zoomIn");

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

      if( d[i].offsetLeft + this.horizontalLine.offsetLeft > e.clientX ){

        this.currentVisibleCard = i;
        // cards[this.currentVisibleCard].classList.remove("animated");
        // cards[this.currentVisibleCard].classList.remove("zoomIn");
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
      }

    }

    for(var i = 0 ; i < cards.length ; i++){

      if( cards[i].classList.contains('card-pinned') == false ){

        cards[i].style.visibility = "hidden";
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

      cards[i].style.top = 0 - (activities_count / 2) * 150 + 'px';

    }

  }

}
