(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/account.service.ts":
/*!************************************!*\
  !*** ./src/app/account.service.ts ***!
  \************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
    }
    AccountService.prototype.getUser = function () {
        this.email = JSON.parse(localStorage.getItem('currentUser')).email;
        this.endpoint = 'http://localhost:8000/api/users/';
        this.endpoint = this.endpoint + this.email + '/';
        return this.http.get(this.endpoint);
        // .pipe(
        //   catchError(this.handleError)
        // );
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/activity-post-preview/activity-post-preview.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/activity-post-preview/activity-post-preview.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activity-post-preview/activity-post-preview.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/activity-post-preview/activity-post-preview.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"preloader-wrapper big active\" id=\"preloader\" style=\"position: absolute; left: 50%; top: 50%;\">\n  <div class=\"spinner-layer spinner-blue\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-red\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-yellow\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-green\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n</div> -->\n\n<div id=\"main-content\" style=\"margin-top: 100px;\">\n  <!-- <img src=\"/assets/images/close_button.png\" id=\"close-button\" (click)=\"closeDialog()\" [ngStyle]=\"{'position':'fixed', 'top':'20px', 'left': this.screenWidth * 0.95 - 50 + 'px','width':'30px','height':'30px', 'zIndex':'200'}\">\n  <img src=\"/assets/images/right_arrow.png\" id=\"right-button\" (click)=\"clickRightButton()\" [ngStyle]=\"{'position':'fixed', 'top':'50%', 'left': this.screenWidth * 0.95 - 50 + 'px','width':'50px','height':'50px', 'zIndex':'200'}\">\n  <img src=\"/assets/images/left_arrow.png\" id=\"left-button\" (click)=\"clickLeftButton()\" [ngStyle]=\"{'position':'fixed', 'top':'50%', 'left': 230 + this.screenWidth * 0.05 + 'px','width':'50px','height':'50px', 'zIndex':'200'}\"> -->\n\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"container\" id=\"preview-content\">\n        <!-- <div [innerHTML]=\"html.html\">\n\n        </div> -->\n      <div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/activity-post-preview/activity-post-preview.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/activity-post-preview/activity-post-preview.component.ts ***!
  \**************************************************************************/
/*! exports provided: ActivityPostPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPostPreviewComponent", function() { return ActivityPostPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ActivityPostPreviewComponent = /** @class */ (function () {
    function ActivityPostPreviewComponent(html, dialogRef, elementRef) {
        this.html = html;
        this.dialogRef = dialogRef;
        this.elementRef = elementRef;
    }
    ActivityPostPreviewComponent.prototype.ngOnInit = function () {
        this.elementRef.nativeElement.querySelector('#preview-content').innerHTML = this.html.html;
    };
    ActivityPostPreviewComponent.prototype.ngOnAfterInit = function () {
    };
    ActivityPostPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'activity-post-preview',
            template: __webpack_require__(/*! ./activity-post-preview.component.html */ "./src/app/activity-post-preview/activity-post-preview.component.html"),
            styles: [__webpack_require__(/*! ./activity-post-preview.component.css */ "./src/app/activity-post-preview/activity-post-preview.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ActivityPostPreviewComponent);
    return ActivityPostPreviewComponent;
}());



/***/ }),

/***/ "./src/app/activity-post/activity-post.component.css":
/*!***********************************************************!*\
  !*** ./src/app/activity-post/activity-post.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/activity-post/activity-post.component.html":
/*!************************************************************!*\
  !*** ./src/app/activity-post/activity-post.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader-wrapper big active\" id=\"preloader\" style=\"position: absolute; left: 50%; top: 50%;\">\n  <div class=\"spinner-layer spinner-blue\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-red\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-yellow\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-green\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n</div>\n\n<img src=\"/assets/images/close_button.png\" id=\"close-button\" (click)=\"closeDialog()\" [ngStyle]=\"{'position':'fixed', 'top':'20px', 'left': this.screenWidth * 0.95 - 50 + 'px','width':'30px','height':'30px', 'zIndex':'200'}\">\n\n\n  <div class=\"row\" id=\"summernote-input-form\" style=\"margin-top: 100px; display: none;\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-10\" style=\"border: 1px solid #efefef;\">\n      <div class=\"container\">\n        <div class=\"well off-top\">\n          <!-- <div class=\"alert alert-success\" *ngIf=\"postSaved\">미리보기에 반영되었습니다.</div> -->\n          <h4>포트폴리오 게시물을 작성해 주세요</h4>\n          <form role=\"form\" [formGroup]=\"savePostForm\" (ngSubmit)=\"showPreview()\">\n            <button type=\"submit\" >미리보기</button>\n            <div class=\"form-group\" style=\"margin-top: 30px;\">\n              <textarea id=\"summernote\" class=\"form-control\"></textarea>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-1\"></div>\n    <!-- <div class=\"col-9\" style=\"border: 1px solid #efefef;\">\n      <h4>Portfolio 미리보기: </h4>\n      <div id=\"preview\"></div>\n    </div> -->\n  </div>\n"

/***/ }),

/***/ "./src/app/activity-post/activity-post.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/activity-post/activity-post.component.ts ***!
  \**********************************************************/
/*! exports provided: ActivityPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityPostComponent", function() { return ActivityPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _activity_post_preview_activity_post_preview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activity-post-preview/activity-post-preview.component */ "./src/app/activity-post-preview/activity-post-preview.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ActivityPostComponent = /** @class */ (function () {
    function ActivityPostComponent(dialogRef, data, http, formBuilder, elementRef, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.http = http;
        this.elementRef = elementRef;
        this.dialog = dialog;
        this.postText = "";
        this.postSaved = false;
        this.screenWidth = window.innerWidth;
        this._formBuilder = formBuilder;
        this.savePostForm = this._formBuilder.group({});
    }
    ActivityPostComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
        var popover = this.elementRef.nativeElement.querySelectorAll('note-popover')[3];
        popover.classList.remove('airmode-popover');
    };
    ActivityPostComponent.prototype.ngOnDestroy = function () {
        $('.note-popover').removeClass('airmode-popover');
        var popoverAll = $('.note-popover');
        for (var i = 0; i < popoverAll.length; i++) {
            popoverAll[i].style.display = "none";
        }
    };
    ActivityPostComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            setInterval(function () {
                $('#preloader').css("display", "none");
                $('#summernote-input-form').css("display", "block");
            }, 750);
            $('#summernote').summernote({
                placeholder: '비핸스보다 이뻐질수 있을까',
                dialogsInBody: true,
                callbacks: {
                    onInit: function () {
                        var popover = $('.note-popover')[3];
                        popover.classList.add('airmode-popover');
                    },
                    onFocus: function () {
                    },
                    onBlur: function () {
                    },
                    onKeyup: function (e) {
                    },
                    onKeydown: function (e) {
                    },
                    onChange: function (contents, $editable) {
                        var editor = $('.note-editable');
                        var editorHeight = editor.position().top + editor.height();
                        var lastElementBorder = editor.children().last().position().top + editor.children().last().height();
                        console.log(editorHeight);
                        console.log(lastElementBorder);
                        if (lastElementBorder + 200 > editorHeight) {
                            console.log("increase");
                            $('.note-editable').css('max-height', lastElementBorder + 200 + 'px');
                            $('.note-editable').css('height', lastElementBorder + 200 + 'px');
                        }
                    },
                },
                airMode: true
            });
            $('.note-statusbar').hide();
            $('.note-editor').css("border", "0px solid transparent");
        });
    };
    ActivityPostComponent.prototype.ngAfterViewInit = function () {
    };
    ActivityPostComponent.prototype.showPreview = function () {
        var images = $('img');
        images.each(function () {
            $(this).css("width", $(this).width());
            console.log($(this).css('width'));
        });
        // let text = $('#summernote').summernote('code');
        var text = this.elementRef.nativeElement.querySelectorAll('.note-editable')[0].innerHTML;
        this.postText = text;
        var dialogRef = this.dialog.open(_activity_post_preview_activity_post_preview_component__WEBPACK_IMPORTED_MODULE_2__["ActivityPostPreviewComponent"], {
            // width: '1000px',
            // height: '800px',
            width: this.screenWidth - 230 + "px",
            height: '100%',
            maxWidth: '2000px',
            data: { html: this.postText }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('ActivityPostPreview Modal was closed');
        });
    };
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
    ActivityPostComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Input Form Closed');
    };
    ActivityPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activity-post',
            template: __webpack_require__(/*! ./activity-post.component.html */ "./src/app/activity-post/activity-post.component.html"),
            styles: [__webpack_require__(/*! ./activity-post.component.css */ "./src/app/activity-post/activity-post.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], ActivityPostComponent);
    return ActivityPostComponent;
}());



/***/ }),

