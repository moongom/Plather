import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivityPostPreviewComponent } from '../activity-post-preview/activity-post-preview.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActiivtyPostService } from '../services/actiivty-post.service';
import * as global from '../global'

declare var $: any;


export interface DialogData {

}

@Component({
  selector: 'activity-post',
  templateUrl: './activity-post.component.html',
  styleUrls: ['./activity-post.component.css']
})

export class ActivityPostComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<ActivityPostComponent>,
    private http: HttpClient,
    private elementRef:ElementRef,
    public dialog: MatDialog,
    private service: ActiivtyPostService
  ) {

  }

  postText: string = "";
  errorMessage: string;
  postSaved : boolean = false;

  screenWidth:number = window.innerWidth;

  formStage: number = 1 // 1 ~ 3 까지 존재
  previousFormStage: number = -1

  savePostForm = new FormGroup({
    portfolioTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    superTag: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    subTag: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    portfolioContent: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    portfolioBrief: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    activityDate: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  onNoClick(): void {
   this.dialogRef.close();
   let popover = this.elementRef.nativeElement.querySelectorAll('note-popover')[3];
  }

  ngOnDestroy(): void {

    let popoverAll = $('.note-popover')
    $('.note-popover').removeClass('note-popover');

    for(var i = 0 ; i < popoverAll.length ; i++){
      popoverAll[i].style.display = "none";
    }

  }
  
  ngOnInit() {
    // Material DatePicker Initialize
    $(document).ready(function(){
      $('.datepicker').datepicker({
        autoClose: true,
        format: 'yyyy년 mm월 dd일',
        i18n: {
          months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
          weekdays: ["일요일", "월요일","화요일", "수요일", "목요일", "금요일", "토요일"],
          weekdaysShort: ["일", "월","화", "수", "목", "금", "토"],
          weekdaysAbbrev: ["일", "월","화", "수", "목", "금", "토"]
        },
        onSelect: function(date){
          $('#activityDate').val(+date);
        }
      });
    });
    // Summernote
    $(document).ready(function() {

      setInterval(() => {
        $('#preloader').css("display", "none")
        $('#summernote-input-form').css("display", "block")
      }, 750);

      $('#summernote').summernote({

        placeholder: '비핸스보다 이뻐질수 있을까',
        height: 1000,
        tooltip: false,
        airMode: true,
        lang: 'ko-KR',
        popover: {
          air: [
              ['style', ['bold', 'italic', 'underline', 'clear']],
              ['color', ['color']],
              ['fontsize', ['fontsize', 'fontname']],
              ['height', ['height']],
              ['para', ['ul', 'ol', 'paragraph']],
              ['table', ['table']]
          ]
        },
        callbacks: {
          onInit: function(){
            
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

            if(lastElementBorder + 200 > editorHeight){
              console.log("increase")
              $('.note-editable').css('max-height', lastElementBorder+200+'px')
              $('.note-editable').css('height', lastElementBorder+200+'px')
            }
            

          },
          onImageUpload : function(files) {
            // console.log("onImageUpload Loaded")
            if (!files.length) return;
            var file = files[0];
            // create FileReader
            var reader  = new FileReader();
            reader.onloadend = function () {
                // when loaded file, img's src set datauri
                // console.log("img",$("<img>"));
                var img = $("<img>").attr({src: reader.result, width: "100%"}); // << Add here img attributes !
                // console.log("var img", img);
                $('#summernote').summernote("insertNode", img[0]);
            }
            if (file) {
              // convert fileObject to datauri
              reader.readAsDataURL(file);
            }
            let editor = $('.note-editable')

            let editorHeight = editor.position().top + editor.height()

            let lastElementBorder = editor.children().last().position().top + editor.children().last().height()
            
            // if(lastElementBorder + 200 > editorHeight){
              $('.note-editable').css('max-height', lastElementBorder+200+'px')
              $('.note-editable').css('height', lastElementBorder+200+'px')
            // }
          }
        }
      });

      $('.note-statusbar').hide();
      $('.note-editor').css("border", "0px solid transparent");

    });

  }


  ngAfterViewInit() {


  }

  submitPortFolioForm(){
    let text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;
    this.postText = text;
    this.savePostForm.patchValue({
      portfolioContent: this.postText,
      activityDate: $('#activityDate').val()
    });
    let post = this.savePostForm.value;
    // console.log(post)
    // alert("portfolioTitle : " + post.portfolioTitle + " portfolioBrief : " + post.portfolioBrief + " portfolioContent : " + post.portfolioContent.substring(0, 10));

    this.service.create(post).subscribe(response => {
      
      console.log(response);

    })
      
  }
  

  saveTemporaryButtonClicked() {
    let text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;
    this.postText = text;
    this.savePostForm.patchValue({
      portfolioContent: this.postText,
      activityDate: $('#activityDate').val()
    });
    let post = this.savePostForm.value;
    // alert("portfolioTitle : " + post.portfolioTitle + " portfolioBrief : " + post.portfolioBrief + " portfolioContent : " + post.portfolioContent.substring(0, 10));
    this.service.create(post).subscribe(response => {
      console.log(response);
    })
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
      // width: this.screenWidth - 230 + "px",
      width: '100%',
      height: '100%',
      maxWidth: '3000px',
      data: { html: this.postText }

    });

    dialogRef.afterClosed().subscribe(result => {

      console.log('ActivityPostPreview Modal was closed');

    });

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
