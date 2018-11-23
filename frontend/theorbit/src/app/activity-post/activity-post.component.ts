import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ActivityPostPreviewComponent } from './activity-post-preview/activity-post-preview.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActiivtyPostService } from '../services/actiivty-post.service';

import * as global from '../global'
import { LineComponent } from '../line/line.component';

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
  ) {}
  
  // 포트폴리오 본문을 나타낸다.
  postText: string = "";
  errorMessage: string;
  postSaved : boolean = false;

  screenWidth:number = window.innerWidth;

  // 현재까지 작성된 폼의 stage 를 나타냄 (1 ~ 3까지 존재)
  formStage: number = 1
  previousFormStage: number = -1

  // Thumbnail Image
  imageChangedEvent: any = '';
  croppedImage: any = '';

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
    thumbnail: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  onNoClick(): void {
   this.dialogRef.close();
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

  fileChangeEvent(event: any): void {
      this.imageChangedEvent = event;
  }
  imageCropped(event: any) {
    // 실질적으로 이미지를 Crop 하는 함수
    this.croppedImage = event['base64'];
  }
  imageLoaded() {
      // show cropper
  }
  loadImageFailed() {
    alert("이미지 로드하는 과정에서 오류가 발생했습니다.");
  }

  submitPortFolioForm(){
    
    let text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;
    this.postText = text;
    this.savePostForm.patchValue({
      portfolioContent: this.postText,
      activityDate: $('#activityDate').val(),
      thumbnail: this.croppedImage
    });

    let formValid = this.checkIfFormValid(this.savePostForm);

    if(formValid){
      let post = this.savePostForm.value;
      
      this.service.create(post).subscribe(response => {
        console.log(response);
        // success / fail 분기처리 해야 함 (백엔드와의 협의 필요)
        alert('성공적으로 게시물이 입력되었습니다.')
        this.closeDialog();
      })
    }else{
      alert('미입력된 항목이 존재합니다.');
      console.log(this.savePostForm)
      console.log(this.savePostForm.value);
    }
    
  }

  saveTemporaryButtonClicked() {
    let text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;
    this.postText = text;
    this.savePostForm.patchValue({
      portfolioContent: this.postText,
      activityDate: $('#activityDate').val(),
      thumbnail: this.croppedImage
    });

    let formValid = this.checkIfFormValid(this.savePostForm);

    // 아직 임시저장 기능이 완성되지 않아서 연결하지 않음
    // if(formValid){
    //   let post = this.savePostForm.value;
      
    //   this.service.create(post).subscribe(response => {
    //     console.log(response);
          // success / fail 분기처리 해야 함 (백엔드와의 협의 필요)
          // alert('성공적으로 게시물이 입력되었습니다.')
          // this.closeDialog();
    //   })
    // }
    
  }

  checkIfFormValid(form: FormGroup){
    if(!form.valid){
      return false;
    }
    return true;
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

      width: '100%',
      height: '100%',
      maxWidth: '3000px',
      data: { html: this.postText }

    });

    dialogRef.afterClosed().subscribe(result => {

      

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
