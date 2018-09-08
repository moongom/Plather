import { AfterViewInit, ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import { UsertimelineComponent } from '../usertimeline/usertimeline.component'


@Component({
  selector: 'horizontal-line',
  templateUrl: './horizontal-line.component.html',
  styleUrls: ['./horizontal-line.component.css']
})

export class HorizontalLineComponent implements OnInit {
  constructor(private elementRef:ElementRef) {}

  @ViewChild(UsertimelineComponent) userTimeLine:UsertimelineComponent;

  superTags: any[];
  ngOnInit() {

    this.superTags = this.userTimeLine.superTagName;

  }

  ngAfterViewInit(){
  }



  onFilterChange(e){

    if( e.checked ){
      for( var i = 0 ; i < this.userTimeLine.activities.length ; i++ ){
        this.userTimeLine.activities[i].supertag.replace(/[\n\r]+|[\s]{2,}/g, '') == e.source._elementRef.nativeElement.innerText.replace(/[\n\r]+|[\s]{2,}/g, '');

        if( this.userTimeLine.activities[i].supertag.replace(/[\n\r]+|[\s]{2,}/g, '') == e.source._elementRef.nativeElement.innerText.replace(/[\n\r]+|[\s]{2,}/g, '')){
          this.userTimeLine.activities[i].filter = true;
        }

      }
    }else{
      for( var i = 0 ; i < this.userTimeLine.activities.length ; i++ ){

        if( this.userTimeLine.activities[i].supertag.replace(/[\n\r]+|[\s]{2,}/g, '') == e.source._elementRef.nativeElement.innerText.replace(/[\n\r]+|[\s]{2,}/g, '')){
          this.userTimeLine.activities[i].filter = false;
        }
      }
    }

    this.userTimeLine.filterByRange();

  }

}
