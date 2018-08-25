import { AfterViewInit, ViewChild, Component, OnInit, ElementRef, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-activity-post',
  templateUrl: './activity-post.component.html',
  styleUrls: ['./activity-post.component.css']
})

export class ActivityPostComponent implements OnInit {

  constructor(
  public dialogRef: MatDialogRef<ActivityPostComponent>,
  @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private http: HttpClient,
  private elementRef:ElementRef) {}

  onNoClick(): void {
   this.dialogRef.close();

  }

  ngOnInit() {

  }


  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#activity-post-btn').addEventListener('click', this.buttonClicked.bind(this));

  }

  buttonClicked(e){

    var title = this.elementRef.nativeElement.querySelector('#title').value;
    var content = this.elementRef.nativeElement.querySelector('#content').value;
    var tags = this.elementRef.nativeElement.querySelector('#tag').value;
    console.log(tags.split(' '));
    var arr = tags.split(' ');
    var validate = true;
    console.log(tags.search('###'));
    if( tags.search('###') ){
      validate = false;
    }
    for( var i = 0 ; i < arr.length ; i++ ){
      if( arr[i][0] != '#' ){
        validate = false;
      }
      if( arr[i][1] == '#' && arr[i][2] == '#' ){
        validate = false;
      }
    }


    if( validate ){
      console.log('TRUE');
    }else{
      console.log('FALSE')
    }

    var data = {
      "title": title,
      "content": content,
      "tags": tags
    }
    console.log(data);
    this.sendData(data);

    // this.dialogRef.close();

  }
  // var httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type':  'application/json',
  //     'Authorization': 'my-auth-token'
  //   })
  // };

  sendData(data: any) {

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.post('http://localhost:4200/example',
              JSON.stringify(data),
              { headers: headers })

  }
}