/***/ "./src/app/alert.service.ts":
/*!**********************************!*\
  !*** ./src/app/alert.service.ts ***!
  \**********************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
        alert('ID or Password are incorrect');
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".waves-light{\n  background-color: black;\n}\n\ndiv.btn{\n  background-color: black;\n}\n\ndiv.navbar{\n  width: 100%;\n  background-color: #efefef;\n}\n\ndiv.navbar-25{\n  display: inline-block;\n  vertical-align: middle;\n  width: 25%;\n}\n\ndiv.navbar-50{\n  display: inline-block;\n  vertical-align: middle;\n  width: 50%;\n}\n\ninput.navbar-form{\n  background-color: rgb(255,255,255, 0.6);\n  border-radius: 10px;\n  width: 100%;\n  padding-left: 9%;\n}\n\n.navbar-form-icon{\n  top: 15px;\n  position: absolute;\n  left: 27%;\n}\n\n.deleteline{\n  color:black;\n  text-decoration: none;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Tob Bar  -->\n<div class=\"row navbar\" style=\"margin-bottom: 10px; z-index: 2;\">\n  <div class=\"navbar-25\" [ngStyle]=\"{'background-color': '#efefef'}\">\n    <a routerLink=\"/\" class=\"deleteline\"><p [ngStyle]=\"{'font-size': '20px', 'margin-left': '20px'}\">Plather</p></a>\n  </div>\n  <div class=\"navbar-50\">\n    <mat-icon class=\"navbar-form-icon\">search</mat-icon>\n    <form>\n      <input matInput class=\"navbar-form\">\n    </form>\n  </div>\n\n  <div class=\"navbar-25\">\n      <div>\n        <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"margin-left: 50%;\">\n          <mat-icon>home</mat-icon>\n          <span>김희재</span>\n        </button>\n        <mat-menu #menu=\"matMenu\">\n          <button mat-menu-item>\n            <mat-icon>settings</mat-icon>\n            <span>Edit Profile</span>\n          </button>\n          <button mat-menu-item>\n            <mat-icon>voicemail</mat-icon>\n            <span>Payment</span>\n          </button>\n          <button mat-menu-item [routerLink]=\"['/horizontalline']\">\n            <mat-icon>voicemail</mat-icon>\n            <span>Line</span>\n          </button>\n          <button mat-menu-item [routerLink]=\"['/user-portfolio']\">\n            <mat-icon>voicemail</mat-icon>\n            <span>Portfolios</span>\n          </button>\n          <button mat-menu-item (click)=\"openSignup2Dialog()\">\n            <mat-icon>voicemail</mat-icon>\n            <span>Sign up</span>\n          </button>\n          <button mat-menu-item (click)=\"openLoginDialog()\">\n            <mat-icon>voicemail</mat-icon>\n            <span>Login</span>\n          </button>\n          <button mat-menu-item>\n            <mat-icon>voicemail</mat-icon>\n            <span>Logout</span>\n          </button>\n        </mat-menu>\n      </div>\n    </div>\n\n  <!-- <div class=\"navbar-25\" *ngIf =\"screen_name; else noscreen\"> -->\n  <div class=\"navbar-25\" *ngIf =\"screen_name;\">\n    <div>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" style=\"margin-left: 50%;\">\n        <mat-icon>home</mat-icon>\n        <span>{{screen_name}}</span>\n      </button>\n      <mat-menu #menu=\"matMenu\">\n        <button mat-menu-item>\n          <mat-icon>settings</mat-icon>\n          <span>Edit Profile</span>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>voicemail</mat-icon>\n          <span>Payment</span>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>voicemail</mat-icon>\n          <span>Notice</span>\n        </button>\n        <button mat-menu-item>\n          <mat-icon>voicemail</mat-icon>\n          <span>Stack</span>\n        </button>\n        <button mat-menu-item (click)=\"logout()\">\n          <mat-icon>voicemail</mat-icon>\n          <span>Logout</span>\n        </button>\n      </mat-menu>\n    </div>\n  </div>\n</div>\n<!-- Tob Bar  -->\n\n<!-- Side Bar가 필요한 경우의 navbar -->\n<div *ngIf=\"sidenavTest\">\n  <router-outlet></router-outlet>\n</div>\n<mat-sidenav-container *ngIf=\"sidenavTest==false\" [ngStyle]=\"{'height': '1000px'}\">\n  <!-- Side Bar가 필요없는 경우의 navbar -->\n  <!-- Main Content -->\n  <mat-sidenav-content>\n\n    <router-outlet></router-outlet>\n\n    <!-- Footer -->\n    <footer class=\"page-footer\"  style=\"background-color: #CDCDCD;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col l6 s12\">\n            <h5 class=\"white-text\">Plather</h5>\n            <p class=\"grey-text text-lighten-4\">문곰의 제 4회 서강대학교 해커톤 프로젝트입니다.</p>\n          </div>\n          <div class=\"col l4 offset-l2 s12\"></div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"container\">\n          © 2018 Copyright Moongom\n          <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n        </div>\n      </div>\n    </footer>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/signup2/signup2.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.service */ "./src/app/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(router, dialog, logoutservice, accountservice) {
        var _this = this;
        this.dialog = dialog;
        this.logoutservice = logoutservice;
        this.accountservice = accountservice;
        this.sidenavTest = false;
        this.title = 'theorbit';
        // 특정 url에 떨어질 때에만 사이드바가 형성되게 한다.
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.sidenavTest = (event.url == "/horizontalline"
                    || event.url == "/profile");
            }
            if (localStorage.getItem('currentUser')) {
                _this.email = JSON.parse(localStorage.getItem('currentUser')).email;
                _this.accountservice.getUser()
                    .subscribe(function (data) {
                    _this.screen_name = data.screen_name;
                    console.log(_this.screen_name);
                });
            }
            else {
                // console.log('there are no data')
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.openSignup2Dialog = function () {
        var dialogRef = this.dialog.open(_signup2_signup2_component__WEBPACK_IMPORTED_MODULE_2__["Signup2Component"], {
            width: '400px',
            panelClass: 'full-dialog'
            // data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent.prototype.openLoginDialog = function () {
        var dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], {
            width: '400px',
            panelClass: 'full-dialog'
            // data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    AppComponent.prototype.logout = function () {
        this.logoutservice.logout();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _signup_service__WEBPACK_IMPORTED_MODULE_5__["SignupService"],
            _account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _horizontal_line_horizontal_line_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./horizontal-line/horizontal-line.component */ "./src/app/horizontal-line/horizontal-line.component.ts");
/* harmony import */ var _usertimeline_usertimeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usertimeline/usertimeline.component */ "./src/app/usertimeline/usertimeline.component.ts");
/* harmony import */ var _usertimeline_specific_usertimeline_specific_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usertimeline-specific/usertimeline-specific.component */ "./src/app/usertimeline-specific/usertimeline-specific.component.ts");
/* harmony import */ var _user_portfolio_user_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-portfolio/user-portfolio.component */ "./src/app/user-portfolio/user-portfolio.component.ts");
/* harmony import */ var _user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-portfolio-modal/user-portfolio-modal.component */ "./src/app/user-portfolio-modal/user-portfolio-modal.component.ts");
/* harmony import */ var _activity_post_activity_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./activity-post/activity-post.component */ "./src/app/activity-post/activity-post.component.ts");
/* harmony import */ var _activity_post_preview_activity_post_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./activity-post-preview/activity-post-preview.component */ "./src/app/activity-post-preview/activity-post-preview.component.ts");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _appRoutes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appRoutes.module */ "./src/app/appRoutes.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./signup1/signup1.component */ "./src/app/signup1/signup1.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/signup2/signup2.component.ts");
/* harmony import */ var _show_specific_activities_show_specific_activities_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./show-specific-activities/show-specific-activities.component */ "./src/app/show-specific-activities/show-specific-activities.component.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _horizontal_line_horizontal_line_component__WEBPACK_IMPORTED_MODULE_4__["HorizontalLineComponent"],
                _usertimeline_usertimeline_component__WEBPACK_IMPORTED_MODULE_5__["UsertimelineComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _usertimeline_specific_usertimeline_specific_component__WEBPACK_IMPORTED_MODULE_6__["UsertimelineSpecificComponent"],
                _user_portfolio_user_portfolio_component__WEBPACK_IMPORTED_MODULE_7__["UserPortfolioComponent"],
                _user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_8__["UserPortfolioModalComponent"],
                _activity_post_activity_post_component__WEBPACK_IMPORTED_MODULE_9__["ActivityPostComponent"],
                _activity_post_preview_activity_post_preview_component__WEBPACK_IMPORTED_MODULE_10__["ActivityPostPreviewComponent"],
                _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_11__["EditProfileComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_18__["LandingPageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_20__["LoginComponent"],
                _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_21__["Signup1Component"],
                _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_22__["Signup2Component"],
                _show_specific_activities_show_specific_activities_component__WEBPACK_IMPORTED_MODULE_23__["ShowSpecificActivitiesComponent"],
            ],
            entryComponents: [_activity_post_activity_post_component__WEBPACK_IMPORTED_MODULE_9__["ActivityPostComponent"], _activity_post_preview_activity_post_preview_component__WEBPACK_IMPORTED_MODULE_10__["ActivityPostPreviewComponent"], _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_11__["EditProfileComponent"], _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_22__["Signup2Component"], _show_specific_activities_show_specific_activities_component__WEBPACK_IMPORTED_MODULE_23__["ShowSpecificActivitiesComponent"], _user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_8__["UserPortfolioModalComponent"]],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                _appRoutes_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_19__["SlideshowModule"],
            ],
            providers: [_signup_service__WEBPACK_IMPORTED_MODULE_25__["SignupService"], _alert_service__WEBPACK_IMPORTED_MODULE_24__["AlertService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appRoutes.module.ts":
/*!*************************************!*\
  !*** ./src/app/appRoutes.module.ts ***!
  \*************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _horizontal_line_horizontal_line_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal-line/horizontal-line.component */ "./src/app/horizontal-line/horizontal-line.component.ts");
/* harmony import */ var _user_portfolio_user_portfolio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-portfolio/user-portfolio.component */ "./src/app/user-portfolio/user-portfolio.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup1/signup1.component */ "./src/app/signup1/signup1.component.ts");
/* harmony import */ var _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup2/signup2.component */ "./src/app/signup2/signup2.component.ts");
/* harmony import */ var _user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-portfolio-modal/user-portfolio-modal.component */ "./src/app/user-portfolio-modal/user-portfolio-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_5__["LandingPageComponent"] },
    { path: 'horizontalline', component: _horizontal_line_horizontal_line_component__WEBPACK_IMPORTED_MODULE_3__["HorizontalLineComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"] },
    { path: 'signup', component: _signup1_signup1_component__WEBPACK_IMPORTED_MODULE_7__["Signup1Component"] },
    { path: 'signup2', component: _signup2_signup2_component__WEBPACK_IMPORTED_MODULE_8__["Signup2Component"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'user-portfolio', component: _user_portfolio_user_portfolio_component__WEBPACK_IMPORTED_MODULE_4__["UserPortfolioComponent"] },
    { path: 'user-portfolio/:id', component: _user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_9__["UserPortfolioModalComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/common/app-error.ts":
/*!*************************************!*\
  !*** ./src/app/common/app-error.ts ***!
  \*************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
var AppError = /** @class */ (function () {
    function AppError(originalError) {
        this.originalError = originalError;
    }
    return AppError;
}());



/***/ }),

/***/ "./src/app/common/bad-input.ts":
/*!*************************************!*\
  !*** ./src/app/common/bad-input.ts ***!
  \*************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var BadInput = /** @class */ (function (_super) {
    __extends(BadInput, _super);
    function BadInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return BadInput;
}(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/app/common/not-found-error.ts":
/*!*******************************************!*\
  !*** ./src/app/common/not-found-error.ts ***!
  \*******************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "./src/app/common/app-error.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundError;
}(_app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"]));



/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <label for=\"username\">이름</label>\n      <div class=\"input-field col s12\">\n        <input id=\"username\" type=\"text\" style=\"background-color: #F9F9F9; border-radius: 10px;\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <label for=\"group\">소속</label>\n      <div class=\"input-field col s12\">\n        <input id=\"group\" type=\"text\" style=\"background-color: #F9F9F9; border-radius: 10px;\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <label for=\"content\">자기소개</label>\n      <div class=\"col s12\">\n        <textarea id=\"content\" style=\"height: 200px; background-color: #F9F9F9; border-radius: 10px;\" class=\"materialize-textarea\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <label for=\"content\">경력 기술</label>\n      <div class=\"col s12\">\n        <textarea id=\"content\" style=\"height: 200px; background-color: #F9F9F9; border-radius: 10px;\" class=\"materialize-textarea\"></textarea>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"input-field\">\n        <input id=\"input-file-id\" multiple type=\"file\" />\n      </div>\n    </div>\n    <button class=\"waves-light btn\" style=\"background-color: gray;\" id=\"activity-post-btn\">저장하기</button>\n</div>\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.component.ts ***!
  \********************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'edit-profile',
            template: __webpack_require__(/*! ./edit-profile.component.html */ "./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-profile.component.css */ "./src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "./src/app/horizontal-line/horizontal-line.component.css":
/*!***************************************************************!*\
  !*** ./src/app/horizontal-line/horizontal-line.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixedclass{\n    position:fixed;\n}"

/***/ }),

/***/ "./src/app/horizontal-line/horizontal-line.component.html":
/*!****************************************************************!*\
  !*** ./src/app/horizontal-line/horizontal-line.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container >\n  <mat-sidenav mode=\"side\" opened style=\"width: 230px;\" class=\"fixedclass\">\n    <mat-accordion>\n      <mat-expansion-panel [ngStyle]=\"{'background-color': '#efefef'}\" expanded>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            Filter\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"row\" *ngFor=\"let st of superTags; let i=index\">\n          <mat-checkbox id=\"filter_{{ i }}\" (change)=\"onFilterChange($event)\" [checked]=\"true\">{{ st }}</mat-checkbox>\n        </div>\n\n      </mat-expansion-panel>\n      <mat-expansion-panel [ngStyle]=\"{'background-color': '#efefef'}\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            다른 메뉴\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p>기타 메뉴</p>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-sidenav>\n  <!-- Side Bar -->\n\n  <!-- Main Content -->\n  <mat-sidenav-content>\n    <!-- Profile & Horizontal Line -->\n    <usertimeline></usertimeline>\n    <!-- Under Horizontal Line  -->\n    <usertimeline-specific></usertimeline-specific>\n\n    <!-- Footer -->\n    <footer class=\"page-footer\"  style=\"background-color: #CDCDCD;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col l6 s12\">\n            <h5 class=\"white-text\">Plather</h5>\n            <p class=\"grey-text text-lighten-4\">문곰의 제 4회 서강대학교 해커톤 프로젝트입니다.</p>\n          </div>\n          <div class=\"col l4 offset-l2 s12\"></div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"container\">\n          © 2018 Copyright Moongom\n          <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n        </div>\n      </div>\n    </footer>\n    <!-- Footer -->\n  </mat-sidenav-content>\n  <!-- Main Content -->\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/horizontal-line/horizontal-line.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/horizontal-line/horizontal-line.component.ts ***!
  \**************************************************************/
/*! exports provided: HorizontalLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalLineComponent", function() { return HorizontalLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _usertimeline_usertimeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../usertimeline/usertimeline.component */ "./src/app/usertimeline/usertimeline.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HorizontalLineComponent = /** @class */ (function () {
    function HorizontalLineComponent(elementRef) {
        this.elementRef = elementRef;
    }
    HorizontalLineComponent.prototype.ngOnInit = function () {
        this.superTags = this.userTimeLine.superTagName;
    };
    HorizontalLineComponent.prototype.ngAfterViewInit = function () {
    };
    HorizontalLineComponent.prototype.onFilterChange = function (e) {
        if (e.checked) {
            for (var i = 0; i < this.userTimeLine.activities.length; i++) {
                this.userTimeLine.activities[i].supertag.replace(/[\n\r]+|[\s]{2,}/g, '') == e.source._elementRef.nativeElement.innerText.replace(/[\n\r]+|[\s]{2,}/g, '');
                if (this.userTimeLine.activities[i].supertag.replace(/[\n\r]+|[\s]{2,}/g, '') == e.source._elementRef.nativeElement.innerText.replace(/[\n\r]+|[\s]{2,}/g, '')) {
                    this.userTimeLine.activities[i].filter = true;
                }
            }
        }
        else {
            for (var i = 0; i < this.userTimeLine.activities.length; i++) {
                if (this.userTimeLine.activities[i].supertag.replace(/[\n\r]+|[\s]{2,}/g, '') == e.source._elementRef.nativeElement.innerText.replace(/[\n\r]+|[\s]{2,}/g, '')) {
                    this.userTimeLine.activities[i].filter = false;
                }
            }
        }
        this.userTimeLine.filterByRange();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_usertimeline_usertimeline_component__WEBPACK_IMPORTED_MODULE_1__["UsertimelineComponent"]),
        __metadata("design:type", _usertimeline_usertimeline_component__WEBPACK_IMPORTED_MODULE_1__["UsertimelineComponent"])
    ], HorizontalLineComponent.prototype, "userTimeLine", void 0);
    HorizontalLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'horizontal-line',
            template: __webpack_require__(/*! ./horizontal-line.component.html */ "./src/app/horizontal-line/horizontal-line.component.html"),
            styles: [__webpack_require__(/*! ./horizontal-line.component.css */ "./src/app/horizontal-line/horizontal-line.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HorizontalLineComponent);
    return HorizontalLineComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <slideshow [height]=\"'800px'\" [imageUrls]=\"imageUrlArray\"></slideshow> -->\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.prototype.ngAfterViewInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")],
            providers: []
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-1\"></div>\n  <form [formGroup]=\"loginForm\" class=\"col-10\" (ngSubmit)=\"login(loginForm.value)\" novalidate>\n    <div class=\"form-group\">\n      <input formControlName=\"Email\" id=\"Email\" type=\"text\" class=\"form-control\" placeholder=\"Email\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.Email.errors }\" />\n      <div *ngIf=\"submitted && loginForm.controls.Email.errors\" class=\"invalid-feedback redcolor\">\n        <div *ngIf=\"loginForm.controls.Email.errors.required\">Email is required</div>\n        <div *ngIf=\"loginForm.controls.Email.errors.email\">Email is not right</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <input formControlName=\"Password\" id=\"Password\" type=\"password\" class=\"form-control\" placeholder=\"Password\" [ngClass]=\"{ 'is-invalid': submitted && loginForm.controls.Password.errors }\" />\n      <div *ngIf=\"submitted && loginForm.controls.Password.errors\" class=\"invalid-feedback redcolor\">\n        <div *ngIf=\"loginForm.controls.Password.errors.required\">Password is required</div>\n        <div *ngIf=\"loginForm.controls.Password.errors.minlength\">Password should more than 8 length</div>\n      </div>\n    </div>\n    <div class=\"button-row\">\n      <button mat-raised-button [routerLink]=\"['/signup']\" color=\"gray\">Register</button>\n      <button mat-raised-button style=\"margin-left: 50px;\" color=\"gray\">Login</button>\n    </div>\n  </form>\n  <div class=\"col-1\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, loginservice, router, AlertService, dialogRef) {
        this.fb = fb;
        this.loginservice = loginservice;
        this.router = router;
        this.AlertService = AlertService;
        this.dialogRef = dialogRef;
        this.loading = false;
        this.returnUrl = '/horizontalline';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.fb.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)])
        });
    };
    LoginComponent.prototype.login = function (logintype) {
        var _this = this;
        if (this.loginForm.invalid) {
            console.log('error is occured hahahaha');
            return;
        }
        else {
            this.loginservice.login(logintype)
                .subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
                console.log('login is success');
                _this.dialogRef.close();
                if (_this.router.url == _this.returnUrl) {
                    window.location.reload();
                }
            }, function (error) {
                _this.AlertService.error(error);
                _this.loading = false;
            });
        }
        console.log(this.loginForm.value);
        console.log('success');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _signup_service__WEBPACK_IMPORTED_MODULE_3__["SignupService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-profile .user-profile-name{\n  color: #727272;\n  font-size: 30px;\n}\n\n.user-profile .user-profile-org{\n  color: #727272;\n  font-size: 20px;\n}\n\n.user-profile .user-profile-name{\n  color: #727272;\n  font-size: 30px;\n}\n\n.user-profile .user-profile-org{\n  color: #727272;\n  font-size: 20px;\n}\n\n.card{\n  height: 273px;\n  overflow-y: scroll;\n}\n\n.button-row{\n  position: absolute;\n}\n"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [ngStyle]=\"{'height': '1000px'}\">\n  <mat-sidenav mode=\"side\" opened style=\"width: 230px;\">\n    <mat-accordion>\n      <mat-expansion-panel [ngStyle]=\"{'background-color': '#efefef'}\" expanded>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            계정 설정\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n          <a href=\"#\" style=\"color: black\">회원 정보 수정</a><br>\n          <a href=\"#\" style=\"color: black\">공개 범위 설정</a><br>\n          <a href=\"#\" style=\"color: black\">회원 탈퇴</a><br>\n\n      </mat-expansion-panel>\n      <mat-expansion-panel [ngStyle]=\"{'background-color': '#efefef'}\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            다른 메뉴\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p>기타 메뉴</p>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-sidenav>\n  <!-- Side Bar -->\n\n  <!-- Main Content -->\n  <mat-sidenav-content>\n    <div class=\"row\">\n      <div class= \"col-4\"></div>\n      <div class= \"col-4 user-profile\" style=\"text-align: center;\">\n        <div class=\"button-row\">\n          <button id=\"float-btn\" mat-fab (click)=\"openDialog()\" color=\"black\" style=\"font-size: 20px; background-color: gray;\">\n            <mat-icon>edit</mat-icon>\n          </button>\n        </div>\n        <img id=\"profile-img\" class=\"img-responsive\" src=\"assets/images/user_profile_default.png\">\n        <br><span class=\"user-profile-name\">김희재</span><br>\n        <span class=\"user-profile-org\">Sogang Univ</span><br>\n      </div>\n      <div class= \"col-4\"></div>\n    </div>\n    <div class=\"row\">\n      <div class= \"col-1\"></div>\n      <div class= \"col-5\">\n        <mat-card class=\"card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>자기 소개</mat-card-title>\n            <mat-card-subtitle>고양이</mat-card-subtitle>\n          </mat-card-header>\n          <!-- <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\"> -->\n          <mat-card-content>\n            <p>\n              개에 대해 할 말은 많지만 일단 급한 불부터 끄자. 피타고라스를 공포로 몰아넣은 저 개부터 쫓아 버려야겠어. 체격에서 불리하니까 효과적인 전략으로 대응하는 수밖에\n            </p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class= \"col-5\">\n        <mat-card class=\"card\">\n          <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\"></div>\n            <mat-card-title>경력 기술</mat-card-title>\n            <mat-card-subtitle>강아지 사료</mat-card-subtitle>\n          </mat-card-header>\n          <mat-card-content>\n            <p>- 고양이</p>\n            <p>- 베르나르 베르베르</p>\n            <p>- 피타고라스가 <웃음>이라고 했던 바로 그 소리</p>\n            <p>- 집사는 평소보다 더 신경이 곤두서 있다.</p>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div class= \"col-1\"></div>\n    </div>\n\n\n    <!-- <input\n      style=\"display: none\"\n      type=\"file\" (change)=\"onFileChanged($event)\"\n      #fileInput>\n    <button (click)=\"fileInput.click()\">Select File</button>\n    <button (click)=\"onUpload()\">Upload!</button> -->\n\n    <!-- Footer -->\n    <footer class=\"page-footer\"  style=\"background-color: #CDCDCD;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col l6 s12\">\n            <h5 class=\"white-text\">Plather</h5>\n            <p class=\"grey-text text-lighten-4\">문곰의 제 4회 서강대학교 해커톤 프로젝트입니다.</p>\n          </div>\n          <div class=\"col l4 offset-l2 s12\"></div>\n        </div>\n      </div>\n      <div class=\"footer-copyright\">\n        <div class=\"container\">\n          © 2018 Copyright Moongom\n          <a class=\"grey-text text-lighten-4 right\" href=\"#!\">More Links</a>\n        </div>\n      </div>\n    </footer>\n    <!-- Footer -->\n  </mat-sidenav-content>\n  <!-- Main Content -->\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../edit-profile/edit-profile.component */ "./src/app/edit-profile/edit-profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dialog, elementRef) {
        this.dialog = dialog;
        this.elementRef = elementRef;
    }
    ProfileComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditProfileComponent"], {
            width: '1000px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.animal = result;
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        var float_btn = this.elementRef.nativeElement.querySelector('#float-btn');
        var profile_img = this.elementRef.nativeElement.querySelectorAll('.user-profile')[0];
        float_btn.style.left = profile_img.offsetWidth * 0.18 + "px";
        float_btn.style.top = "15px";
    };
    ProfileComponent.prototype.onFileChanged = function (event) {
        var file = event.target.files[0];
    };
    ProfileComponent.prototype.onUpload = function () {
        // upload code goes here
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/show-specific-activities/show-specific-activities.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/show-specific-activities/show-specific-activities.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/show-specific-activities/show-specific-activities.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/show-specific-activities/show-specific-activities.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div *ngFor=\"let post of data.activities; let i=index\">\n    <div>\n      <p>{{ post.tag }}</p><br>\n      <p>{{ post.supertag }}</p><br>\n      {{ post.date }}<br>\n      <p>----------------------------------------------------------------------</p>\n    </div>\n  </div>\n<div>\n"

/***/ }),

