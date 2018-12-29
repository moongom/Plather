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
        $('#summernote-input-form').css("display", "block")
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

            let editor = $('.note-editable')

            let editorHeight = editor.position().top + editor.height()


            let lastElementBorder = editor.children().last().position().top + editor.children().last().height()

            console.log(editorHeight)
            console.log(lastElementBorder)

            if(lastElementBorder + 200 > editorHeight){
              console.log("increase")
              $('.note-editable').css('max-height', lastElementBorder+200+'px')
              $('.note-editable').css('height', lastElementBorder+200+'px')
            }

          },
        },

        airMode: true

      });

      $('.note-statusbar').hide();
      $('.note-editor').css("border", "0px solid transparent");

    });

  }
 

  ngAfterViewInit() {


  }

  showPreview(): void {

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
      maxWidth: '2000px',
      data: { html: this.postText }

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('ActivityPostPreview Modal was closed');

    });

  }

  // json 활용
  // sendData(data: any) {
  //
  //   const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
  //
  //   return this.http.post('http://localhost:4200/example',
  //             JSON.stringify(data),
  //             { headers: headers })
  //
  // }

  closeDialog() {
    this.dialogRef.close('Input Form Closed');
  }
}