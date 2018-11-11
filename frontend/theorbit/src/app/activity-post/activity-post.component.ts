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
    // Material DatePicker Initialize
    $(document).ready(function(){
      $('.datepicker').datepicker({
        autoClose: true,
        
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

            if(lastElementBorder + 200 > editorHeight){
              // console.log("increase")
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

  submitPortFolioForm(){
    let text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;
    this.postText = text;
    this.savePostForm.patchValue({
      portfolioContent: this.postText
    });
    let post = this.savePostForm.value;
    // alert("portfolioTitle : " + post.portfolioTitle + " portfolioBrief : " + post.portfolioBrief + " portfolioContent : " + post.portfolioContent.substring(0, 10));

    this.service.create(post).subscribe(response => {
      
      console.log(response);
    })
      
  }
  

  saveTemporaryButtonClicked() {
    let text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;
    this.postText = text;
    this.savePostForm.patchValue({
      portfolioContent: this.postText
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
      width: this.screenWidth - 230 + "px",
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