/***/ "./src/app/show-specific-activities/show-specific-activities.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/show-specific-activities/show-specific-activities.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShowSpecificActivitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowSpecificActivitiesComponent", function() { return ShowSpecificActivitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ShowSpecificActivitiesComponent = /** @class */ (function () {
    function ShowSpecificActivitiesComponent(data) {
        this.data = data;
    }
    ShowSpecificActivitiesComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    ShowSpecificActivitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'show-specific-activities',
            template: __webpack_require__(/*! ./show-specific-activities.component.html */ "./src/app/show-specific-activities/show-specific-activities.component.html"),
            styles: [__webpack_require__(/*! ./show-specific-activities.component.css */ "./src/app/show-specific-activities/show-specific-activities.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ShowSpecificActivitiesComponent);
    return ShowSpecificActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/signup.service.ts":
/*!***********************************!*\
  !*** ./src/app/signup.service.ts ***!
  \***********************************/
/*! exports provided: SignupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupService", function() { return SignupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_bad_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/bad-input */ "./src/app/common/bad-input.ts");
/* harmony import */ var _common_not_found_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/not-found-error */ "./src/app/common/not-found-error.ts");
/* harmony import */ var _common_app_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/app-error */ "./src/app/common/app-error.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var endpoint_login = 'http://localhost:8000/api/login/';
var endpoint_register = 'http://localhost:8000/api/register/';
var SignupService = /** @class */ (function () {
    function SignupService(http) {
        this.http = http;
    }
    SignupService.prototype.register = function (signuptype) {
        return this.http.post(endpoint_register, { email: signuptype.Email, screen_name: signuptype.Nickname, password: signuptype.Password, password_confirm: signuptype.Password_Confirm, phone: signuptype.Phone }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    SignupService.prototype.login = function (logintype) {
        // var httpOptions = {
        //   headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') }),
        // };
        var _this = this;
        return this.http.post(endpoint_login, { email: logintype.Email, password: logintype.Password }, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'X-CSRFToken': this.getCookie('csrftoken') }),
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // login successful if there's a jwt token in the response
            if (response) {
                _this.token = response;
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ email: logintype.Email }));
            }
            return _this.token;
        }));
    };
    SignupService.prototype.logout = function () {
        // remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    SignupService.prototype.handleError = function (error) {
        if (error.status === 400)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_bad_input__WEBPACK_IMPORTED_MODULE_4__["BadInput"](error.json()));
        if (error.status === 404)
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_not_found_error__WEBPACK_IMPORTED_MODULE_5__["NotFoundError"]());
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(new _common_app_error__WEBPACK_IMPORTED_MODULE_6__["AppError"](error));
    };
    SignupService.prototype.getCookie = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return decodeURIComponent(parts.pop().split(";").shift());
    };
    SignupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupService);
    return SignupService;
}());



/***/ }),

/***/ "./src/app/signup1/signup1.component.css":
/*!***********************************************!*\
  !*** ./src/app/signup1/signup1.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fix_box{\n    margin-left:10%;\n    width:80%;\n    height: 200px;\n    overflow-y: scroll;\n}"

/***/ }),

