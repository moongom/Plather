import { AfterViewInit, ViewChild, Component, OnInit, ElementRef, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ActivityPostPreviewComponent } from '../activity-post-preview/activity-post-preview.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;


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
  formBuilder: FormBuilder,
  private elementRef:ElementRef,
  public dialog: MatDialog) {

    this._formBuilder = formBuilder;
    this.savePostForm = this._formBuilder.group({ })

  }

  postText: string = "";
  errorMessage: string;
  postSaved : boolean = false;

  private _formBuilder: FormBuilder;
  savePostForm: FormGroup;
  screenWidth:number = window.innerWidth;

  formStage: number = 1 // 1 ~ 3 까지 존재
  previousFormStage: number = -1

  onNoClick(): void {
   this.dialogRef.close();
   let popover = this.elementRef.nativeElement.querySelectorAll('note-popover')[3];
   popover.classList.remove('airmode-popover');
  }

  ngOnDestroy(): void {

    $('.note-popover').removeClass('airmode-popover');
    let popoverAll = $('.note-popover')

    for(var i = 0 ; i < popoverAll.length ; i++){
      popoverAll[i].style.display = "none";
    }

  }

  ngOnInit() {

    $(document).ready(function() {

      setInterval(() => {
        $('#preloader').css("display", "none")
        // $('#summernote-input-form').css("display", "block")
      }, 750);

      $('#summernote').summernote({

        placeholder: '비핸스보다 이뻐질수 있을까',
        dialogsInBody: true,
        callbacks: {
          onInit: function(){
            let popover = $('.note-popover')[3]
            popover.classList.add('airmode-popover');
          },
          onFocus: function() {

          },
          onBlur: function() {

          },
          onKeyup: function(e) {

          },
          onKeydown: function(e) {

          },
          onChange: function(contents, $editable) {
            let text = $('#summernote').summernote('code');

            if (text != null && text != '') {
              console.log(this.postText);
              this.postText = text;
              this.postSaved = true;
              // document.getElementById('preview').innerHTML = text;
            }
            else {
              console.error("posts empty");
              this.postSaved = false;
            }
          }
        },
        airMode: true,

      });

      $('.note-statusbar').hide();
      $('.note-editor').css("border", "0px solid transparent");

    });
  }


  ngAfterViewInit() {


  }

  // on submit method
  // savePost() {
  //   let text = $('#summernote').summernote('code');
  //   console.log(text);
  //   if (text != null && text != '') {
  //     this.postText = text;
  //     this.postSaved = true;
  //     setTimeout(() => this.postSaved = false, 2000);
  //   }
  //   else {
  //     console.error("posts empty");
  //     this.postSaved = false;
  //   }
  // }


  showPreview(): void {

    // let images = this.elementRef.nativeElement.querySelectorAll('img');
    // for(var i = 0 ; i < images.length ; i++){
    //   images[i].style.width = images.offsetWidth + "px";
    //   images[i].style.height = images.offsetHeight + "px";
    //   console.log(images[i])
    // }

    let images = $('img')

    images.each(function(){
      $(this).css("width", $(this).width() );
      console.log($(this).css('width'))
    })

    // let text = $('#summernote').summernote('code');
    let text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;

    this.postText = text;

    const dialogRef = this.dialog.open(ActivityPostPreviewComponent, {

      // width: '1000px',
      // height: '800px',
      width: this.screenWidth - 230 + "px",
      height: '100%',
      maxWidth: '3000px',
      data: { html: this.postText }

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('ActivityPostPreview Modal was closed');

    });

  }

  // json 활용
  sendData(data: any) {

    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

    return this.http.post('http://localhost:4200/example',
              JSON.stringify(data),
              { headers: headers })

  }

  closeDialog() {
    this.dialogRef.close('Input Form Closed');
  }

  nextButtonClicked() {
    if(this.formStage != 3){
      this.previousFormStage = this.formStage;
      this.formStage += 1;
      
    }
  }
  previousButtonClicked() {
    if(this.formStage != 1){
      this.previousFormStage = this.formStage;
      this.formStage -= 1;
      
    }
  }
}