/***/ "./src/app/signup1/signup1.component.html":
/*!************************************************!*\
  !*** ./src/app/signup1/signup1.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s4\"></div>\n<div  class=\"col s4\">\n<mat-card>\n    <mat-card-header>\n      <mat-checkbox class=\"plather_service\" [(ngModel)]=\"service\">Plather 서비스 약관 동의</mat-checkbox>\n    </mat-card-header>\n    <mat-card class=\"fix_box\" text-center>\n      <mat-card-content>\n          제 1 장 총 칙\n          제 1 조 목적\n          본 약관은 서비스 이용자가 주식회사 문곰(이하 “회사”라 합니다)가 제공하는 온라인상의 인터넷 서비스(이하 “서비스”라고 하며, 접속 가능한 유∙무선 단말기의 종류와는 상관없이 이용 가능한 “회사”가 제공하는 모든 “서비스”를 의미합니다. 이하 같습니다)에 회원으로 가입하고 이를 이용함에 있어 회사와 회원(본 약관에 동의하고 회원등록을 완료한 서비스 이용자를 말합니다. 이하 “회원”이라고 합니다)의 권리•의무 및 책임사항을 규정함을 목적으로 합니다.\n          \n          제 2 조 (약관의 명시, 효력 및 개정)\n          ①\n          회사는 이 약관의 내용을 회원이 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.\n          \n          ②\n          회사는 온라인 디지털콘텐츠산업 발전법, 전자상거래 등에서의 소비자보호에 관한 법률, 약관의 규제에 관한 법률, 소비자기본법 등 관련법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.\n          \n          ③\n          회사가 약관을 개정할 경우에는 기존약관과 개정약관 및 개정약관의 적용일자와 개정사유를 명시하여 현행약관과 함께 그 적용일자 일십오(15)일 전부터 적용일 이후 상당한 기간 동안, 개정 내용이 회원에게 불리한 경우에는 그 적용일자 삼십(30)일 전부터 적용일 이후 상당한 기간 동안 각각 이를 서비스 홈페이지에 공지하고 기존 회원에게는 회사가 부여한 이메일 주소로 개정약관을 발송하여 고지합니다.\n          \n          ④\n          회사가 전항에 따라 회원에게 통지하면서 공지∙고지일로부터 개정약관 시행일 7일 후까지 거부의사를 표시하지 아니하면 승인한 것으로 본다는 뜻을 명확하게 고지하였음에도 의사표시가 없는 경우에는 변경된 약관을 승인한 것으로 봅니다. 회원이 개정약관에 동의하지 않을 경우 회원은 제17조 제1항의 규정에 따라 이용계약을 해지할 수 있습니다.\n          \n          제 2 장 회원의 가입 및 관리\n          제 3 조 (회원가입절차)\n          ①\n          서비스 이용자가 본 약관을 읽고 “동의” 버튼을 누르거나 “확인” 등에 체크하는 방법을 취한 경우 본 약관에 동의한 것으로 간주합니다.\n          \n          ②\n          회사의 서비스 이용을 위한 회원가입은 서비스 이용자가 제1항과 같이 동의한 후, 회사가 정한 온라인 회원가입 신청서에 회원 ID를 포함한 필수사항을 입력하고, “등록하기” 내지 “확인” 단추를 누르는 방법으로 합니다. 다만, 회사가 필요하다고 인정하는 경우 회원에게 별도의 서류를 제출하도록 할 수 있습니다.\n          \n          ③\n          법인고객 회원가입의 경우 회원가입 신청서의 제출, 서비스 이용대금의 납부 이외에 회사가 정하는 추가 서류의 제출이 추가적으로 필요합니다.\n          \n          ④\n          법인고객 회원가입의 경우 서비스 이용자와 이용요금 납입자가 다를 경우 회사는 이를 확인하기 위하여 제 증명을 요구할 수 있습니다.\n          \n          제 4 조 (회원등록의 성립과 유보 및 거절)\n          ①\n          회원등록은 제3조에 정한 절차에 의한 서비스 이용자의 회원가입 신청과 회사의 회원등록 승낙에 의하여 성립합니다. 회사는 회원가입 신청자가 필수사항 등을 성실히 입력하여 가입신청을 완료하였을 때에는 필요한 사항을 확인한 후 지체 없이 이를 승낙을 하여야 합니다. 단 회원가입 신청서 제출 이외에 별도의 자료 제출이 요구되는 경우에는 예외로 합니다.\n          \n          ②\n          회사는 아래 각 호의 1에 해당하는 경우에는 회원등록의 승낙을 유보할 수 있습니다.\n          \n          1. 제공서비스 설비용량에 현실적인 여유가 없는 경우\n          2. 서비스를 제공하기에는 기술적으로 문제가 있다고 판단되는 경우\n          3. 법인 고객으로 가입신청을 하고 제3조 제3항 내지 제4항의 의무를 이행하지 않은 경우\n          4. 기타 회사가 재정적, 기술적으로 필요하다고 인정하는 경우\n          ③\n          회사는 아래 각 호의 1에 해당하는 경우에는 회원등록을 거절할 수 있습니다.\n          \n          1. 가입신청서의 내용을 허위로 기재하였거나 허위서류를 첨부하여 가입신청을 하는 경우\n          2. 법인 고객으로 가입신청을 하고 회사가 별도로 규정하는 일정한 기간 이내에 제3조 제3항 내지 제4항의 의무를 이행하지 않은 경우\n          3. 14세 미만의 아동이 개인정보제공에 대한 동의를 부모 등 법정대리인으로부터 받지 않은 경우\n          4. 기타 회사가 관련법령 등을 기준으로 하여 명백하게 사회질서 및 미풍양속에 반할 우려가 있음을 인정하는 경우\n          5. 제17조 제2항에 의하여 회사가 계약을 해지했던 회원이 다시 회원 신청을 하는 경우\n          제 5 조 (회원 ID 등의 관리책임)\n          ①\n          회원은 서비스 이용을 위한 회원 ID, 비밀번호의 관리에 대한 책임, 본인 ID의 제3자에 의한 부정사용 등 회원의 고의∙과실로 인해 발생하는 모든 불이익에 대한 책임을 부담합니다. 단, 이것이 회사의 고의∙과실로 인하여 야기된 경우는 회사가 책임을 부담합니다.\n          \n          ②\n          회원은 회원 ID, 비밀번호 및 추가정보 등을 도난 당하거나 제3자가 사용하고 있음을 인지한 경우에는 즉시 본인의 비밀번호를 수정하는 등의 조치를 취하여야 하며 즉시 이를 회사에 통보하여 회사의 안내를 따라야 합니다.\n          \n          제 6 조 (개인정보의 수집 등)\n          회사는 서비스를 제공하기 위하여 관련 법령의 규정에 따라 회원으로부터 필요한 개인정보를 수집합니다.\n          \n          제 7 조 (회원정보의 변경)\n          회원은 아래 각 호의 1에 해당하는 사항이 변경되었을 경우 즉시 회원정보 관리페이지에서 이를 변경하여야 합니다. 이 경우 회사는 회원이 회원정보를 변경하지 아니하여 발생한 손해에 대하여 책임을 부담하지 아니하며, 법인 회원의 경우에는 회사가 별도로 정하는 방법으로 변경할 수 있습니다.\n          \n          1. 생년월일, 거주지역 및 연락처 등\n          2. 우편/경품 수신 주소, 취미•관심사 등\n          3. 서비스별 뉴스레터 수신 여부 등\n          4. 기타 회사가 인정하는 사항\n          제 3 장 서비스의 이용\n          제 8 조 (서비스 이용)\n          ①\n          서비스 이용은 회사의 서비스 사용승낙 직후부터 가능합니다. 다만, 유료 서비스의 경우 회사가 요금납입을 확인한 직후부터 가능하게 할 수 있습니다.\n          \n          ②\n          민법상 미성년자인 회원이 유료 서비스를 이용할 경우 미성년자인 회원은 결제 전 법정대리인의 동의를 얻어야 합니다.\n          \n          ③\n          서비스 이용시간은 회사의 업무상 또는 기술상 불가능한 경우를 제외하고는 연중무휴 1일 24시간(00:00-24:00)으로 함을 원칙으로 합니다. 다만, 서비스설비의 정기점검 등의 사유로 회사가 서비스를 특정범위로 분할하여 별도로 날짜와 시간을 정할 수 있습니다.\n          \n          제 9 조 (서비스내용변경 통지 등)\n          ①\n          회사가 서비스 제공을 위해 계약한 CP(Contents Provider)와의 계약종료, CP의 변경, 신규서비스의 개시 등의 사유로 서비스 내용이 변경되거나 서비스가 종료되는 경우 회사는 회원의 등록된 전자우편 주소로 이메일을 통하여 서비스 내용의 변경 사항 또는 종료를 통지할 수 있습니다.\n          \n          ②\n          전항의 경우 불특정 다수인을 상대로 통지를 함에 있어서는 웹사이트 기타 회사의 공지사항 페이지를 통하여 회원들에게 통지할 수 있습니다. 단, 회원 본인의 거래와 관련하여 중대한 영향을 미치는 사항은 상당한 기간 동안 게시판을 통해 이를 공지하고 회사가 부여한 이메일 주소로 개별통지 합니다.\n          \n          ③\n          유료 서비스가 종료되는 경우에는 서비스를 이용하는 회원에게 반드시 제1항의 규정에 따라 이메일을 통하여 이를 고지하며 제16조 제4항의 규정에 따라 환불 처리합니다.\n          \n          제 10 조 (권리의 귀속 및 저작물의 이용)\n          ①\n          회원이 서비스 내에 게시한 게시물 등(이하 \"게시물 등\"이라 합니다)의 저작권은 해당 게시물의 저작자에게 귀속됩니다.\n          \n          ②\n          게시물 등은 회사가 운영하는 인터넷 사이트 및 모바일 어플리케이션을 통해 노출될 수 있으며, 검색결과 내지 관련 프로모션 등에도 노출될 수 있습니다. 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 복제, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 회원은 언제든지 고객센터 또는 각 서비스 내 관리기능을 통해 해당 게시물 등에 대해 삭제, 검색결과 제외, 비공개 등의 조치를 취할 수 있습니다.\n          \n          ③\n          회사는 제2항 이외의 방법으로 회원의 게시물 등을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 회원의 동의를 얻습니다.\n          \n          제 11 조 (서비스 이용의 제한 및 중지)\n          ①\n          회사는 아래 각 호의 1에 해당하는 사유가 발생한 경우에는 회원의 서비스 이용을 제한하거나 중지시킬 수 있습니다.\n          \n          1. 회원이 회사 서비스의 운영을 고의∙과실로 방해하는 경우\n          2. 회원이 제13조의 의무를 위반한 경우\n          3. 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우\n          4. 전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지했을 경우\n          5. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용에 지장이 있는 때\n          6. 기타 중대한 사유로 인하여 회사가 서비스 제공을 지속하는 것이 부적당하다고 인정하는 경우\n          ②\n          회사는 전항의 규정에 의하여 서비스의 이용을 제한하거나 중지한 때에는 그 사유 및 제한기간등을 회원에게 알려야 합니다.\n          \n          ③\n          제17조 제2항에 의해 회사가 회원과의 계약을 해지하고 탈퇴시키기로 결정한 경우 회사는 회원의 탈퇴 처리 전에 이를 통지하고, 회원은 회사의 통지를 받은 날로부터 30일 이내에 이에 대한 항변의 기회를 가집니다.\n          \n          ④\n          회원이 서비스를 이용하는 도중, 연속하여 삼(3)개월 동안 서비스를 이용하기 위해 log-in한 기록이 없는 경우, 회사는 당해 회원 \"한메일넷 서비스\"의 전자우편 수신을 제한할 수 있습니다.\n          \n          ⑤\n          정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 “정보통신망법”이라 합니다)의 규정에 의해 다른 회원의 공개된 게시물 등이 본인의 사생활을 침해하거나 명예를 훼손하는 등 권리를 침해 받은 회원 또는 제3자(이하 “삭제 등 신청인”이라 합니다)는 그 침해사실을 소명하여 회사에 해당 게시물 등의 삭제 또는 반박 내용의 게재를 요청할 수 있습니다. 이 경우 회사는 해당 게시물 등의 권리 침해 여부를 판단할 수 없거나 당사자 간의 다툼이 예상되는 경우 해당 게시물 등에 대한 접근을 임시적으로 차단하는 조치(이하 “임시조치”라 합니다)를 최장 30일까지 취합니다.\n          \n          ⑥\n          제5항에 의해 본인의 게시물 등이 임시조치된 회원(이하 “게시자”라 합니다)은 임시조치기간 중 회사에 해당 게시물 등을 복원해 줄 것을 요청(이하 “재게시 청구”라 합니다)할 수 있으며, 회사는 임시조치된 게시물의 명예훼손 등 판단에 대한 방송통신심의위원회 심의 요청에 대한 게시자 및 삭제 등 신청인의 동의가 있는 경우 게시자 및 삭제 등 신청인을 대리하여 이를 요청하고 동의가 없는 경우 회사가 이를 판단하여 게시물 등의 복원 여부를 결정합니다. 게시자의 재게시 청구가 있는 경우 임시조치 기간 내에 방송통신심의위원회 또는 회사의 결정이 있으면 그 결정에 따르고 그 결정이 임시조치 기간 내에 있지 않는 경우 해당 게시물 등은 임시조치 만료일 이후 복원됩니다. 재게시 청구가 없는 경우 해당 게시물 등은 임시조치 기간 만료 이후 삭제됩니다.\n          \n          ⑦\n          회사는 서비스 내에 게시된 게시물 등이 사생활 침해 또는 명예훼손 등 제3자의 권리를 침해한다고 인정하는 경우 제5항에 따른 회원 또는 제3자의 신고가 없는 경우에도 임시조치(이하 “임의의 임시조치”라 합니다)를 취할 수 있습니다. 임의의 임시조치된 게시물의 처리 절차는 제5항 후단 및 제6항의 규정에 따릅니다.\n          \n          ⑧\n          회원의 게시물 등으로 인한 법률상 이익 침해를 근거로, 다른 회원 또는 제3자가 회원 또는 회사를 대상으로 하여 민형사상의 법적 조치(예: 형사고소, 가처분 신청∙손해배상청구 등 민사소송의 제기)를 취하는 경우, 회사는 동 법적 조치의 결과인 법원의 확정판결이 있을 때까지 관련 게시물 등에 대한 접근을 잠정적으로 제한할 수 있습니다. 게시물 등의 접근 제한과 관련한 법적 조치의 소명, 법원의 확정 판결에 대한 소명 책임은 게시물 등에 대한 조치를 요청하는 자가 부담합니다.\n          \n          제 12 조 (회사의 의무)\n          ①\n          회사는 회사의 서비스 제공 및 보안과 관련된 설비를 지속적이고 안정적인 서비스 제공에 적합하도록 유지, 점검 또는 복구 등의 조치를 성실히 이행하여야 합니다.\n          \n          ②\n          회사는 회원이 수신 동의를 하지 않은 영리 목적의 광고성 전자우편, SMS 문자메시지 등을 발송하지 아니합니다.\n          \n          ③\n          회사는 서비스의 제공과 관련하여 알게 된 회원의 개인정보를 본인의 승낙 없이 제3자에게 누설, 배포하지 않고, 이를 보호하기 위하여 노력합니다. 회원의 개인정보보호에 관한 기타의 사항은 정보통신망법 및 회사가 별도로 정한 “개인정보관리지침”에 따릅니다.\n          \n          ④\n          회사가 제3자와의 서비스 제공계약 등을 체결하여 회원에게 서비스를 제공하는 경우 회사는 각 개별서비스에서 서비스의 제공을 위하여 제3자에게 제공되는 회원의 구체적인 회원정보를 명시하고 회원의 개별적이고 명시적인 동의를 받은 후 동의의 범위 내에서 해당 서비스의 제공 기간 동안에 한하여 회원의 개인정보를 제3자와 공유하는 등 관련 법령을 준수합니다.\n          \n          제 13 조 (회원의 의무)\n          ①\n          회원은 아래 각 호의 1에 해당하는 행위를 하여서는 아니 됩니다.\n          \n          1. 회원가입신청 또는 변경 시 허위내용을 등록하는 행위\n          2. 회사의 서비스에 게시된 정보를 변경하거나 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 영리 또는 비영리의 목적으로 복제, 출판, 방송 등에 사용하거나 제3자에게 제공하는 행위\n          3. 회사가 제공하는 서비스를 이용하여 제3자에게 본인을 홍보할 기회를 제공 하거나 제3자의 홍보를 대행하는 등의 방법으로 금전을 수수하거나 서비스를 이용할 권리를 양도하고 이를 대가로 금전을 수수하는 행위\n          4. 회사 기타 제3자에 대한 허위의 사실을 게재하거나 지적재산권을 침해하는 등 회사나 제3자의 권리를 침해하는 행위\n          5. 다른 회원의 ID 및 비밀번호를 도용하여 부당하게 서비스를 이용하는 행위\n          6. 타인의 계좌번호 및 신용카드번호 등 타인의 허락 없이 타인의 결제정보를 이용하여 회사의 유료서비스를 이용하는 행위\n          7. 정크메일(junk mail), 스팸메일(spam mail), 행운의 편지(chain letters), 피라미드 조직에 가입할 것을 권유하는 메일, 외설 또는 폭력적인 메시지•화상•음성 등이 담긴 메일을 보내거나 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위\n          8. 정보통신망법 등 관련 법령에 의하여 그 전송 또는 게시가 금지되는 정보(컴퓨터 프로그램 등)를 전송하거나 게시하는 행위\n          9. 청소년보호법에서 규정하는 청소년유해매체물을 게시하는 행위\n          10. 공공질서 또는 미풍양속에 위배되는 내용의 정보, 문장, 도형, 음성 등을 유포하는 행위\n          11. 회사의 직원이나 서비스의 관리자를 가장하거나 사칭하여 또는 타인의 명의를 모용하여 글을 게시하거나 메일을 발송하는 행위\n          12. 컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 소프트웨어 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자우편으로 발송하는 행위\n          13. 스토킹(stalking), 욕설, 채팅글 도배 등 다른 회원의 서비스 이용을 방해하는 행위\n          14. 다른 회원의 개인정보를 그 동의 없이 수집, 저장, 공개하는 행위\n          15. 불특정 다수의 회원을 대상으로 하여 광고 또는 선전을 게시하거나 스팸메일을 전송할 목적으로 회사에서 제공하는 프리미엄 메일 기타 서비스를 이용하여 영리활동을 하는 행위\n          16. 회사가 제공하는 소프트웨어 등을 개작하거나 리버스 엔지니어링, 디컴파일, 디스어셈블 하는 행위\n          17. 현행 법령, 회사가 제공하는 서비스에 정한 약관 기타 서비스 이용에 관한 규정을 위반하는 행위\n          ②\n          회사는 회원이 제1항의 행위를 하는 경우 해당 게시물 등을 삭제 또는 임시삭제할 수 있고 서비스의 이용을 제한하거나 일방적으로 본 계약을 해지할 수 있습니다.\n          \n          ③\n          회사가 제공하는 서비스 중 관련 법령 등의 규정에 의하여 성인인증이 필요한 경우 회원은 해당 서비스를 이용하기 위하여 회사가 제공하는 방법에 따라 실명정보를 회사에 제공하여야 합니다.\n          \n          제 14 조 (양도금지)\n          회원의 서비스 받을 권리는 이를 양도 내지 증여하거나 질권의 목적으로 사용할 수 없습니다.\n          \n          제 15 조 (이용요금의 납입)\n          ①\n          회원은 회사가 제공하는 서비스 중 유료서비스를 이용하는 경우 이용대금을 납부한 후 서비스를 이용하는 것을 원칙으로 합니다.\n          \n          ②\n          회사가 제공하는 유료서비스에 대한 이용요금의 결제 방법은 핸드폰결제, 신용카드결제, 일반전화결제, 계좌이체, 무통장입금, Daum캐쉬 결제 등이 있으며 각 유료서비스마다 결제 방법의 차이가 있을 수 있습니다.\n          \n          ③\n          매월 정기적인 결제가 이루어지는 서비스의 경우 회원이 해당 서비스의 이용을 중단하고 정기 결제의 취소를 요청하지 않는 한 매월 결제가 이루어집니다.\n          \n          ④\n          회사는 결제의 이행을 위하여 반드시 필요한 회원의 개인정보를 추가적으로 요구할 수 있으며, 회원은 회사가 요구하는 개인정보를 정확하게 제공하여야 합니다. 회사는 회원이 허위로 또는 부정확하게 제공한 개인정보로 인하여 회원에게 발생하는 손해에 대하여 회사의 고의∙과실이 없는 한 회원의 손해를 배상할 책임을 부담하지 않습니다.\n          \n          제 16 조 (이용요금의 환불 및 이의제기)\n          ①\n          회원이 과오 납입한 요금에 대하여는 회사는 그 요금을 환불하여야 합니다.\n          \n          ②\n          회원의 귀책사유로 이용요금을 환불하는 경우 일반적인 방법은 아래와 같습니다.\n          \n          회사가 제공하는 유료서비스가 결제 후 1회의 이용만으로 서비스의 이용이나 구매가 완료되는 서비스인 경우 해당 서비스를 이용한 후에는 환불이 불가능합니다. 단, 1회의 구매 완료 후 그 사용기한이 무제한인 아바타, 배경음악, 스킨 등의 서비스는 구매 완료일로부터 1년 이내에만 환불이 가능하며 환불금액은 구입금액*(365-사용일수/365)로 합니다.\n          회사가 제공하는 유료서비스가 결제 후 1개월(결제 기준) 이하로 지속되는 서비스인 경우 해지일로부터 이용일수에 해당하는 금액을 제외한 나머지 금액을 환불합니다. 본 항의 규정은 일(1)개월 단위로 매월 결제되는 서비스의 경우에도 적용됩니다.\n          회사가 제공하는 유료서비스가 결제 후 1개월(결제 기준)을 초과하여 지속되는 서비스인 경우 해지일로부터 이용일수에 해당하는 금액과 총 남은 이용일수의 10%를 제외한 금액을 환불합니다. 단, 유료 서비스 이용 개시일로부터 7일 이내에 해지를 요구하는 경우 이용일수에 해당하는 금액만을 제외하고 환불합니다.\n          ③\n          제2항의 규정에도 불구하고 아래 각 호의 경우에는 회원이 결제한 전액을 환불합니다.\n          \n          1. 회원이 결제를 완료한 후 서비스를 이용한 내역이 없는 경우\n          2. 서비스 장애 또는 회사가 제시한 최소한의 기술사양을 충족하였음에도 불구하고 회사의 귀책사유로 서비스를 이용하지 못한 경우\n          3. 회원이 구매한 서비스가 제공되지 않은 경우\n          4. 제공되는 서비스가 표시∙광고 등과 상이하거나 현저한 차이가 있는 경우\n          5. 제공되는 서비스의 결함으로 서비스의 정상적인 이용이 현저히 불가능한 경우\n          ④\n          제3항 제2호의 사유 또는 서비스의 중단 등 회사의 귀책사유로 이용요금을 환불하는 경우 회사는 남은 유료서비스 이용일수에 해당하는 금액과 그 금액의 10%에 해당하는 금액을 추가적으로 회원에게 환불합니다. 단, 1회의 구매 완료 후 그 사용기한이 무제한인 아바타, 배경음악, 스킨 등의 서비스는 구매 완료일로부터 1년 이내일 경우에만 환불합니다.\n          \n          ⑤\n          회원은 이용요금에 대하여 이의를 제기할 수 있습니다. 단, 이용요금에 관한 이의는 그 사유 발생을 안 날로부터 1월, 그 사유가 발생한 날로부터 3월 이내에 제기하여야 합니다.\n          \n          ⑥\n          회원이 제13조의 규정을 위반하여 회사가 회원의 서비스 이용을 제한하거나 일방적으로 본 계약을 해지하는 경우 회사는 회원에게 대하여 일체의 환불을 하지 않습니다.\n          \n          ⑦\n          전액 환불의 경우 회원이 해당 서비스의 이용을 위하여 이용한 결제수단으로 환불하는 것을 원칙으로 하나 이것이 불가능 하거나 서비스의 중도해지로 인한 부분 환불 등의 경우에는 회사가 정하는 별도의 방법으로 환불합니다.\n          \n          ⑧\n          본 조의 규정에 의한 환불은 환불 의무가 발생한 날로부터 3영업일 이내에 하는 것으로 하며 환불이 지연되는 경우 지연이자율은 연리 11%로 합니다. 단, 환불에 회원의 협조가 필요한 경우에 회원의 귀책사유로 인한 환불 지연에 대해서는 지연이자를 지급하지 않습니다.\n          \n          ⑨\n          환불에 소요되는 비용은 회원의 귀책사유로 인한 환불의 경우에는 회원이, 회사의 귀책사유로 인한 환불의 경우에는 회사가 각각 부담합니다.\n          \n          제 17 조 (이용계약의 해지)\n          ①\n          회원이 서비스 이용계약을 해지하고자 하는 때에는 언제든지 회원정보관리에서 회사가 정한 절차에 따라 회원의 ID를 삭제하고 탈퇴할 수 있습니다.\n          \n          ②\n          회원이 제13조의 규정을 위반한 경우 회사는 일방적으로 본 계약을 해지할 수 있고, 이로 인하여 서비스 운영에 손해가 발생한 경우 이에 대한 민, 형사상 책임도 물을 수 있습니다.\n          \n          ③\n          회원이 서비스를 이용하는 도중, 연속하여 일(1)년 동안 서비스를 이용하기 위해 회사의 서비스에 log-in한 기록이 없는 경우 회사는 회원의 회원자격을 상실시킬 수 있습니다.\n          \n          ④\n          유료서비스 이용계약의 해지는 회원의 서비스 해지신청 및 회사의 승낙에 의해 성립합니다. 회사가 승낙한 시점에 해지의 효과는 발생하며 환불할 금액이 있는 경우 환불도 이루어지게 됩니다. 환불에 대해서는 제16조의 규정을 따릅니다.\n          \n          ⑤\n          각 개별 유료서비스에서 제4항의 규정과 다른 계약해지의 방법 및 효과를 개별 약관에서 규정하고 있는 경우 각 개별 유료서비스의 계약해지에 관해서는 당해 개별약관의 규정을 따릅니다.\n          \n          ⑥\n          본 이용 계약이 해지된 경우 회원의 “게시물 등” 중 메일, 블로그 등과 같이 본인 계정에 등록된 ‘게시물 등’ 일체는 삭제됩니다만 다른 회원에 의해 스크랩되어 게시되거나 공용 게시판에 등록된 ‘게시물 등’은 삭제되지 않습니다.\n          \n          제 4 장 기타\n          제 18 조 (청소년 보호)\n          회사는 모든 연령대가 자유롭게 이용할 수 있는 공간으로써 유해 정보로부터 청소년을 보호하고 청소년의 안전한 인터넷 사용을 돕기 위해 정보통신망법에서 정한 청소년보호정책을 별도로 시행하고 있으며, 구체적인 내용은 서비스 초기 화면 등에서 확인할 수 있습니다.\n          \n          제 19 조 (게시판 이용 상거래)\n          ①\n          서비스 내 게시판을 이용하여 상거래(판매 및 중개 포함)를 업으로 하는 회원(이하 \"게시판 이용 통신판매업자등 회원\")의 경우 전자상거래 등에서의 소비자보호에 관한 법률(이하 \"전자상거래법\")에 따른 통신판매업자 및 통신판매중개업자의 의무사항을 준수하여야 합니다.\n          \n          ②\n          \"게시판 이용 통신판매업자등 회원\"은 전자상거래법에서 요구하는 일정한 신원정보(동법 제13조 제1항 제1호 및 제2호)를 관련 게시판 서비스 내에서 제공하는 입력 기능을 이용하여 표시하며, 해당 신원정보를 회사에 제공해야 합니다.\n          \n          ③\n          회원과 \"게시판 이용 통신판매업자등 회원\" 사이에 상거래 관련 분쟁이 발생하는 경우 회사는 전항에 따라 확인된 \"게시판 이용 통신판매업자등 회원\"의 신원정보를 다음 각 호의 어느 하나에 해당하는 자의 요청이 있는 경우 제공할 수 있습니다.\n          \n          1. 전자상거래법 제33조에 따른 소비자피해 분쟁조정기구\n          2. 공정거래위원회\n          3. 시·도지사 또는 시장·군수·구청장\n          ④\n          \"게시판 이용 통신판매업자등 회원\"으로부터 피해를 입은 회원은 고객센터 페이지를 통하여 전항 1호에서 정한 소비자피해 분쟁조정기구에 피해구제신청을 할 수 있으며, 회사는 해당 신청을 대행하여 처리합니다.\n          \n          제 20 조 (면책)\n          ①\n          회사는 다음 각 호의 경우로 서비스를 제공할 수 없는 경우 이로 인하여 회원에게 발생한 손해에 대해서는 책임을 부담하지 않습니다.\n          \n          1. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우\n          2. 서비스 제공을 위하여 회사와 서비스 제휴계약을 체결한 제3자의 고의적인 서비스 방해가 있는 경우\n          3. 회원의 귀책사유로 서비스 이용에 장애가 있는 경우\n          4. 제1호 내지 제3호를 제외한 기타 회사의 고의∙과실이 없는 사유로 인한 경우\n          ②\n          회사는 CP가 제공하거나 회원이 작성하는 등의 방법으로 서비스에 게재된 정보, 자료, 사실의 신뢰도, 정확성 등에 대해서는 보증을 하지 않으며 이로 인해 발생한 회원의 손해에 대하여는 책임을 부담하지 아니합니다.\n          \n          제 21 조 (분쟁의 해결)\n          본 약관은 대한민국법령에 의하여 규정되고 이행되며, 서비스 이용과 관련하여 회사와 회원간에 발생한 분쟁에 대해서는 민사소송법상의 주소지를 관할하는 법원을 합의관할로 합니다.\n          \n          제 22 조 (규정의 준용)\n          본 약관에 명시되지 않은 사항에 대해서는 관련법령에 의하고, 법에 명시되지 않은 부분에 대하여는 관습에 의합니다.\n          \n          부칙\n          본 약관은 2016년 10월 7일부터 적용됩니다. 단, 본 약관의 공지 시점으로부터 적용일 전일까지 기간 동안에 가입한 신규회원에 대해서는 회원 가입시부터 본 약관이 적용됩니다.\n      </mat-card-content>\n    </mat-card>\n      <mat-card-header>\n        <mat-checkbox class=\"private_service\" [(ngModel)]=\"private\">Plather 개인정보 수집 및 이용 동의</mat-checkbox>\n      </mat-card-header>\n      <mat-card class=\"fix_box\" text-center>\n        <mat-card-content>\n            (주)문곰은 아래의 목적으로 개인정보를 수집 및 이용하며, 회원의 개인정보를 안전하게 취급하는데 최선을 다합니다.\n            1. 수집목적\n            • 이용자 식별, 원활한 의사소통, 부정이용 시 제재 및 기록 \n            • 회원제 서비스 제공, 문의사항 또는 불만 처리, 공지사항 전달 \n            • 유료 서비스 이용 시 요금 정산 \n            • 신규 서비스 개발, 이벤트 행사 시 정보 전달, 마케팅 및 광고 등에 활용 \n            • 서비스 이용 기록 및 통계 분석을 통한 서비스 개선 및 맞춤형 서비스 제공 \n            • 프라이버시 보호 측면의 서비스 환경 구축 \n            2. 수집항목\n            (필수) 아이디, 비밀번호, 이름, 연락처(휴대폰번호 또는 이메일 주소 중 1개 선택) \n            3. 보유기간\n            수집된 정보는 회원탈퇴 후 지체없이 파기됩니다. 다만 내부 방침에 의해 서비스 부정이용기록은 부정 가입 및 이용 방지를 위하여 회원 탈퇴 시점으로부터 최대 1년간 보관 후 파기하며, 관계법령에 의해 보관해야 하는 정보는 법령이 정한 기간 동안 보관한 후 파기합니다. \n            \n            서비스 제공을 위해 필요한 최소한의 개인정보이므로 동의를 해 주셔야 서비스 이용이 가능합니다. \n            더 자세한 내용에 대해서는 개인정보처리방침을 참고하시기 바랍니다.\n        </mat-card-content>\n      </mat-card>\n\n    <div class=\"row\">\n      <div class=\"col s4\"></div>\n      <div class=\"col s4\">\n    <div *ngIf=\"service && private; else buttonable\">\n      <ul>\n        <button mat-button color=\"primary\" (click)=\"nextpage()\">다음으로</button>\n      </ul>\n    </div>\n    <ng-template #buttonable>\n      <ul>\n          <button mat-stroked-button disabled>Disabled</button>\n      </ul>\n    </ng-template>\n  </div>\n  <div class=\"col s4\"></div>\n  </div>\n</mat-card>\n  </div>\n  <div class=\"col s4\"></div>\n  </div>"

/***/ }),

/***/ "./src/app/signup1/signup1.component.ts":
/*!**********************************************!*\
  !*** ./src/app/signup1/signup1.component.ts ***!
  \**********************************************/
/*! exports provided: Signup1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup1Component", function() { return Signup1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Signup1Component = /** @class */ (function () {
    function Signup1Component(router) {
        this.router = router;
        this.service = null;
        this.private = null;
    }
    Signup1Component.prototype.ngOnInit = function () {
    };
    Signup1Component.prototype.nextpage = function () {
        this.router.navigate(['signup2']);
    };
    Signup1Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup1',
            template: __webpack_require__(/*! ./signup1.component.html */ "./src/app/signup1/signup1.component.html"),
            styles: [__webpack_require__(/*! ./signup1.component.css */ "./src/app/signup1/signup1.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Signup1Component);
    return Signup1Component;
}());



/***/ }),

/***/ "./src/app/signup2/password-validation.ts":
/*!************************************************!*\
  !*** ./src/app/signup2/password-validation.ts ***!
  \************************************************/
/*! exports provided: matchOtherValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchOtherValidator", function() { return matchOtherValidator; });
var matchOtherValidator = /** @class */ (function () {
    function matchOtherValidator() {
    }
    matchOtherValidator.validate = function (signupForm) {
        var Password = signupForm.controls.Password.value;
        var Password_Confirm = signupForm.controls.Password_Confirm.value;
        if (Password_Confirm.length <= 0) {
            return null;
        }
        if (Password_Confirm !== Password) {
            console.log('correct');
            return {
                doesMatchPassword: true
            };
        }
        return null;
    };
    return matchOtherValidator;
}());



/***/ }),

/***/ "./src/app/signup2/signup2.component.css":
/*!***********************************************!*\
  !*** ./src/app/signup2/signup2.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".redcolor{\n    color:red;\n}\n"

/***/ }),

/***/ "./src/app/signup2/signup2.component.html":
/*!************************************************!*\
  !*** ./src/app/signup2/signup2.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row margin\" text-center>\n                    <div class=\"col-1\"></div>\n                    <form [formGroup]=\"signupForm\" class=\"col-10\" (ngSubmit)=\"register(signupForm.value)\" novalidate>\n                        <div class=\"form-group\">\n                            <input formControlName=\"Email\"\n                            required\n                            id=\"Email\"\n                            type=\"text\"\n                            class=\"form-control\"\n                            placeholder=\"Email\"\n                            [ngClass]=\"{ 'is-invalid': submitted && f.Email.errors }\" />\n                  <div *ngIf=\"submitted && f.Email.errors\" class=\"invalid-feedback redcolor\">\n                      <div *ngIf=\"f.Email.errors.required\">Email is required</div>\n                      <div *ngIf=\"f.Email.errors.email\">Email must be a valid email address</div>\n                  </div>\n                          </div>    \n\n                    <div class=\"form-group\">\n                                <input formControlName=\"Nickname\"\n                                id=\"Nickname\"\n                                type=\"text\"\n                                class=\"form-control\"\n                                placeholder=\"Nickname\"\n                                [ngClass]=\"{ 'is-invalid': submitted && f.Nickname.errors }\" />\n                        <div *ngIf=\"submitted && f.Nickname.errors\" class=\"invalid-feedback redcolor\">\n                            <div *ngIf=\"f.Nickname.errors.required\">Nickname is required</div>\n                            <div *ngIf=\"f.Nickname.errors.minlength\">Nickname should more than 4 lengths</div>\n                        </div>\n                              </div>\n                              <div [formGroup]=\"passwordFormGroup\">\n                              <div class=\"form-group\">\n                              <input formControlName=\"Password\"\n                              id=\"Password\"\n                              type=\"password\"\n                              class=\"form-control\"\n                              placeholder=\"Password\"\n                              [ngClass]=\"{ 'is-invalid': submitted && passwordFormGroup.controls.Password.errors }\" />\n                        <div *ngIf=\"submitted && passwordFormGroup.controls.Password.errors\" class=\"invalid-feedback redcolor\">\n                            <div *ngIf=\"passwordFormGroup.controls.Password.errors.required\">Password is required</div>\n                            <div *ngIf=\"passwordFormGroup.controls.Password.errors.minlength\">Password should more than 8 lengths</div>\n                        </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <input formControlName=\"Password_Confirm\"\n                                required\n                                id=\"Password_Confirm\"\n                                type=\"password\"\n                                class=\"form-control\"\n                                placeholder=\"Password Confirm\"\n                                [ngClass]=\"{ 'is-invalid': submitted && passwordFormGroup.errors?.doesMatchPassword }\" />\n                        <div *ngIf=\"submitted\" class=\"invalid-feedback redcolor\">\n                            <div *ngIf=\"passwordFormGroup.errors?.doesMatchPassword\">Password Confirm is not correct</div>\n                        </div>\n                    </div>\n                              </div>\n\n                                <div class=\"form-group\">\n                                    <input formControlName=\"Phone\"\n                                    required\n                                    id=\"phone\"\n                                    type=\"text\"\n                                    class=\"form-control\"\n                                    placeholder=\"Phone\"\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.Phone.errors }\" />\n                        <div *ngIf=\"submitted && f.Phone.errors\" class=\"invalid-feedback redcolor\">\n                            <div *ngIf=\"f.Phone.errors.required\">Phone is required</div>\n                        </div>\n                                  </div>\n                                <div class=\"row\">\n                                  <div class=\"col s4\"></div>\n                                  <div class=\"col s4\">\n                                      <button mat-raised-button color=\"black\">회원가입</button>\n                                  </div>\n                                  <div class=\"col s4\"></div>\n                                </div>\n\n\n                    </form>\n                    <div class=\"col-1\"></div>\n                  </div>\n"

/***/ }),

/***/ "./src/app/signup2/signup2.component.ts":
/*!**********************************************!*\
  !*** ./src/app/signup2/signup2.component.ts ***!
  \**********************************************/
/*! exports provided: Signup2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Signup2Component", function() { return Signup2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _signup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../signup.service */ "./src/app/signup.service.ts");
/* harmony import */ var _password_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./password-validation */ "./src/app/signup2/password-validation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Signup2Component = /** @class */ (function () {
    function Signup2Component(signup, fb) {
        this.signup = signup;
        this.fb = fb;
        this.submitted = false;
    }
    Signup2Component.prototype.ngOnInit = function () {
        this.passwordFormGroup = this.fb.group({
            Password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]],
            Password_Confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, {
            validator: _password_validation__WEBPACK_IMPORTED_MODULE_3__["matchOtherValidator"].validate.bind(this)
        });
        this.signupForm = this.fb.group({
            Email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            Nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]),
            passwordFormGroup: this.passwordFormGroup,
            Phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    };
    Object.defineProperty(Signup2Component.prototype, "f", {
        get: function () { return this.signupForm.controls; },
        enumerable: true,
        configurable: true
    });
    Signup2Component.prototype.ngOnDestroy = function () {
        this.signupForm;
    };
    Signup2Component.prototype.passwordmatch = function (password, password_confirm) {
        if (password != password_confirm) {
            return;
        }
    };
    Signup2Component.prototype.register = function (signuptype) {
        this.submitted = true;
        if (this.signupForm.invalid) {
            console.log(this.signupForm.value);
            return;
        }
        else {
            this.signup.register(signuptype).subscribe();
            console.log(this.signupForm.value);
            console.log('success');
            alert('회원가입이 완료됐습니다.');
        }
    };
    Signup2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'signup2',
            template: __webpack_require__(/*! ./signup2.component.html */ "./src/app/signup2/signup2.component.html"),
            styles: [__webpack_require__(/*! ./signup2.component.css */ "./src/app/signup2/signup2.component.css")]
        }),
        __metadata("design:paramtypes", [_signup_service__WEBPACK_IMPORTED_MODULE_2__["SignupService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], Signup2Component);
    return Signup2Component;
}());



/***/ }),

/***/ "./src/app/user-portfolio-modal/user-portfolio-modal.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/user-portfolio-modal/user-portfolio-modal.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  margin-top:40px;\n  margin-bottom:40px;\n}\n"

/***/ }),

/***/ "./src/app/user-portfolio-modal/user-portfolio-modal.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/user-portfolio-modal/user-portfolio-modal.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader-wrapper big active\" id=\"preloader\" style=\"position: absolute; left: 50%; top: 50%;\">\n  <div class=\"spinner-layer spinner-blue\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-red\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-yellow\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n\n  <div class=\"spinner-layer spinner-green\">\n    <div class=\"circle-clipper left\">\n      <div class=\"circle\"></div>\n    </div><div class=\"gap-patch\">\n      <div class=\"circle\"></div>\n    </div><div class=\"circle-clipper right\">\n      <div class=\"circle\"></div>\n    </div>\n  </div>\n</div>\n\n<div id=\"main-content\" style=\"display: none;\">\n  <img src=\"/assets/images/close_button.png\" id=\"close-button\" (click)=\"closeDialog()\" [ngStyle]=\"{'position':'fixed', 'top':'20px', 'left': this.screenWidth * 0.95 - 50 + 'px','width':'30px','height':'30px', 'zIndex':'200'}\">\n  <img src=\"/assets/images/right_arrow.png\" id=\"right-button\" (click)=\"clickRightButton()\" [ngStyle]=\"{'position':'fixed', 'top':'50%', 'left': this.screenWidth * 0.95 - 50 + 'px','width':'50px','height':'50px', 'zIndex':'200'}\">\n  <img src=\"/assets/images/left_arrow.png\" id=\"left-button\" (click)=\"clickLeftButton()\" [ngStyle]=\"{'position':'fixed', 'top':'50%', 'left': 230 + this.screenWidth * 0.05 + 'px','width':'50px','height':'50px', 'zIndex':'200'}\">\n\n  <mat-sidenav mode=\"side\" opened style=\"width: 230px; left: 0px; top: 0px;\" class=\"fixedclass\">\n    <mat-accordion>\n      <mat-expansion-panel [ngStyle]=\"{'background-color': '#efefef'}\" expanded>\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{ this.portfolio.portfolio[this.portfolioInd].supertag }}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div class=\"row\" *ngFor=\"let tag of this.portfolio.tags; let i=index\">\n          <mat-checkbox id=\"filter_{{ i }}\" [checked]=\"true\">{{ tag }}</mat-checkbox>\n        </div>\n        <!-- (change)=\"onFilterChange($event)\" -->\n      </mat-expansion-panel>\n      <mat-expansion-panel [ngStyle]=\"{'background-color': '#efefef'}\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            다른 메뉴\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <p>기타 메뉴</p>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-sidenav>\n  <div class=\"row\" style=\"margin: 0px 0px 0px 230px;\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-10\">\n      <div class=\"container\" style=\"text-align: center;\">\n\n        <h1>{{ this.portfolio.portfolio[this.portfolioInd].supertag }}</h1>\n        <div class=\"portfolio-specific\">\n          <br>\n          <p style=\"float: left;\" id=\"portfolio-content-title\">작성자 : {{ this.portfolio.portfolio[this.portfolioInd].user }}</p><br><br>\n          <span style=\"float:left;\" class=\"portfolio-content-tag\" *ngFor=\"let tag of portfolio.portfolio[this.portfolioInd].tag\">#{{ tag }} </span><br>\n          <img src=\"{{ this.portfolio.portfolio[this.portfolioInd].images[1] }}\" align=\"middle\" />\n          <p id=\"portfolio-content\" style=\"margin-bottom: 2rem;white-space:pre-wrap;\">{{this.portfolio.portfolio[this.portfolioInd].content}}</p>\n          <img src=\"{{ this.portfolio.portfolio[this.portfolioInd].images[2] }}\" align=\"middle\" />\n\n        </div>\n      <div>\n    </div>\n    <div class=\"col-1\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-portfolio-modal/user-portfolio-modal.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/user-portfolio-modal/user-portfolio-modal.component.ts ***!
  \************************************************************************/
/*! exports provided: UserPortfolioModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPortfolioModalComponent", function() { return UserPortfolioModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserPortfolioModalComponent = /** @class */ (function () {
    function UserPortfolioModalComponent(portfolio, tags, currentPortfolioInd, dialogRef, elementRef) {
        this.portfolio = portfolio;
        this.tags = tags;
        this.currentPortfolioInd = currentPortfolioInd;
        this.dialogRef = dialogRef;
        this.elementRef = elementRef;
        this.screenWidth = window.innerWidth;
        this.portfolioInd = 0;
    }
    UserPortfolioModalComponent.prototype.ngOnInit = function () {
        this.portfolioInd = this.portfolio.currentPortfolioInd;
    };
    UserPortfolioModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setInterval(function () {
            _this.elementRef.nativeElement.querySelector('#preloader').style.display = "none";
            _this.elementRef.nativeElement.querySelector('#main-content').style.display = "block";
        }, 750);
        this.elementRef.nativeElement.querySelector('.portfolio-specific').addEventListener('animationend', function () {
            this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.remove('animated');
            this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.remove('fadeInRight');
            this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.remove('fadeInLeft');
        }.bind(this));
    };
    UserPortfolioModalComponent.prototype.closeDialog = function () {
        this.dialogRef.close('Portfolio closed');
    };
    UserPortfolioModalComponent.prototype.clickRightButton = function () {
        this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('animated');
        this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('fadeInRight');
        if (this.portfolioInd == this.portfolio.portfolio.length - 1) {
            this.portfolioInd = 0;
        }
        else {
            this.portfolioInd++;
        }
    };
    UserPortfolioModalComponent.prototype.clickLeftButton = function () {
        this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('animated');
        this.elementRef.nativeElement.querySelector('.portfolio-specific').classList.add('fadeInLeft');
        if (this.portfolioInd == 0) {
            this.portfolioInd = this.portfolio.portfolio.length - 1;
        }
        else {
            this.portfolioInd--;
        }
    };
    UserPortfolioModalComponent.prototype.changePosition = function () {
        this.dialogRef.updatePosition({ top: '50px', left: '50px' });
    };
    UserPortfolioModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-portfolio-modal',
            template: __webpack_require__(/*! ./user-portfolio-modal.component.html */ "./src/app/user-portfolio-modal/user-portfolio-modal.component.html"),
            styles: [__webpack_require__(/*! ./user-portfolio-modal.component.css */ "./src/app/user-portfolio-modal/user-portfolio-modal.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object, Object, Number, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UserPortfolioModalComponent);
    return UserPortfolioModalComponent;
}());



/***/ }),

/***/ "./src/app/user-portfolio/user-portfolio.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-portfolio/user-portfolio.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\n  max-height: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"

/***/ }),

/***/ "./src/app/user-portfolio/user-portfolio.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-portfolio/user-portfolio.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 20px; text-align:center;\">\n  <h1>Portfolios</h1>\n  <div class=\"portfolio-cell\" *ngFor=\"let row of this.getRow(this.portfolios); let rowIndex = index \">\n    <div class=\"row\">\n      <div class=\"col s3 m3 l3\" style=\"text-align: center;\" *ngFor=\"let col of getArray(4); let colIndex = index\" (click)=\"showPortfolio(rowIndex*4 + colIndex)\">\n        <div class=\"cell-content\" *ngIf=\"colIndex < this.getCol(rowIndex, this.portfolios).length\">\n          <mat-card class=\"example-card hoverable\" [ngStyle]=\"{'padding-bottom':'0px'}\">\n            <mat-card-header>\n              <div mat-card-avatar class=\"example-header-image\"></div>\n              <mat-card-title>{{ this.getKey(this.portfolios)[rowIndex*4 + colIndex] }}</mat-card-title>\n              <mat-card-subtitle>{{ this.portfolios[this.getKey(this.portfolios)[rowIndex*4 + colIndex]][0].user }}</mat-card-subtitle>\n            </mat-card-header>\n            <img mat-card-image src=\"{{ images[(rowIndex*2+colIndex*7)%(images.length)] }}\" alt=\"Photo\">\n            <!-- <img mat-card-image src=\"http://via.placeholder.com/200x200\" alt=\"Photo\"> -->\n            <!-- <mat-card-content>\n              <p>\n                {{ this.getKey(this.portfolios)[rowIndex*4 + colIndex] }}\n              </p>\n            </mat-card-content> -->\n            <!-- <mat-card-actions>\n              <button mat-button>LIKE</button>\n              <button mat-button>SHARE</button>\n            </mat-card-actions> -->\n          </mat-card>\n          <!-- <img class=\"portfolio-img\" style=\"width: 100%;\" src=\"http://via.placeholder.com/200x200\"/>\n          <p>{{ this.getKey(this.portfolios)[rowIndex*4 + colIndex] }}</p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-portfolio/user-portfolio.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-portfolio/user-portfolio.component.ts ***!
  \************************************************************/
/*! exports provided: UserPortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPortfolioComponent", function() { return UserPortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-portfolio-modal/user-portfolio-modal.component */ "./src/app/user-portfolio-modal/user-portfolio-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserPortfolioComponent = /** @class */ (function () {
    function UserPortfolioComponent(dialog, elementRef) {
        this.dialog = dialog;
        this.elementRef = elementRef;
        /*
          이 곳에서는 태그이름, 슈퍼태그 (포트폴리오 index 페이지에 필요한 성분들) 만 로드할 예정이다.
          이미지, 글들과 같이 구체적인 contents들은 portfolio show 페이지에서 보여져야 한다.
          (여기에서는 로드되지 않을 예정)
        */
        this.tagName = ["테니스", "수영", "요가", "메이크업", "디자인", "퀼트", "회화", "소믈리에", "발레", "채식주의자", "서브웨이", "문곰과 귤", "인문역량강화사업", "그래픽 디자인"];
        this.superTagName = ['스포츠', '프로그래밍', '볼빨간사춘기', '디자인', '추석', 'Swift', '레이나'];
        this.content = ['모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 대한민국의 국민이 되는 요건은 법률로 정한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.\n\
  국회는 국가의 예산안을 심의·확정한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.\
  형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.\n\
  모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.', '국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다.\
  대한민국은 민주공화국이다. 형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서 진술할 수 있다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다.\n\
  국무총리는 국회의 동의를 얻어 대통령이 임명한다. 국가원로자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 모든 국민은 거주·이전의 자유를 가진다.\
  대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 국회는 국가의 예산안을 심의·확정한다. 국가는 청원에 대하여 심사할 의무를 진다. 모든 국민은 직업선택의 자유를 가진다. 국회는 의장 1인과 부의장 2인을 선출한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.', '근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.\n\
  제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 대한민국은 민주공화국이다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.\n\
  국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다. 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.\n\
  국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.'];
        this.images = ['https://mir-s3-cdn-cf.behance.net/projects/404/97f0cd70467197.Y3JvcCw4ODEsNjg5LDAsMg.png', 'https://mir-s3-cdn-cf.behance.net/projects/404/b6381169862963.Y3JvcCwxMDI1LDgwMSwxMDksNjA.jpg', 'https://mir-s3-cdn-cf.behance.net/projects/404/686b2870702065.Y3JvcCw4MjgsNjQ3LDIwNSw2NDU.png', 'https://mir-s3-cdn-cf.behance.net/projects/404/b02d6870489325.Y3JvcCwyNTU4LDIwMDEsMjIxLDA.jpg',
            'https://mir-s3-cdn-cf.behance.net/projects/404/a5952770249167.Y3JvcCw4MTksNjQwLDQwLDE0.jpg',
            'https://mir-s3-cdn-cf.behance.net/projects/404/0fd4d569586409.Y3JvcCwxOTk5LDE1NjQsMCww.png'];
        this.userName = ['김희재'];
        this.activities = [];
        this.portfolios = {};
    }
    UserPortfolioComponent.prototype.getRow = function (portfolios) {
        var row = Math.floor(Object.keys(this.portfolios).length / 4);
        return new Array(row + 1);
    };
    UserPortfolioComponent.prototype.getCol = function (row, portfolios) {
        var totalNum = Object.keys(this.portfolios).length;
        var cellNum = totalNum - row * 4;
        if (cellNum >= 4) {
            return new Array(4);
        }
        else {
            return new Array(cellNum);
        }
    };
    UserPortfolioComponent.prototype.getArray = function (n) {
        return new Array(n);
    };
    UserPortfolioComponent.prototype.getKey = function (portfolios) {
        return Object.keys(portfolios);
    };
    UserPortfolioComponent.prototype.showPortfolio = function (index) {
        var portfolio = this.portfolios[this.getKey(this.portfolios)[index]];
        console.log(portfolio);
        var tagSet = new Set();
        for (var i = 0; i < portfolio.length; i++) {
            for (var j = 0; j < portfolio[i].tag.length; j++) {
                tagSet.add(portfolio[i].tag[j]);
            }
        }
        this.openPortfolio(portfolio, Array.from(tagSet));
    };
    // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
    UserPortfolioComponent.prototype.openPortfolio = function (portfolio, tags) {
        history.pushState(null, null, '/user-portfolio/user_id');
        var dialogRef = this.dialog.open(_user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_2__["UserPortfolioModalComponent"], {
            // width: '1000px',
            // height: '800px',
            width: '100%',
            height: '100%',
            maxWidth: '2000px',
            data: { portfolio: portfolio, tags: tags, currentPortfolioInd: 0 }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('ShowSpecificActivitiesComponent Modal was closed');
            history.pushState(null, null, '/user-portfolio');
        });
    };
    UserPortfolioComponent.prototype.ngOnInit = function () {
        // Dummy 활동 데이터 생성
        for (var i = 0; i < 25; i++) {
            var tempActivity = {
                supertag: this.superTagName[Math.floor(Math.random() * this.superTagName.length)],
                tag: [
                    this.tagName[Math.floor(Math.random() * this.tagName.length)], this.tagName[Math.floor(Math.random() * this.tagName.length)], this.tagName[Math.floor(Math.random() * this.tagName.length)]
                ],
                user: this.userName[Math.floor(Math.random() * this.userName.length)],
                content: this.content[Math.floor(Math.random() * this.content.length)],
                images: [
                    this.images[Math.floor(Math.random() * this.images.length)],
                    this.images[Math.floor(Math.random() * this.images.length)],
                    this.images[Math.floor(Math.random() * this.images.length)]
                ]
            };
            this.activities.push(tempActivity);
        }
        for (var i = 0; i < this.activities.length; i++) {
            if (i == 0) {
                this.portfolios[this.activities[i].supertag] = [];
                this.portfolios[this.activities[i].supertag].push(this.activities[i]);
            }
            else {
                var alreadyExists = false;
                for (var supertag in this.portfolios) {
                    if (supertag == this.activities[i].supertag) {
                        alreadyExists = true;
                        this.portfolios[this.activities[i].supertag].push(this.activities[i]);
                    }
                }
                if (!alreadyExists) {
                    this.portfolios[this.activities[i].supertag] = [];
                    this.portfolios[this.activities[i].supertag].push(this.activities[i]);
                }
            }
        }
        console.log(this.portfolios);
    };
    UserPortfolioComponent.prototype.ngAfterViewInit = function () {
    };
    UserPortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-portfolio',
            template: __webpack_require__(/*! ./user-portfolio.component.html */ "./src/app/user-portfolio/user-portfolio.component.html"),
            styles: [__webpack_require__(/*! ./user-portfolio.component.css */ "./src/app/user-portfolio/user-portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], UserPortfolioComponent);
    return UserPortfolioComponent;
}());



/***/ }),

/***/ "./src/app/usertimeline-specific/usertimeline-specific.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/usertimeline-specific/usertimeline-specific.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-row{\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n\n.mat-card{\n  height: 320px;\n  overflow-y: scroll;\n}\n"

/***/ }),

/***/ "./src/app/usertimeline-specific/usertimeline-specific.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/usertimeline-specific/usertimeline-specific.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\" background-color: #D6D6D6; margin-top: 100px;\">\n  <div class=\"row\" style=\"padding-top: 20px;\">\n    <div class=\"col s2 m2 l2\"></div>\n    <div class=\"col s4 m4 l4\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>자기 소개</mat-card-title>\n          <mat-card-subtitle>고양이</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n        <mat-card-content>\n          <p>\n            개에 대해 할 말은 많지만 일단 급한 불부터 끄자. 피타고라스를 공포로 몰아넣은 저 개부터 쫓아 버려야겠어. 체격에서 불리하니까 효과적인 전략으로 대응하는 수밖에\n          </p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div class=\"col s4 m4 l4\">\n      <mat-card class=\"example-card\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>경력 기술</mat-card-title>\n          <mat-card-subtitle>강아지 사료</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <p>- 고양이</p>\n          <p>- 베르나르 베르베르</p>\n          <p>- 피타고라스가 <웃음>이라고 했던 바로 그 소리</p>\n          <p>- 집사는 평소보다 더 신경이 곤두서 있다.</p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-button>LIKE</button>\n          <button mat-button>SHARE</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    <div class=\"col s2 m2 l2\"></div>\n  </div>\n  <!-- <div class=\"row\">\n    <div class=\"col s2 m2 l2\"></div>\n    <div class=\"col s8 m8 l8\">\n      <mat-card>Simple card3</mat-card>\n    </div>\n    <div class=\"col s2 m2 l2\"></div>\n  </div> -->\n  <div class=\"button-row\">\n    <button mat-fab (click)=\"openDialog()\" color=\"black\" style=\"float: right; margin: 60px; font-size: 20px;\">+</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/usertimeline-specific/usertimeline-specific.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/usertimeline-specific/usertimeline-specific.component.ts ***!
  \**************************************************************************/
/*! exports provided: UsertimelineSpecificComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsertimelineSpecificComponent", function() { return UsertimelineSpecificComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _activity_post_activity_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../activity-post/activity-post.component */ "./src/app/activity-post/activity-post.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsertimelineSpecificComponent = /** @class */ (function () {
    function UsertimelineSpecificComponent(dialog) {
        this.dialog = dialog;
    }
    UsertimelineSpecificComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_activity_post_activity_post_component__WEBPACK_IMPORTED_MODULE_2__["ActivityPostComponent"], {
            width: '100%',
            height: '100%',
            maxWidth: '2000px'
            // data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    UsertimelineSpecificComponent.prototype.ngOnInit = function () {
    };
    UsertimelineSpecificComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'usertimeline-specific',
            template: __webpack_require__(/*! ./usertimeline-specific.component.html */ "./src/app/usertimeline-specific/usertimeline-specific.component.html"),
            styles: [__webpack_require__(/*! ./usertimeline-specific.component.css */ "./src/app/usertimeline-specific/usertimeline-specific.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UsertimelineSpecificComponent);
    return UsertimelineSpecificComponent;
}());



/***/ }),

/***/ "./src/app/usertimeline/usertimeline.component.css":
/*!*********************************************************!*\
  !*** ./src/app/usertimeline/usertimeline.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-bubble-arrow-border {\n  border-color: rgba(0, 0, 0, 0.2) transparent transparent transparent !important;\n  border-style: solid;\n  border-width: 20px;\n  height: 0;\n  width: 0;\n  position: absolute;\n  bottom: -42px;\n  left: 0px;\n}\n.card-bubble-arrow {\n    border-color: #ffffff transparent transparent transparent !important;\n    border-style: solid;\n    border-width: 20px;\n    height: 0;\n    width: 0;\n    position: absolute;\n    bottom: -39px;\n    left: 0px;\n\n}\n.horizontalLine{\n  position: absolute;\n  width:90%;\n  left: 5%;\n  height:2px;\n  background: #727272;\n  margin-top:100px;\n}\n.black-background{\n  position: fixed;\n  /* background-color: rgba(0,0,0,0.3); */\n  z-index: 3;\n  width:3000px;\n  height: 3000px;\n  top: -1000px;\n  left: -1000px;\n  display: none;\n  pointer-events: none;\n}\n#startDatePointer{\n  position: absolute;\n}\n.left-triangle{\n  width:20px;\n  margin-right: 30px;\n}\n.right-triangle{\n  width: 20px;\n  margin-left: 30px;\n}\n.activities{\n  position: absolute;\n}\ndiv.user-profile{\n  text-align: center;\n}\nspan#current-date{\n  color: #727272;\n  font-size: 30px;\n}\nspan#period-select{\n  color: #727272;\n  font-size: 15px;\n}\n.user-profile .user-profile-name{\n  color: #727272;\n  font-size: 30px;\n}\n.user-profile .user-profile-org{\n  color: #727272;\n  font-size: 20px;\n}\n"

/***/ }),

/***/ "./src/app/usertimeline/usertimeline.component.html":
/*!**********************************************************!*\
  !*** ./src/app/usertimeline/usertimeline.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"black-background\"></div>\n<div class=\"row\" style=\"margin-top: 100px;\">\n  <div class= \"col-4\"></div>\n  <div class= \"col-4 user-profile\">\n    <!-- For Django -->\n    <!-- <img class=\"img-responsive\" src=\"static/ang/assets/images/user_profile_default.png\"> -->\n    <!-- For Angular -->\n    <img class=\"img-responsive\" src=\"/assets/images/sample_profile_picture.png\" style=\"height: 200px; width: 200px;\">\n    <br><br><span class=\"user-profile-name\">김희재</span><br>\n    <span class=\"user-profile-org\">Sogang Univ</span><br>\n  </div>\n  <div class= \"col-4\"></div>\n</div>\n<div class=\"row\">\n  <div class= \"col-4\"></div>\n  <div class= \"col-4 user-profile\">\n    <!-- For Django -->\n    <!-- <img class=\"img-responsive\" class=\"left-triangle\" id=\"left-triangle-move\" src=\"static/ang/assets/images/left_triangle_btn.png\"> -->\n    <!-- For Angular  -->\n    <img class=\"img-responsive\" class=\"left-triangle\" id=\"left-triangle-move\" src=\"/assets/images/left_triangle_btn.png\">\n    <span id=\"current-date\"></span>\n    <!-- For Django -->\n    <!-- <img class=\"img-responsive\" class=\"right-triangle\" id=\"right-triangle-move\" src=\"static/ang/assets/images/right_triangle_btn.png\"> -->\n    <!-- For Angular -->\n    <img class=\"img-responsive\" class=\"right-triangle\" id=\"right-triangle-move\" src=\"/assets/images/right_triangle_btn.png\">\n  </div>\n  <div class= \"col-4\"></div>\n</div>\n<div class=\"row\">\n  <div class= \"col-4\"></div>\n  <div class= \"col-4 user-profile\">\n    <!-- For Django -->\n    <!-- <img class=\"img-responsive\" class=\"left-triangle\" id=\"left-triangle-select\" src=\"static/ang/assets/images/left_triangle_btn.png\"> -->\n    <!-- For Angular -->\n    <img class=\"img-responsive\" class=\"left-triangle\" id=\"left-triangle-select\" src=\"/assets/images/left_triangle_btn.png\">\n    <span id=\"period-select\"></span>\n    <!-- For Django -->\n    <!-- <img class=\"img-responsive\" class=\"right-triangle\" id=\"right-triangle-select\" src=\"static/ang/assets/images/right_triangle_btn.png\"> -->\n    <!-- For Angular -->\n    <img class=\"img-responsive\" class=\"right-triangle\" id=\"right-triangle-select\" src=\"/assets/images/right_triangle_btn.png\">\n  </div>\n  <div class= \"col-4\"></div>\n</div>\n<div id=\"horizontalLineDiv\" >\n  <div style=\"display: none;\">\n    <p class=\"range-field\" style=\"position:abosolute; margin-top: 0px; width: 150px;\">\n      <input type=\"range\" id=\"range-input\" min=\"0\" max=\"3\" />\n    </p>\n  </div>\n  <div id=\"mousePointerArea\" style=\"height:100px;\">\n    <div id=\"cardArea\" style=\"position: absolute;\"></div> <!-- position: absolute 중요! -->\n    <div class=\"horizontalLine\" style=\"position:absolute; height:4px;\">\n      <div id=\"dateGraduation\"></div>\n      <div class=\"row\">\n        <div id=\"activities\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/usertimeline/usertimeline.component.ts":
/*!********************************************************!*\
  !*** ./src/app/usertimeline/usertimeline.component.ts ***!
  \********************************************************/
/*! exports provided: UsertimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsertimelineComponent", function() { return UsertimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _show_specific_activities_show_specific_activities_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show-specific-activities/show-specific-activities.component */ "./src/app/show-specific-activities/show-specific-activities.component.ts");
/* harmony import */ var _user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-portfolio-modal/user-portfolio-modal.component */ "./src/app/user-portfolio-modal/user-portfolio-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsertimelineComponent = /** @class */ (function () {
    function UsertimelineComponent(elementRef, dialog) {
        this.elementRef = elementRef;
        this.dialog = dialog;
        this.initCount = 1;
        this.rangeVal = 0;
        this.graduationNumber = 2;
        this.unit = 50000;
        this.currentlyClicked = false;
        this.listImageHeight = 100;
        this.scrollTimeout = Date.now();
        this.isClicked = [];
        this.activities = [];
        this.isScreenBlack = false;
        // Drag
        this.isDragging = false;
        // dragStart;
        this.tagName = ["테니스", "수영", "요가", "메이크업", "디자인", "퀼트", "회화", "소믈리에", "발레", "채식주의자", "서브웨이", "문곰과 귤", "인문역량강화사업", "그래픽 디자인"];
        this.superTagName = ['스포츠', '프로그래밍', '취미생활'];
        this.content = ['모든 국민은 그 보호하는 자녀에게 적어도 초등교육과 법률이 정하는 교육을 받게 할 의무를 진다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안 당시의 대통령에 대하여는 효력이 없다. 대한민국의 국민이 되는 요건은 법률로 정한다. 여자의 근로는 특별한 보호를 받으며, 고용·임금 및 근로조건에 있어서 부당한 차별을 받지 아니한다.\n\
  국회는 국가의 예산안을 심의·확정한다. 누구든지 체포 또는 구속을 당한 때에는 적부의 심사를 법원에 청구할 권리를 가진다. 대통령은 법률에서 구체적으로 범위를 정하여 위임받은 사항과 법률을 집행하기 위하여 필요한 사항에 관하여 대통령령을 발할 수 있다. 공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다.\
  형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나 무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.\n\
  모든 국민은 신속한 재판을 받을 권리를 가진다. 형사피고인은 상당한 이유가 없는 한 지체없이 공개재판을 받을 권리를 가진다. 정기회의 회기는 100일을, 임시회의 회기는 30일을 초과할 수 없다. 한 회계연도를 넘어 계속하여 지출할 필요가 있을 때에는 정부는 연한을 정하여 계속비로서 국회의 의결을 얻어야 한다.', '국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 대통령은 필요하다고 인정할 때에는 외교·국방·통일 기타 국가안위에 관한 중요정책을 국민투표에 붙일 수 있다. 국가는 재해를 예방하고 그 위험으로부터 국민을 보호하기 위하여 노력하여야 한다. 헌법에 의하여 체결·공포된 조약과 일반적으로 승인된 국제법규는 국내법과 같은 효력을 가진다.\
  대한민국은 민주공화국이다. 형사피해자는 법률이 정하는 바에 의하여 당해 사건의 재판절차에서 진술할 수 있다. 전직대통령의 신분과 예우에 관하여는 법률로 정한다. 대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다.\n\
  국무총리는 국회의 동의를 얻어 대통령이 임명한다. 국가원로자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 국가는 노인과 청소년의 복지향상을 위한 정책을 실시할 의무를 진다. 이 헌법시행 당시의 법령과 조약은 이 헌법에 위배되지 아니하는 한 그 효력을 지속한다. 모든 국민은 거주·이전의 자유를 가진다.\
  대통령은 법률이 정하는 바에 의하여 사면·감형 또는 복권을 명할 수 있다. 국회는 국가의 예산안을 심의·확정한다. 국가는 청원에 대하여 심사할 의무를 진다. 모든 국민은 직업선택의 자유를 가진다. 국회는 의장 1인과 부의장 2인을 선출한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을 촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.', '근로자는 근로조건의 향상을 위하여 자주적인 단결권·단체교섭권 및 단체행동권을 가진다. 공무원은 국민전체에 대한 봉사자이며, 국민에 대하여 책임을 진다. 국회는 정부의 동의없이 정부가 제출한 지출예산 각항의 금액을 증가하거나 새 비목을 설치할 수 없다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다.\n\
  제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 대한민국은 민주공화국이다. 국가안전보장회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.\n\
  국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다. 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다.\n\
  국민경제자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다. 대통령은 국무총리·국무위원·행정각부의 장 기타 법률이 정하는 공사의 직을 겸할 수 없다. 이 헌법은 1988년 2월 25일부터 시행한다. 다만, 이 헌법을 시행하기 위하여 필요한 법률의 제정·개정과 이 헌법에 의한 대통령 및 국회의원의 선거 기타 이 헌법시행에 관한 준비는 이 헌법시행 전에 할 수 있다.'];
        this.images = ['https://mir-s3-cdn-cf.behance.net/projects/404/97f0cd70467197.Y3JvcCw4ODEsNjg5LDAsMg.png', 'https://mir-s3-cdn-cf.behance.net/projects/404/b6381169862963.Y3JvcCwxMDI1LDgwMSwxMDksNjA.jpg', 'https://mir-s3-cdn-cf.behance.net/projects/404/686b2870702065.Y3JvcCw4MjgsNjQ3LDIwNSw2NDU.png', 'https://mir-s3-cdn-cf.behance.net/projects/404/b02d6870489325.Y3JvcCwyNTU4LDIwMDEsMjIxLDA.jpg',
            'https://mir-s3-cdn-cf.behance.net/projects/404/a5952770249167.Y3JvcCw4MTksNjQwLDQwLDE0.jpg',
            'https://mir-s3-cdn-cf.behance.net/projects/404/0fd4d569586409.Y3JvcCwxOTk5LDE1NjQsMCww.png'];
        this.userName = ['김희재'];
    }
    UsertimelineComponent.prototype.ngOnInit = function () {
        this.startDate = new Date(new Date().getFullYear() - 3, 0, 1);
        this.endDate = new Date(new Date().getFullYear() + 1, 0, 1);
        this.totalDate = this.endDate - this.startDate;
    };
    UsertimelineComponent.prototype.ngAfterViewInit = function () {
        this.horizontalLineOffsetLeft = this.elementRef.nativeElement.querySelector('.horizontalLine').offsetLeft;
        this.horizontalLineOffsetTop = this.elementRef.nativeElement.querySelector('.horizontalLine').offsetTop;
        // Dummy Data 생성
        for (var i = 0; i < 15; i++) {
            var tempActivity = {
                supertag: this.superTagName[Math.floor(Math.random() * this.superTagName.length)],
                // tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],
                date: this.randomDate(new Date(2015, 1, 1), new Date(2025, 1, 1)),
                filter: true,
                tag: [
                    this.tagName[Math.floor(Math.random() * this.tagName.length)], this.tagName[Math.floor(Math.random() * this.tagName.length)], this.tagName[Math.floor(Math.random() * this.tagName.length)]
                ],
                user: this.userName[Math.floor(Math.random() * this.userName.length)],
                content: this.content[Math.floor(Math.random() * this.content.length)],
                images: [
                    this.images[Math.floor(Math.random() * this.images.length)],
                    this.images[Math.floor(Math.random() * this.images.length)],
                    this.images[Math.floor(Math.random() * this.images.length)]
                ]
            };
            this.activities.push(tempActivity);
        }
        for (var i = 0; i < 3; i++) {
            var tempActivity = {
                supertag: this.superTagName[Math.floor(Math.random() * this.superTagName.length)],
                // tag: '#' + this.tagName[Math.floor(Math.random()*this.tagName.length)],
                date: this.randomDate(new Date(new Date().setDate(((new Date().getDate() - 42)))), new Date()),
                filter: true,
                tag: [
                    this.tagName[Math.floor(Math.random() * this.tagName.length)], this.tagName[Math.floor(Math.random() * this.tagName.length)], this.tagName[Math.floor(Math.random() * this.tagName.length)]
                ],
                user: this.userName[Math.floor(Math.random() * this.userName.length)],
                content: this.content[Math.floor(Math.random() * this.content.length)],
                images: [
                    this.images[Math.floor(Math.random() * this.images.length)],
                    this.images[Math.floor(Math.random() * this.images.length)],
                    this.images[Math.floor(Math.random() * this.images.length)]
                ]
            };
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
        this.horizontalLine.style.width = (window.innerWidth - document.querySelectorAll('.mat-sidenav')[0].offsetWidth) * 0.9 + "px";
        this.cardMargin = this.horizontalLine.offsetTop;
        this.filterByRange();
        this.elementRef.nativeElement.querySelector('#current-date').innerText = this.startDate.getFullYear();
        this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Years";
        document.querySelectorAll('.fixedclass')[0].style.top = document.querySelectorAll('.navbar')[0].offsetHeight + 13 + "px";
    };
    // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
    UsertimelineComponent.prototype.openDialog = function (params) {
        var dialogRef = this.dialog.open(_show_specific_activities_show_specific_activities_component__WEBPACK_IMPORTED_MODULE_2__["ShowSpecificActivitiesComponent"], {
            width: '1000px',
            height: '800px',
            data: { activities: params }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('ShowSpecificActivitiesComponent Modal was closed');
        });
    };
    UsertimelineComponent.prototype.randomDate = function (start, end) {
        // 랜덤 샘플 데이터들을 생성해준다.
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
    UsertimelineComponent.prototype.pointDate = function (activities) {
        var activityPointer = this.elementRef.nativeElement.querySelector('#activities');
        activityPointer.innerHTML = "";
        for (var i = 0; i < activities.length; i++) {
            // 활동들을 선 위에 표시해 준다.
            if (activities[i].filter == true) {
                var newActivity = '<div id="activity_' + i + '" style="position:absolute; visibility:hidden;"><div style="height:15px; width:15px; background-color: orange; border-radius: 25px; visibility: hidden;"></div>';
                newActivity += '<div style= "color:orange; margin-top:10px; visibility: hidden;"><p>' + activities[i].tag + '</p><p>' + activities[i].date.getFullYear() + '<br>' + (activities[i].date.getMonth() + 1) + " " + activities[i].date.getDate() + "일";
                +'</p></div></div>';
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
    };
    UsertimelineComponent.prototype.clickLeftTriangleMove = function (e) {
        /*
         *  왼쪽 버튼이 눌리면, 한 단계 전 기간으로 탐색하는
         *  함수이다.
         */
        if (this.rangeVal == 0) {
            // 4 years
            this.startDate = new Date(this.startDate.getFullYear() - 4, 0, 1);
            this.endDate = new Date(this.startDate.getFullYear() + 4, 0, 1);
        }
        else if (this.rangeVal == 1) {
            // 1 years
            this.startDate = new Date(this.startDate.getFullYear() - 1, 0, 1);
            this.endDate = new Date(this.startDate.getFullYear() + 1, 0, 1);
        }
        else if (this.rangeVal == 2) {
            // 4 months
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() - 4, 1);
            this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 4, 1);
        }
        else if (this.rangeVal == 3) {
            // 1 month
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() - 30);
            this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 30);
        }
        this.totalDate = this.endDate - this.startDate;
        this.elementRef.nativeElement.querySelector('#current-date').innerText = this.startDate.getFullYear();
        this.pointDate(this.activities);
        this.isActivitiesIn();
        this.markDateGraduation();
        this.markCard();
        this.addActivityToCard(this.activities);
        this.howManyActivities();
    };
    UsertimelineComponent.prototype.clickRightTriangleMove = function (e) {
        /*
         *  오른쪽 버튼이 눌리면, 한 단계 다음 기간으로 탐색하는
         *  함수이다.
         */
        if (this.rangeVal == 0) {
            // 4 years
            this.startDate = new Date(this.startDate.getFullYear() + 4, 0, 1);
            this.endDate = new Date(this.startDate.getFullYear() + 4, 0, 1);
        }
        else if (this.rangeVal == 1) {
            // 1 years
            this.startDate = new Date(this.startDate.getFullYear() + 1, 0, 1);
            this.endDate = new Date(this.startDate.getFullYear() + 1, 0, 1);
        }
        else if (this.rangeVal == 2) {
            // 4 months
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 4, 1);
            this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth() + 4, 1);
        }
        else if (this.rangeVal == 3) {
            // 1 month
            this.startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 30);
            this.endDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate() + 30);
        }
        this.totalDate = this.endDate - this.startDate;
        this.elementRef.nativeElement.querySelector('#current-date').innerText = this.startDate.getFullYear();
        this.pointDate(this.activities);
        this.isActivitiesIn();
        this.markDateGraduation();
        this.markCard();
        this.addActivityToCard(this.activities);
        this.howManyActivities();
    };
    UsertimelineComponent.prototype.clickLeftTriangleSelect = function (e) {
        // 왼쪽 버튼이 눌리면, rangeVal 을 하나 낮춘다. (탐색 기간을 하나 낮춘다)
        this.rangeVal = parseInt(this.elementRef.nativeElement.querySelector('#range-input').value);
        if (this.rangeVal > 0) {
            this.elementRef.nativeElement.querySelector('#range-input').value = this.rangeVal - 1;
            this.rangeVal = this.rangeVal - 1;
        }
        else {
            return;
        }
        if (this.rangeVal == 0) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Years";
        }
        else if (this.rangeVal == 1) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "Whole Year";
        }
        else if (this.rangeVal == 2) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Months";
        }
        else if (this.rangeVal == 3) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "One Month";
        }
    };
    UsertimelineComponent.prototype.clickRightTriangleSelect = function (e) {
        // 왼쪽 버튼이 눌리면, rangeVal 을 하나 낮춘다. (탐색 기간을 하나 낮춘다)
        this.rangeVal = parseInt(this.elementRef.nativeElement.querySelector('#range-input').value);
        if (this.rangeVal < 3) {
            this.elementRef.nativeElement.querySelector('#range-input').value = this.rangeVal + 1;
            this.rangeVal = this.rangeVal + 1;
        }
        else {
            return;
        }
        if (this.rangeVal == 0) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Years";
        }
        else if (this.rangeVal == 1) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "Whole Year";
        }
        else if (this.rangeVal == 2) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "Four Months";
        }
        else if (this.rangeVal == 3) {
            this.elementRef.nativeElement.querySelector('#period-select').innerText = "One Month";
        }
    };
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
    UsertimelineComponent.prototype.isActivitiesIn = function () {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].filter == true) {
                var checkActivityPointer = this.elementRef.nativeElement.querySelector('#activity_' + i);
                var activityPointer_l = parseFloat(checkActivityPointer.style.left.replace("px", ""));
                // 수평선 밖으로 나가면 html 을 보이지 않게 설정한다.
                if (activityPointer_l < 0 || activityPointer_l > this.horizontalLine.offsetWidth) {
                    checkActivityPointer.style.visibility = "hidden";
                }
                else {
                    checkActivityPointer.style.visibility = "visible";
                }
            }
        }
    };
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
    UsertimelineComponent.prototype.filterByRange = function () {
        /*
         *  기간 단위 별로, 해당하는 startDate, endDate 를 설정하는 함수이다.
         *  0: 1년 단위 -> 6년 전 ~ 오늘
         *  1: 3개월 단위 -> 18개월 전 ~ 오늘
         *  2: 1개월 단위 -> 6개월 전 ~ 오늘
         *  3: 1주일 단위 -> 한달 전 ~ 오늘
         */
        this.horizontalLine = this.elementRef.nativeElement.querySelector('.horizontalLine');
        var val = this.elementRef.nativeElement.querySelector('#range-input').value;
        if (val == 0) {
            // 5 years
            this.endDate = new Date(new Date().getFullYear() + 1, 0, 1);
            this.startDate = new Date(this.endDate.getFullYear() - 4, 0, 1);
        }
        else if (val == 1) {
            this.endDate = new Date(new Date().getFullYear() + 1, 0, 1);
            this.startDate = new Date(this.endDate.getFullYear() - 1, 0, 1);
            // 3개월 단위 기준으로 변경 -> 18개월 전 ~ endDate까지가 범위가 된다.
            // startDate => endDate 에서 눈금의 수 * 3만큼 빼 주면 된다.
            // this.startDate.setMonth(this.endDate.getMonth() - this.graduationNumber * 3);
        }
        else if (val == 2) {
            this.endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
            this.startDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth() - 4, 1);
        }
        else if (val == 3) {
            this.endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1);
            this.startDate = new Date(this.endDate.getFullYear(), new Date().getMonth(), 1);
        }
        this.totalDate = this.endDate - this.startDate;
        this.pointDate(this.activities);
        this.isActivitiesIn();
        this.markDateGraduation();
        this.markCard();
        this.addActivityToCard(this.activities);
        this.howManyActivities();
    };
    UsertimelineComponent.prototype.markDateGraduation = function () {
        // 수평선 위에 눈금을 표시해 주는 함수
        var dateGraduation = document.getElementById('dateGraduation');
        var dateGraduationMarker = new Date(this.startDate);
        var html = '';
        var dateGraduationLeft;
        var dateGraduationDate;
        var rangeVal = this.elementRef.nativeElement.querySelector('#range-input').value;
        // 첫번째 원 표시
        html += '\
    <p class="animated fadeInRightBig  dateGraduation_p" style="position:absolute; bottom:15px;left: 0px">' + this.startDate.getFullYear() + ' / ' + (this.startDate.getMonth() + 1) + '</p><div class="animated zoomInRight dateGraduation hoverable" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; top: -14px; border: 1px solid #727272 ; left:"0px" data-graduation-date = "' + (this.startDate - 0) + '" ></div>';
        dateGraduation.innerHTML = html;
        while (dateGraduationMarker < this.endDate) {
            // 4 years
            if (rangeVal == 0) {
                if (new Date(dateGraduationMarker.getFullYear() + 1, 0, 1) < this.endDate) {
                    dateGraduationMarker = new Date(dateGraduationMarker.getFullYear() + 1, 0, 1);
                }
                else {
                    break;
                }
            }
            else if (rangeVal == 1) {
                if (new Date(dateGraduationMarker.getFullYear(), dateGraduationMarker.getMonth() + 3, 1) < this.endDate) {
                    dateGraduationMarker.setMonth(dateGraduationMarker.getMonth() + 3);
                }
                else {
                    break;
                }
            }
            else if (rangeVal == 2) {
                if (new Date(dateGraduationMarker.getFullYear(), dateGraduationMarker.getMonth() + 1, 0) < this.endDate) {
                    dateGraduationMarker.setMonth(dateGraduationMarker.getMonth() + 1);
                }
                else {
                    break;
                }
            }
            else if (rangeVal == 3) {
                if (new Date(dateGraduationMarker.getFullYear(), dateGraduationMarker.getMonth(), dateGraduationMarker.getDate() + 7) < this.endDate) {
                    dateGraduationMarker.setDate(dateGraduationMarker.getDate() + 7);
                }
                else {
                    break;
                }
            }
            if (dateGraduationMarker < this.endDate) {
                dateGraduationDate = new Date(dateGraduationMarker);
                dateGraduationLeft = this.horizontalLine.offsetWidth * (Date.parse(dateGraduationMarker + "") - Date.parse(this.startDate + "")) / this.totalDate + "";
                html += '\
        <p class="animated fadeInRightBig  dateGraduation_p" style="position:absolute; bottom:15px;left:' + dateGraduationLeft + 'px">' + dateGraduationDate.getFullYear() + ' / ' + (dateGraduationDate.getMonth() + 1) + '</p><div class="animated zoomInRight dateGraduation hoverable" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; border: 1px solid #727272 ; top: -14px; left:' + dateGraduationLeft + 'px" data-graduation-date = "' + (dateGraduationDate - 0) + '" ></div>';
            }
        }
        dateGraduationLeft = this.horizontalLine.offsetWidth;
        // 마지막 원 표시
        html += '\
    <img id="right-arrow" class="animated zoomInRight" src= "/assets/images/right_arrow.png" style="width: 80px; position: absolute; left:' + (dateGraduationLeft - 80) + 'px; top: -140px;" />';
        html += '\
    <div class="animated zoomInRight dateGraduation hoverable" style="position: absolute; background-color: #FFFFFF; height:30px; width: 30px; border-radius: 30px; visibility:hidden; border: 1px solid #727272 ; top: -14px; left:' + dateGraduationLeft + 'px" data-graduation-date = "' + (dateGraduationDate - 0) + '" ></div>';
        dateGraduation.innerHTML = html;
        this.elementRef.nativeElement.querySelector('#right-arrow').addEventListener('click', this.clickRightTriangleMove.bind(this));
        for (var i = 0; i < dateGraduation.children.length - 2; i++) {
            // 마지막 원은 이벤트에서 제거한다.
            dateGraduation.children[i].addEventListener('mouseenter', this.doMouseEnterCard.bind(this));
            dateGraduation.children[i].addEventListener('mouseout', this.doMouseLeaveCard.bind(this));
            dateGraduation.children[i].addEventListener('click', this.doClickCard.bind(this));
        }
    };
    UsertimelineComponent.prototype.markCard = function () {
        /*
         * 점의 개수만큼, 카드를 생성해 주는 함수이다.
         */
        var cardArea = this.elementRef.nativeElement.querySelector('#cardArea');
        cardArea.innerHTML = "";
        var graduations = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
        var cardWidth;
        var cardAreaHTML = cardArea.innerHTML;
        for (var i = 0; i < graduations.length; i++) {
            if (i == 0) {
                // 첫번째 카드는 Dummy (실제로는 아무런 기능을 하지 않지만, 이 코드들을 지우면 안된다.)
                cardWidth = graduations[i].offsetLeft;
                cardAreaHTML +=
                    '<div class="card horizontal hoverable white" style="position: absolute; left: 0px; width:' + cardWidth * 1 + 'px; visibility: hidden; display: none; z-index: 100;" >\
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
            }
            else {
                cardWidth = graduations[i].offsetLeft - graduations[i - 1].offsetLeft;
                cardAreaHTML +=
                    '<div class="card horizontal hoverable white" style="position: absolute; left:' + (graduations[i - 1].offsetLeft + this.horizontalLineOffsetLeft) + 'px; width:' + cardWidth * 2 + 'px; visibility:hidden; z-index: 100;">\
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
        for (var i = 0; i < cards.length - 2; i++) {
            this.isClicked[i] = false;
            // cards[i].addEventListener('mouseenter', this.doMouseEnterCard.bind(this));
            // cards[i].addEventListener('click', this.doClickCard.bind(this));
            // cards[i].addEventListener('mouseout', this.doMouseLeaveCard.bind(this));
        }
    };
    UsertimelineComponent.prototype.changeCardFormat = function (index) {
        var activityParent = this.elementRef.nativeElement.querySelectorAll('.card')[index].firstElementChild.children;
        var selected_card = this.elementRef.nativeElement.querySelectorAll('.card')[this.currentVisibleCard];
        var past_width = selected_card.offsetWidth;
        var past_left = selected_card.offsetLeft;
        selected_card.style.zIndex = "10";
        // 활동이 6개 이상이면 더이상 출력하지 않는다.
        for (var j = 0; j < selected_card.children[0].children.length; j++) {
            if (j > 2) {
                selected_card.children[0].children[j].style.display = "none";
            }
        }
        if (selected_card.children[0].children.length > 3) {
            selected_card.insertAdjacentHTML('beforeend', '\
        <div class="plus_button_section">\
            <p id="plus_button_' + index + '" style="float: right; margin-right: 20px;">' + '+ ' + (selected_card.children[0].children.length - 3) + '</p>\
        </div>\
      ');
            this.elementRef.nativeElement.querySelector('#plus_button_' + index).addEventListener('click', function (e) {
                var params = [];
                // var selected_card = e['srcElement'].parentElement.parentElement.parentElement;
                var selected_card = e['srcElement'].parentElement.parentElement;
                var included_activities = selected_card.childNodes[4].children;
                for (var i = 0; i < included_activities.length; i++) {
                    var activity_id = included_activities[i].dataset.activity_id;
                    params.push(this.activities[activity_id]);
                }
                this.openDialog(params);
            }.bind(this));
        }
        // 카드에 최소화, 최대화 버튼 추가
        selected_card.insertAdjacentHTML("afterbegin", '\
      <div class = "card-buttons" style = "float: right;">\
        <div class = "row">\
          <div class = "col s9 m9 l9"></div>\
          <div class = "col s2 m2 l2"></div>\
            <img src="/assets/images/maximize_button.png" id="maximize-button-' + index + '" style="width: 20px; height: 20px;">\
            <img src="/assets/images/close_button_circle.png" id="close-button-' + index + '" style="width: 20px; height: 20px;">\
          &nbsp;&nbsp;&nbsp;&nbsp;\
        </div>\
      </div>\
      ');
        this.elementRef.nativeElement.querySelector('#maximize-button-' + index).addEventListener('click', function (e) {
            var params = [];
            var selected_card = e['srcElement'].parentElement.parentElement.parentElement;
            var included_activities = selected_card.querySelectorAll(".card-activity");
            for (var i = 0; i < included_activities.length; i++) {
                var activity_id = included_activities[i].dataset.activity_id;
                params.push(this.activities[activity_id]);
            }
            this.openDialog(params);
        }.bind(this));
        this.elementRef.nativeElement.querySelector('#close-button-' + index).addEventListener('click', function (e) {
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
            if (activityParent.length > 1) {
                selected_card.style.width = past_width * 2 + "px";
                selected_card.style.top = 0 - selected_card.offsetHeight + "px";
                for (var i = 0; i < activityParent.length; i++) {
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
        if (activityParent.length > 1) {
            selected_card.style.width = past_width / 2 + "px";
            for (var i = 0; i < activityParent.length; i++) {
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
    };
    UsertimelineComponent.prototype.makePortfolioWithSuperTag = function (supertag, activityInd) {
        var portfolio = [];
        var portfolioInd = 0;
        this.activities.forEach(function (portfolioActivity, i) {
            if (portfolioActivity.supertag == supertag) {
                // 포트폴리오 모달에서 클릭된 활동을 보여주기 위해 portfolioInd라는 변수가 필요하다.
                if (activityInd > i) {
                    portfolioInd++;
                }
                portfolio.push(portfolioActivity);
            }
        });
        var result = new Object();
        result['portfolio'] = portfolio;
        result['portfolioInd'] = portfolioInd;
        return result;
    };
    UsertimelineComponent.prototype.addActivityToCard = function (activities) {
        var _this = this;
        var cards = this.elementRef.nativeElement.querySelectorAll('.card');
        var dateGraduation = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
        var dateGraduationWidth = dateGraduation[1].getAttribute('data-graduation-date') - dateGraduation[0].getAttribute('data-graduation-date');
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].filter == true) {
                var activityDate = Date.parse(activities[i].date) - Date.parse(this.startDate);
                var cardIndex = Math.floor(activityDate / dateGraduationWidth) + 1;
                if (cards.length > cardIndex && cardIndex > 0) {
                    var cardHTML = cards[cardIndex].children[0].innerHTML;
                    cardHTML += '\
              <div class="col s6 m6 l6 card-activity" id="card-activity-' + i + '" style="padding: 0px;" data-activity_id=' + i + '>\
                <div class="card-image" style="float:left;">\
                  <img class="card-image-specific" src="' + this.images[Math.floor(Math.random() * this.images.length)] + '" style="height: ' + this.listImageHeight + 'px; padding: 15px; ">\
                </div>\
                <div class="card-content" style="margin-left: 110px; padding: 15px;">\
                  <p style="font-size: 15px; font-weight:bold;" id= "cardTitle_' + i + '" class="card-title">' + activities[i].tag + '</p>\
                  <p style="text-overflow: ellipsis;">' + activities[i].supertag + '</p>\
                  <p style="text-overflow: ellipsis;">' + activities[i].date.getFullYear() + '/' + (activities[i].date.getMonth() + 1) + '/' + activities[i].date.getDate() + '</p>\
                </div>\
              </div>\
            ';
                    cards[cardIndex].children[0].innerHTML = cardHTML;
                }
            }
        }
        this.activities.forEach(function (portfolioActivity, i) {
            var activity = _this.elementRef.nativeElement.querySelector('#card-activity-' + i);
            if (activity != null) {
                // 활동을 클릭되었을 때 취해져야 할 액션을 표시한다.
                activity.addEventListener('click', function (e) {
                    var result = this.makePortfolioWithSuperTag(portfolioActivity.supertag, activity.dataset.activity_id);
                    var portfolio = result.portfolio;
                    var tagSet = new Set();
                    for (var i = 0; i < portfolio.length; i++) {
                        for (var j = 0; j < portfolio[i].tag.length; j++) {
                            tagSet.add(portfolio[i].tag[j]);
                        }
                    }
                    this.openPortfolio(portfolio, Array.from(tagSet), result.portfolioInd);
                }.bind(_this));
                // 활동이 hover되었을 때 나타내야 할 액션을 표현해야 한다.(썸네일 이미지를 어둡게 하고, 밑줄이 쳐지게 해야 한다. )
                activity.addEventListener('mouseenter', function (e) {
                    var cardActivityImageSpecific = activity.querySelector('.card-image-specific');
                    var cardTitle = activity.querySelector('.card-title');
                    cardTitle.style.textDecoration = "underline";
                    cardActivityImageSpecific.style.filter = "brightness(75%)";
                }.bind(_this));
                activity.addEventListener('mouseleave', function (e) {
                    var cardActivityImageSpecific = activity.querySelector('.card-image-specific');
                    var cardTitle = activity.querySelector('.card-title');
                    cardTitle.style.textDecoration = "none";
                    cardActivityImageSpecific.style.filter = "brightness(100%)";
                }.bind(_this));
            }
        });
        for (var i = 0; i < cards.length; i++) {
            if (this.elementRef.nativeElement.querySelector('#card_' + i).children.length == 1) {
                cards[i].style.width = parseInt(cards[i].style.width.replace("px", "")) / 2 + "px";
                // cards[i].style.left = cards[i].offsetLeft + parseInt(cards[i].style.width.replace("px", "")) / 3 + "px";
                cards[i].style.top = 0 - cards[i].offsetHeight + "px";
            }
        }
    };
    UsertimelineComponent.prototype.doMouseEnterCard = function (e) {
        /*
         * 원에 마우스가 들어갈 때, 카드가 눈에 보이게 한다.
         */
        if (!(this.currentlyClicked)) {
            if (!(this.isScreenBlack)) {
                // 화면이 밝으면
                document.querySelectorAll('.black-background')[0].style.display = "block";
                this.isScreenBlack = true;
            }
            var d = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
            var cards = this.elementRef.nativeElement.querySelectorAll('.card');
            for (var i = 0; i < cards.length; i++) {
                if (cards[i].children[0].innerHTML.replace(/\s/g, '') == "") {
                    // 카드 내용이 비었을 경우에는 활동 내역이 없다는 문구를 출력한다.
                    cards[i].children[0].innerHTML += "<p>활동 내역이 없습니다.</p>";
                    cards[i].style.width = cards[i].offsetWidth / 2 + "px";
                    // cards[i].style.left = parseInt(cards[i].style.left.replace("px", "")) +  cards[i].offsetWidth / 2 + "px";
                }
                else {
                    cards[i].style.top = 0 - cards[i].offsetHeight + "px";
                    // 활동이 6개 이상이면 더이상 출력하지 않는다.
                    for (var j = 0; j < cards[i].children[0].children.length; j++) {
                        if (j > 6) {
                            cards[i].children[0].children[j].style.display = "none";
                        }
                    }
                    if (cards[i].children[0].children.length > 6) {
                        cards[i].children[0].insertAdjacentHTML('beforeend', '<p style="float: right">더보기</p>');
                    }
                }
            }
            // if(d[0].getBoundingClientRect().left > e.clientX){
            //
            //   this.currentVisibleCard = 0;
            //
            // }else{
            for (var i = 0; i < d.length; i++) {
                if (d[i].getBoundingClientRect().left > e.clientX) {
                    this.currentVisibleCard = i;
                    break;
                }
            }
            if (this.currentVisibleCard < cards.length) {
                cards[this.currentVisibleCard].style.visibility = "visible";
                cards[this.currentVisibleCard].style.zIndex = "11";
                cards[this.currentVisibleCard].classList.add("animated");
            }
        }
    };
    UsertimelineComponent.prototype.doClickCard = function (e) {
        // this.currentlyClicked = true;
        /*
         * hovering 했었을 때 나타난 카드를
         * 클릭했을 때 발생하는 함수이다.
         */
        var d = this.elementRef.nativeElement.querySelectorAll('dateGraduation');
        var cards = this.elementRef.nativeElement.querySelectorAll('card');
        var minLength = Infinity;
        for (var i = 0; i < d.length; i++) {
            if (d[i].getBoundingClientRect().left > e.clientX) {
                this.currentVisibleCard = i;
                break;
            }
        }
        if (this.isClicked[this.currentVisibleCard] == false) {
            // 카드의 너비를 조정한다. ( 클릭되면 카드의 너비를 좁게 만든다. )
            this.changeCardFormat(this.currentVisibleCard);
        }
    };
    UsertimelineComponent.prototype.doMouseLeaveCard = function (e) {
        // 마우스가 카드에서 벗어났을 때 실행되는 함수이다.
        this.currentlyClicked = false;
        var d = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
        var cards = this.elementRef.nativeElement.querySelectorAll('.card');
        var minLength = Infinity;
        if (this.isScreenBlack) {
            document.querySelectorAll('.black-background')[0].style.display = "none";
            this.isScreenBlack = false;
        }
        if (this.isClicked.length == 0) {
            for (var i = 0; i < cards.length; i++) {
                cards[i].style.visibility = "hidden";
                cards[i].style.zIndex = "10";
            }
        }
        for (var i = 0; i < cards.length; i++) {
            if (cards[i].classList.contains('card-pinned') == false) {
                cards[i].style.visibility = "hidden";
                cards[i].style.zIndex = "10";
                this.isClicked[i] = false;
            }
        }
    };
    UsertimelineComponent.prototype.howManyActivities = function () {
        /*
         * 카드에 얼마나 많은 활동이 있는지 세고, 이에 따라서 카드의 top position을 결정한다.
         * (카드에 활동이 많아지게 되면, 카드가 너무 아래에까지 침범하게 되는 현상이 발생하게 되서 이러한 함수가 필요하다.)
         */
        var cards = this.elementRef.nativeElement.querySelectorAll('.card');
        var dateGraduations = this.elementRef.nativeElement.querySelectorAll('.dateGraduation');
        for (var i = 1; i < cards.length; i++) {
            var activities_count = cards[i].children[0].childElementCount;
            dateGraduations[i - 1].style.width = parseInt(dateGraduations[i - 1].style.width.replace("px", "")) + (10 * activities_count) + "px";
            dateGraduations[i - 1].style.height = parseInt(dateGraduations[i - 1].style.height.replace("px", "")) + (10 * activities_count) + "px";
            dateGraduations[i - 1].style.borderRadius = parseInt(dateGraduations[i - 1].style.borderRadius.replace("px", "")) + (10 * activities_count) + "px";
            dateGraduations[i - 1].style.top = parseInt(dateGraduations[i - 1].style.width.replace("px", "")) / 2 * -1 + "px";
            cards[i].style.top = 0 - cards[i].offsetHeight + "px";
        }
    };
    // 확대 버튼을 누르면 포트폴리오 모달을 띄운다.
    UsertimelineComponent.prototype.openPortfolio = function (portfolio, tagSets, portfolioInd) {
        history.pushState(null, null, '/user-portfolio/user_id');
        var dialogRef = this.dialog.open(_user_portfolio_modal_user_portfolio_modal_component__WEBPACK_IMPORTED_MODULE_3__["UserPortfolioModalComponent"], {
            width: '100%',
            height: '100%',
            maxWidth: '2000px',
            data: { portfolio: portfolio, tags: tagSets, currentPortfolioInd: portfolioInd }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('ShowSpecificActivitiesComponent Modal was closed');
            history.pushState(null, null, '/horizontalline');
        });
    };
    UsertimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'usertimeline',
            template: __webpack_require__(/*! ./usertimeline.component.html */ "./src/app/usertimeline/usertimeline.component.html"),
            styles: [__webpack_require__(/*! ./usertimeline.component.css */ "./src/app/usertimeline/usertimeline.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UsertimelineComponent);
    return UsertimelineComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/icecreamparlor/develop/moongom/plather/frontend/theorbit/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map