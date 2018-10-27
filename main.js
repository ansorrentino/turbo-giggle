(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, husky, lint-staged, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = {"name":"angular-ngrx-material-starter","version":"6.11.0","license":"MIT","scripts":{"ng":"ng","start":"ng serve --open","build":"ng build","test":"npm run lint && ng test --configuration=test","lint":"ng lint","e2e":"ng e2e","watch":"ng test --configuration=test --browsers ChromeHeadless --watch","build:prod":"ng build --prod --vendor-chunk","clean":"rimraf ./dist/","server":"node ./server.js","prod":"npm run clean && npm run build:prod && npm run server","ci":"npm run clean && npm run prettier:ci && ng lint && ng test --configuration=test --browsers ChromeTravisCi && ng e2e && npm run cy:ci && npm run accessibility && npm run build:prod -- --deploy-url /angular-ngrx-material-starter/ --base-href /angular-ngrx-material-starter","release":"standard-version && git push --follow-tags origin master","prettier":"prettier {src,e2e,cypress}/**/*.{ts,json,md,scss} --write","prettier:ci":"prettier {src,e2e,cypress}/**/*.{ts,json,md,scss} --list-different","analyze":"npm run clean && npm run build:prod -- --stats-json && webpack-bundle-analyzer ./dist/stats.json","contributors:add":"all-contributors add","contributors:generate":"all-contributors generate && node .all-contributors-html.js","contributors:check":"all-contributors check","cy:open":"cypress open","cy:run":"cypress run","precy:ci":"npm run build:prod -- --deploy-url \"/angular-ngrx-material-starter/\" --base-href \"/angular-ngrx-material-starter\"","cy:ci":"npm-run-all --parallel --race server \"cy:run -- --config=baseUrl=http://localhost:4000\"","preaccessibility":"npm run build:prod -- --deploy-url \"/angular-ngrx-material-starter/\" --base-href \"/angular-ngrx-material-starter\"","accessibility":"npm-run-all --parallel --race server accessibility:run","accessibility:run":"pa11y-ci --threshold 250"},"husky":{"hooks":{"pre-commit":"lint-staged && npm run test"}},"lint-staged":{"{src,e2e,cypress}/**/*.{ts,json,md,scss}":["prettier --write","git add"]},"private":true,"dependencies":{"@angular/animations":"^6.1.2","@angular/cdk":"^6.4.3","@angular/common":"^6.1.2","@angular/compiler":"^6.1.2","@angular/core":"^6.1.2","@angular/forms":"^6.1.2","@angular/http":"^6.1.2","@angular/material":"^6.4.3","@angular/platform-browser":"^6.1.2","@angular/platform-browser-dynamic":"^6.1.2","@angular/router":"^6.1.2","@fortawesome/angular-fontawesome":"^0.2.0","@fortawesome/fontawesome-free":"^5.3.1","@fortawesome/fontawesome-svg-core":"^1.2.4","@fortawesome/free-solid-svg-icons":"^5.3.1","@fortawesome/free-brands-svg-icons":"5.3.1","@ngrx/effects":"^6.1.0","@ngrx/entity":"^6.1.0","@ngrx/router-store":"^6.1.0","@ngrx/store":"^6.1.0","@ngrx/store-devtools":"^6.1.0","@ngx-translate/core":"^10.0.2","@ngx-translate/http-loader":"^3.0.1","bootstrap":"^4.1.1","browser-detect":"^0.2.27","core-js":"^2.5.4","hammerjs":"^2.0.8","rxjs":"^6.2.2","uuid":"^3.1.0","web-animations-js":"^2.2.5","zone.js":"^0.8.26"},"devDependencies":{"@angular-devkit/build-angular":"~0.7.0","@angular/cli":"~6.1.3","@angular/compiler-cli":"^6.1.2","@angular/language-service":"^6.1.2","@bahmutov/add-typescript-to-cypress":"^2.0.0","@types/jasmine":"~2.8.3","@types/node":"~9.4.0","all-contributors-cli":"^5.2.1","codelyzer":"~4.4.2","cypress":"^3.1.0","express":"^4.16.3","husky":"^1.0.0-rc.13","jasmine-core":"~2.99.1","jasmine-marbles":"^0.3.1","jasmine-spec-reporter":"~4.2.1","karma":"~2.0.5","karma-chrome-launcher":"~2.2.0","karma-coverage-istanbul-reporter":"~1.4.2","karma-jasmine":"~1.1.0","karma-jasmine-html-reporter":"~0.2.2","karma-spec-reporter":"~0.0.31","lint-staged":"^7.2.2","ngrx-store-freeze":"^0.2.4","npm-run-all":"^4.1.3","pa11y-ci":"^2.1.1","prettier":"^1.7.4","protractor":"^5.3.2","rimraf":"^2.6.2","standard-version":"^4.2.0","ts-node":"~5.0.0","tslint":"~5.11.0","typescript":"~2.9.2","webpack-bundle-analyzer":"^2.13.1"}};

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/examples/examples.module": [
		"./src/app/examples/examples.module.ts",
		"app-examples-examples-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'about',
        pathMatch: 'full'
    },
    {
        path: 'settings',
        component: _settings__WEBPACK_IMPORTED_MODULE_2__["SettingsContainerComponent"],
        data: { title: 'anms.menu.settings' }
    },
    {
        path: 'examples',
        loadChildren: 'app/examples/examples.module#ExamplesModule'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            // useHash supports github.io demo page, remove in your app
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                    useHash: true,
                    scrollPositionRestoration: 'enabled'
                })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n\r\n  <mat-sidenav #sidenav mode=\"push\">\r\n    <div class=\"branding\"><img [src]=\"logo\" />\r\n      <span data-testid=\"title\">{{ 'anms.title.short' | translate}}</span></div>\r\n    <mat-nav-list>\r\n      <a mat-list-item *ngFor=\"let item of navigationSideMenu\" (click)=\"sidenav.close()\" [routerLink]=\"[item.link]\"\r\n        routerLinkActive=\"active\">\r\n        {{item.label | translate}}\r\n      </a>\r\n      <a mat-list-item href=\"https://github.com/tomastrajan/angular-ngrx-material-starter\" target=\"_blank\">\r\n        Github\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <div class=\"wrapper\">\r\n\r\n    <div class=\"toolbar\" [style.position]=\"isHeaderSticky ? 'fixed' : 'inherit'\" [class.mat-elevation-z4]=\"isHeaderSticky\">\r\n      <mat-toolbar color=\"primary\">\r\n        <button mat-icon-button class=\"d-md-none\" (click)=\"sidenav.open()\">\r\n          <fa-icon icon=\"bars\"></fa-icon>\r\n        </button>\r\n\r\n        <span routerLink=\"\" class=\"branding spacer center d-inline d-sm-none\"><img [src]=\"logo\" /></span>\r\n\r\n        <span routerLink=\"\" class=\"branding spacer center d-none d-sm-inline d-md-none\"><img [src]=\"logo\" /> </span>\r\n        \r\n        <span routerLink=\"\" class=\"branding spacer d-none d-md-inline\"><img [src]=\"logo\" /></span>\r\n\r\n        <span class=\"d-none d-md-inline spacer\">\r\n          <button mat-button class=\"nav-button\" *ngFor=\"let item of navigation\" [routerLink]=\"[item.link]\"\r\n            routerLinkActive=\"active\">\r\n            {{item.label | translate}}\r\n          </button>\r\n        </span>\r\n\r\n        <button mat-button mat-stroked-button color=\"accent\" *ngIf=\"!isAuthenticated\" (click)=\"onLoginClick()\">\r\n          {{ 'anms.menu.login' | translate }}\r\n        </button>\r\n\r\n        <button *ngIf=\"isAuthenticated\"\r\n                mat-icon-button\r\n                [matMenuTriggerFor]=\"toolbarUserMenu\">\r\n          <fa-icon icon=\"user-circle\"></fa-icon>\r\n        </button>\r\n        <mat-menu #toolbarUserMenu=\"matMenu\">\r\n          <button mat-menu-item (click)=\"onLogoutClick()\">\r\n            <mat-icon><fa-icon icon=\"power-off\"></fa-icon></mat-icon>\r\n            <span>{{ 'anms.menu.logout' | translate }}</span>\r\n          </button>\r\n        </mat-menu>\r\n\r\n        <button mat-icon-button routerLink=\"settings\" class=\"d-none d-sm-inline\">\r\n          <fa-icon icon=\"cog\"></fa-icon>\r\n        </button>\r\n\r\n        <a [matTooltip]=\"'anms.header.github' | translate\"\r\n           matTooltipPosition=\"before\"\r\n           mat-icon-button\r\n           class=\"link d-none d-sm-inline\"\r\n           href=\"https://github.com/tomastrajan/angular-ngrx-material-starter\"\r\n           target=\"_blank\">\r\n          <fa-icon [icon]=\"['fab','github']\"></fa-icon>\r\n        </a>\r\n\r\n        <span>\r\n          <mat-select [ngModel]=\"settings?.language\" (selectionChange)=\"onLanguageSelect($event)\">\r\n            <mat-option *ngFor=\"let l of languages\" [value]=\"l\">\r\n              {{ l.toUpperCase() }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </span>\r\n      </mat-toolbar>\r\n    </div>\r\n    <div class=\"content\" [@routeAnimations]=\"o.isActivated && o.activatedRoute.routeConfig.path\">\r\n      <router-outlet #o=\"outlet\"></router-outlet>\r\n    </div>\r\n\r\n    <div class=\"footer\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 links\">\r\n          <a href=\"https://www.github.com/tomastrajan\" target=\"_blank\">\r\n            <fa-icon [icon]=\"['fab','github']\"></fa-icon>\r\n            <span>Github</span>\r\n          </a>\r\n          <a href=\"https://www.twitter.com/tomastrajan\" target=\"_blank\">\r\n            <fa-icon [icon]=\"['fab','twitter']\"></fa-icon>\r\n            <span>Twitter</span>\r\n          </a>\r\n          <a href=\"https://www.youtube.com/channel/UC7XgRHIVoqnh3U5Vmly9ofQ\"\r\n             target=\"_blank\">\r\n            <fa-icon [icon]=\"['fab','youtube']\"></fa-icon>\r\n            <span>Youtube</span>\r\n          </a>\r\n          <a href=\"https://www.instagram.com/tomastrajan\" target=\"_blank\">\r\n            <fa-icon [icon]=\"['fab','instagram']\"></fa-icon>\r\n            <span>Instagram</span>\r\n          </a>\r\n          <a href=\"https://www.slides.com/tomastrajan\" target=\"_blank\">\r\n            <fa-icon icon=\"play-circle\"></fa-icon>\r\n            <span>Slides</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-12 signature\">\r\n          &#169; <span class=\"year\" data-testid=\"footer-year\">{{year}}</span> - Aniello Sorrentino\r\n          <br class=\"d-block d-sm-none\">\r\n          <a [matTooltip]=\"'anms.footer.changelog' | translate\"\r\n             matTooltipPosition=\"before\"\r\n             href=\"https://github.com/tomastrajan/angular-ngrx-material-starter/blob/master/CHANGELOG.md\">\r\n            <fa-icon icon=\"rocket\"></fa-icon>\r\n            {{version}} <span *ngIf=\"!isProd\">[{{envName}}]</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\n  height: 100%;\n  width: 100%; }\n  mat-sidenav-container .toolbar {\n    position: fixed;\n    width: 100%;\n    display: -ms-flexbox;\n    display: flex;\n    z-index: 10; }\n  mat-sidenav-container .toolbar .nav-button {\n      margin: 0 10px 0 0; }\n  mat-sidenav-container .toolbar fa-icon {\n      font-size: 24px; }\n  mat-sidenav-container .toolbar .branding {\n      cursor: pointer;\n      overflow: hidden;\n      padding-top: 4px;\n      text-overflow: ellipsis; }\n  mat-sidenav-container .toolbar .branding.center {\n        text-align: center; }\n  mat-sidenav-container .toolbar .branding img {\n        position: relative;\n        top: -2px;\n        width: 48px;\n        height: 48px; }\n  mat-sidenav-container .toolbar .mat-stroked-button {\n      margin-right: 10px; }\n  mat-sidenav-container .toolbar .spacer {\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n  mat-sidenav-container .toolbar mat-select {\n      margin: 0 0 0 20px;\n      width: 40px;\n      font-size: 14px; }\n  @media (max-width: 992px) {\n      mat-sidenav-container .toolbar .nav-button {\n        min-width: 0;\n        padding: 0 10px; } }\n  mat-sidenav-container .wrapper {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column;\n        flex-direction: column; }\n  mat-sidenav-container .wrapper .content {\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n      margin-top: 64px;\n      overflow-y: auto;\n      overflow-x: hidden; }\n  mat-sidenav-container .wrapper .footer {\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto;\n      padding: 0 15px;\n      text-align: center; }\n  mat-sidenav-container .wrapper .footer .row {\n        padding: 10px 0; }\n  mat-sidenav-container .wrapper .footer .row .links a {\n          transition: padding 0.5s;\n          display: inline-block;\n          padding: 20px 5px; }\n  mat-sidenav-container .wrapper .footer .row .links a:hover {\n            text-decoration: none; }\n  mat-sidenav-container .wrapper .footer .row .links a fa-icon {\n            font-size: 30px;\n            width: 35px; }\n  mat-sidenav-container .wrapper .footer .row .links a span {\n            display: inline-block;\n            width: 75px;\n            padding: 0 0 0 3px;\n            overflow: hidden;\n            text-align: left;\n            white-space: nowrap;\n            transition: width 0.5s; }\n  @media (min-width: 992px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px 10px; } }\n  @media (max-width: 768px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px; }\n            mat-sidenav-container .wrapper .footer .row .links a span {\n              width: 0;\n              padding: 0; } }\n  @media (max-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .links a {\n            padding: 20px 5px; } }\n  @media (min-width: 576px) {\n          mat-sidenav-container .wrapper .footer .row .signature {\n            position: relative; }\n            mat-sidenav-container .wrapper .footer .row .signature a {\n              position: absolute;\n              right: 15px; } }\n  @media (max-width: 600px) {\n    mat-sidenav-container .content {\n      margin-top: 56px !important; } }\n  mat-sidenav {\n  width: 250px; }\n  mat-sidenav .branding {\n    height: 64px;\n    padding: 8px 10px;\n    font-size: 20px;\n    font-weight: 500; }\n  mat-sidenav .branding img {\n      height: 48px;\n      margin: 2px 10px 0 0; }\n  mat-sidenav .branding span {\n      position: relative;\n      top: 3px; }\n  mat-sidenav .mat-nav-list {\n    padding-top: 0; }\n"

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
/* harmony import */ var browser_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! browser-detect */ "./node_modules/browser-detect/dist/browser-detect.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
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
    function AppComponent(overlayContainer, store, router, titleService, animationService, translate) {
        this.overlayContainer = overlayContainer;
        this.store = store;
        this.router = router;
        this.titleService = titleService;
        this.animationService = animationService;
        this.translate = translate;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.isProd = _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production;
        this.envName = _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].envName;
        this.version = _env_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].versions.app;
        this.year = new Date().getFullYear();
        this.logo = __webpack_require__(/*! ../assets/logo.png */ "./src/assets/logo.png");
        this.languages = ['it', 'en'];
        this.navigation = [
            { link: 'examples', label: 'anms.menu.archivi' },
            { link: 'features', label: 'anms.menu.contabilita' },
            { link: 'about', label: 'anms.menu.magazzino' },
            { link: 'produzione', label: 'anms.menu.produzione' },
            { link: 'servizio', label: 'anms.menu.servizio' },
            { link: 'finelavoro', label: 'anms.menu.fine-lavoro' },
            { link: 'personalizzato', label: 'anms.menu.personalizzato' }
        ];
        this.navigationSideMenu = this.navigation.concat([
            { link: 'settings', label: 'anms.menu.settings' }
        ]);
    }
    AppComponent_1 = AppComponent;
    AppComponent.trackPageView = function (event) {
        window.ga('set', 'page', event.urlAfterRedirects);
        window.ga('send', 'pageview');
    };
    AppComponent.isIEorEdgeOrSafari = function () {
        return ['ie', 'edge', 'safari'].includes(Object(browser_detect__WEBPACK_IMPORTED_MODULE_0__["default"])().name);
    };
    AppComponent.prototype.ngOnInit = function () {
        this.translate.setDefaultLang('en');
        this.subscribeToSettings();
        this.subscribeToIsAuthenticated();
        this.subscribeToRouterEvents();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    AppComponent.prototype.onLoginClick = function () {
        this.store.dispatch(new _app_core__WEBPACK_IMPORTED_MODULE_8__["ActionAuthLogin"]());
    };
    AppComponent.prototype.onLogoutClick = function () {
        this.store.dispatch(new _app_core__WEBPACK_IMPORTED_MODULE_8__["ActionAuthLogout"]());
    };
    AppComponent.prototype.onLanguageSelect = function (_a) {
        var language = _a.value;
        this.store.dispatch(new _settings__WEBPACK_IMPORTED_MODULE_10__["ActionSettingsChangeLanguage"]({ language: language }));
        this.store.dispatch(new _settings__WEBPACK_IMPORTED_MODULE_10__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    AppComponent.prototype.subscribeToIsAuthenticated = function () {
        var _this = this;
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_app_core__WEBPACK_IMPORTED_MODULE_8__["selectAuth"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (auth) { return (_this.isAuthenticated = auth.isAuthenticated); });
    };
    AppComponent.prototype.subscribeToSettings = function () {
        var _this = this;
        if (AppComponent_1.isIEorEdgeOrSafari()) {
            this.store.dispatch(new _settings__WEBPACK_IMPORTED_MODULE_10__["ActionSettingsChangeAnimationsPageDisabled"]({
                pageAnimationsDisabled: true
            }));
        }
        this.store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_settings__WEBPACK_IMPORTED_MODULE_10__["selectSettings"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (settings) {
            _this.settings = settings;
            _this.setTheme(settings);
            _this.setStickyHeader(settings);
            _this.setLanguage(settings);
            _this.animationService.updateRouteAnimationType(settings.pageAnimations, settings.elementsAnimations);
        });
    };
    AppComponent.prototype.setTheme = function (settings) {
        var theme = settings.theme, autoNightMode = settings.autoNightMode;
        var hours = new Date().getHours();
        var effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
            ? _settings__WEBPACK_IMPORTED_MODULE_10__["NIGHT_MODE_THEME"]
            : theme).toLowerCase();
        this.componentCssClass = effectiveTheme;
        var classList = this.overlayContainer.getContainerElement().classList;
        var toRemove = Array.from(classList).filter(function (item) {
            return item.includes('-theme');
        });
        if (toRemove.length) {
            classList.remove.apply(classList, toRemove);
        }
        classList.add(effectiveTheme);
    };
    AppComponent.prototype.setStickyHeader = function (settings) {
        this.isHeaderSticky = settings.stickyHeader;
    };
    AppComponent.prototype.setLanguage = function (settings) {
        var language = settings.language;
        if (language) {
            this.translate.use(language);
        }
    };
    AppComponent.prototype.subscribeToRouterEvents = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.unsubscribe$)).subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivationEnd"]) {
                _this.titleService.setTitle(event.snapshot);
            }
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                AppComponent_1.trackPageView(event);
            }
        });
    };
    var AppComponent_1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["HostBinding"])('class'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "componentCssClass", void 0);
    AppComponent = AppComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'anms-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            animations: [_app_core__WEBPACK_IMPORTED_MODULE_8__["routeAnimations"]]
        }),
        __metadata("design:paramtypes", [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayContainer"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _app_core__WEBPACK_IMPORTED_MODULE_8__["TitleService"],
            _app_core__WEBPACK_IMPORTED_MODULE_8__["AnimationsService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"]])
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
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings */ "./src/app/settings/index.ts");
/* harmony import */ var _static__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./static */ "./src/app/static/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
            imports: [
                // angular
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                // core & shared
                _app_core__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                // features
                _static__WEBPACK_IMPORTED_MODULE_6__["StaticModule"],
                _settings__WEBPACK_IMPORTED_MODULE_5__["SettingsModule"],
                // app
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/animations/animations.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/animations/animations.service.ts ***!
  \*******************************************************/
/*! exports provided: AnimationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return AnimationsService; });
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

var AnimationsService = /** @class */ (function () {
    function AnimationsService() {
    }
    AnimationsService_1 = AnimationsService;
    AnimationsService.isRouteAnimationsType = function (type) {
        return AnimationsService_1.routeAnimationType === type;
    };
    AnimationsService.prototype.updateRouteAnimationType = function (pageAnimations, elementsAnimations) {
        AnimationsService_1.routeAnimationType =
            pageAnimations && elementsAnimations
                ? 'ALL'
                : pageAnimations ? 'PAGE' : elementsAnimations ? 'ELEMENTS' : 'NONE';
    };
    var AnimationsService_1;
    AnimationsService.routeAnimationType = 'NONE';
    AnimationsService = AnimationsService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AnimationsService);
    return AnimationsService;
}());



/***/ }),

/***/ "./src/app/core/animations/route.animations.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/animations/route.animations.ts ***!
  \*****************************************************/
/*! exports provided: ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return ROUTE_ANIMATIONS_ELEMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return routeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsAll", function() { return isRouteAnimationsAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsNone", function() { return isRouteAnimationsNone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsPage", function() { return isRouteAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsElements", function() { return isRouteAnimationsElements; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _animations_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations.service */ "./src/app/core/animations/animations.service.ts");


var ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';
var STEPS_ALL = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, position: 'fixed' }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), {
        optional: true
    }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["sequence"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-3%)', opacity: 0 })),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed' })
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter > *', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true })
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(15%)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)', opacity: 1 }))
    ]), { optional: true })
];
var STEPS_NONE = [];
var STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
var STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
var routeAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsAll, STEPS_ALL),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsNone, STEPS_NONE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsPage, STEPS_PAGE),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
function isRouteAnimationsAll() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ALL');
}
function isRouteAnimationsNone() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('NONE');
}
function isRouteAnimationsPage() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('PAGE');
}
function isRouteAnimationsElements() {
    return _animations_service__WEBPACK_IMPORTED_MODULE_1__["AnimationsService"].isRouteAnimationsType('ELEMENTS');
}


/***/ }),

/***/ "./src/app/core/auth/auth-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/auth/auth-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.selectors */ "./src/app/core/auth/auth.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(store) {
        this.store = store;
    }
    AuthGuardService.prototype.canActivate = function () {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_auth_selectors__WEBPACK_IMPORTED_MODULE_3__["selectAuth"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) { return auth.isAuthenticated; }));
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.actions.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.actions.ts ***!
  \*******************************************/
/*! exports provided: AuthActionTypes, ActionAuthLogin, ActionAuthLogout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return AuthActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogin", function() { return ActionAuthLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogout", function() { return ActionAuthLogout; });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login";
    AuthActionTypes["LOGOUT"] = "[Auth] Logout";
})(AuthActionTypes || (AuthActionTypes = {}));
var ActionAuthLogin = /** @class */ (function () {
    function ActionAuthLogin() {
        this.type = AuthActionTypes.LOGIN;
    }
    return ActionAuthLogin;
}());

var ActionAuthLogout = /** @class */ (function () {
    function ActionAuthLogout() {
        this.type = AuthActionTypes.LOGOUT;
    }
    return ActionAuthLogout;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.effects.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.effects.ts ***!
  \*******************************************/
/*! exports provided: AUTH_KEY, AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_KEY", function() { return AUTH_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/auth/auth.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AUTH_KEY = 'AUTH';
var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, localStorageService, router) {
        var _this = this;
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.router = router;
        this.login = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].LOGIN), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            return _this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: true });
        }));
        this.logout = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_auth_actions__WEBPACK_IMPORTED_MODULE_5__["AuthActionTypes"].LOGOUT), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function () {
            _this.router.navigate(['']);
            _this.localStorageService.setItem(AUTH_KEY, { isAuthenticated: false });
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "login", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], AuthEffects.prototype, "logout", void 0);
    AuthEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/core/auth/auth.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.reducer.ts ***!
  \*******************************************/
/*! exports provided: initialState, authReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/core/auth/auth.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    isAuthenticated: false
};
function authReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGIN:
            return __assign({}, state, { isAuthenticated: true });
        case _auth_actions__WEBPACK_IMPORTED_MODULE_0__["AuthActionTypes"].LOGOUT:
            return __assign({}, state, { isAuthenticated: false });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/core/auth/auth.selectors.ts":
/*!*********************************************!*\
  !*** ./src/app/core/auth/auth.selectors.ts ***!
  \*********************************************/
/*! exports provided: selectAuth, selectIsAuthenticated */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuth", function() { return selectAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticated", function() { return selectIsAuthenticated; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core.state */ "./src/app/core/core.state.ts");


var selectAuth = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_core_state__WEBPACK_IMPORTED_MODULE_1__["selectAuthState"], function (state) { return state; });
var selectIsAuthenticated = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_core_state__WEBPACK_IMPORTED_MODULE_1__["selectAuthState"], function (state) { return state.isAuthenticated; });


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony import */ var _auth_auth_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth.effects */ "./src/app/core/auth/auth.effects.ts");
/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony import */ var _animations_animations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./animations/animations.service */ "./src/app/core/animations/animations.service.ts");
/* harmony import */ var _title_title_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./title/title.service */ "./src/app/core/title/title.service.ts");
/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core.state */ "./src/app/core/core.state.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _router_custom_serializer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./router/custom-serializer */ "./src/app/core/router/custom-serializer.ts");
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

















var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // angular
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                // ngrx
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_core_state__WEBPACK_IMPORTED_MODULE_14__["reducers"], { metaReducers: _core_state__WEBPACK_IMPORTED_MODULE_14__["metaReducers"] }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([_auth_auth_effects__WEBPACK_IMPORTED_MODULE_10__["AuthEffects"]]),
                _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production
                    ? []
                    : _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                        name: 'Angular NgRx Material Starter'
                    }),
                // 3rd party
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                    }
                })
            ],
            declarations: [],
            providers: [
                _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_9__["LocalStorageService"],
                _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"],
                _animations_animations_service__WEBPACK_IMPORTED_MODULE_12__["AnimationsService"],
                _title_title_service__WEBPACK_IMPORTED_MODULE_13__["TitleService"],
                { provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_15__["RouterStateSerializer"], useClass: _router_custom_serializer__WEBPACK_IMPORTED_MODULE_16__["CustomSerializer"] }
            ],
            exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"]]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_7__["TranslateHttpLoader"](http, _env_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].i18nPrefix + "/assets/i18n/", '.json');
}


/***/ }),

/***/ "./src/app/core/core.state.ts":
/*!************************************!*\
  !*** ./src/app/core/core.state.ts ***!
  \************************************/
/*! exports provided: reducers, metaReducers, selectAuthState, selectRouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return selectAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterState", function() { return selectRouterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meta-reducers/init-state-from-local-storage.reducer */ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts");
/* harmony import */ var _meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meta-reducers/debug.reducer */ "./src/app/core/meta-reducers/debug.reducer.ts");
/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");







var reducers = {
    auth: _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_6__["authReducer"],
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"]
};
var metaReducers = [
    _meta_reducers_init_state_from_local_storage_reducer__WEBPACK_IMPORTED_MODULE_4__["initStateFromLocalStorage"]
];
if (!_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    metaReducers.unshift(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__["storeFreeze"]);
    if (!_env_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].test) {
        metaReducers.unshift(_meta_reducers_debug_reducer__WEBPACK_IMPORTED_MODULE_5__["debug"]);
    }
}
var selectAuthState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('auth');
var selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');


/***/ }),

/***/ "./src/app/core/index.ts":
/*!*******************************!*\
  !*** ./src/app/core/index.ts ***!
  \*******************************/
/*! exports provided: LocalStorageService, ROUTE_ANIMATIONS_ELEMENTS, routeAnimations, isRouteAnimationsAll, isRouteAnimationsNone, isRouteAnimationsPage, isRouteAnimationsElements, AnimationsService, initialState, authReducer, AuthActionTypes, ActionAuthLogin, ActionAuthLogout, selectAuth, selectIsAuthenticated, AuthGuardService, TitleService, reducers, metaReducers, selectAuthState, selectRouterState, CoreModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });

/* harmony import */ var _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/route.animations */ "./src/app/core/animations/route.animations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTE_ANIMATIONS_ELEMENTS", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["ROUTE_ANIMATIONS_ELEMENTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "routeAnimations", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["routeAnimations"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsAll", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsAll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsNone", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsNone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsPage", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRouteAnimationsElements", function() { return _animations_route_animations__WEBPACK_IMPORTED_MODULE_1__["isRouteAnimationsElements"]; });

/* harmony import */ var _animations_animations_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations/animations.service */ "./src/app/core/animations/animations.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnimationsService", function() { return _animations_animations_service__WEBPACK_IMPORTED_MODULE_2__["AnimationsService"]; });

/* harmony import */ var _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.reducer */ "./src/app/core/auth/auth.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return _auth_auth_reducer__WEBPACK_IMPORTED_MODULE_3__["authReducer"]; });

/* harmony import */ var _auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/auth.actions */ "./src/app/core/auth/auth.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthActionTypes", function() { return _auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["AuthActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogin", function() { return _auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["ActionAuthLogin"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionAuthLogout", function() { return _auth_auth_actions__WEBPACK_IMPORTED_MODULE_4__["ActionAuthLogout"]; });

/* harmony import */ var _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.selectors */ "./src/app/core/auth/auth.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuth", function() { return _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["selectAuth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectIsAuthenticated", function() { return _auth_auth_selectors__WEBPACK_IMPORTED_MODULE_5__["selectIsAuthenticated"]; });

/* harmony import */ var _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth-guard.service */ "./src/app/core/auth/auth-guard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return _auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]; });

/* harmony import */ var _title_title_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./title/title.service */ "./src/app/core/title/title.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return _title_title_service__WEBPACK_IMPORTED_MODULE_7__["TitleService"]; });

/* harmony import */ var _core_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core.state */ "./src/app/core/core.state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _core_state__WEBPACK_IMPORTED_MODULE_8__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _core_state__WEBPACK_IMPORTED_MODULE_8__["metaReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAuthState", function() { return _core_state__WEBPACK_IMPORTED_MODULE_8__["selectAuthState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRouterState", function() { return _core_state__WEBPACK_IMPORTED_MODULE_8__["selectRouterState"]; });

/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core.module */ "./src/app/core/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return _core_module__WEBPACK_IMPORTED_MODULE_9__["HttpLoaderFactory"]; });













/***/ }),

/***/ "./src/app/core/local-storage/local-storage.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/local-storage/local-storage.service.ts ***!
  \*************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
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

var APP_PREFIX = 'ANMS-';
var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.loadInitialState = function () {
        return Object.keys(localStorage).reduce(function (state, storageKey) {
            if (storageKey.includes(APP_PREFIX)) {
                var stateKeys_1 = storageKey
                    .replace(APP_PREFIX, '')
                    .toLowerCase()
                    .split('.')
                    .map(function (key) {
                    return key
                        .split('-')
                        .map(function (token, index) {
                        return index === 0
                            ? token
                            : token.charAt(0).toUpperCase() + token.slice(1);
                    })
                        .join('');
                });
                var currentStateRef_1 = state;
                stateKeys_1.forEach(function (key, index) {
                    if (index === stateKeys_1.length - 1) {
                        currentStateRef_1[key] = JSON.parse(localStorage.getItem(storageKey));
                        return;
                    }
                    currentStateRef_1[key] = currentStateRef_1[key] || {};
                    currentStateRef_1 = currentStateRef_1[key];
                });
            }
            return state;
        }, {});
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        localStorage.setItem("" + APP_PREFIX + key, JSON.stringify(value));
    };
    LocalStorageService.prototype.getItem = function (key) {
        return JSON.parse(localStorage.getItem("" + APP_PREFIX + key));
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/core/meta-reducers/debug.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/meta-reducers/debug.reducer.ts ***!
  \*****************************************************/
/*! exports provided: debug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
function debug(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        console.log("[DEBUG] action: " + action.type, {
            payload: action.payload,
            oldState: state,
            newState: newState
        });
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/meta-reducers/init-state-from-local-storage.reducer.ts ***!
  \*****************************************************************************/
/*! exports provided: initStateFromLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStateFromLocalStorage", function() { return initStateFromLocalStorage; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage/local-storage.service */ "./src/app/core/local-storage/local-storage.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


function initStateFromLocalStorage(reducer) {
    return function (state, action) {
        var newState = reducer(state, action);
        if ([_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["INIT"].toString(), _ngrx_store__WEBPACK_IMPORTED_MODULE_0__["UPDATE"].toString()].includes(action.type)) {
            return __assign({}, newState, _local_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"].loadInitialState());
        }
        return newState;
    };
}


/***/ }),

/***/ "./src/app/core/router/custom-serializer.ts":
/*!**************************************************!*\
  !*** ./src/app/core/router/custom-serializer.ts ***!
  \**************************************************/
/*! exports provided: CustomSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomSerializer", function() { return CustomSerializer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CustomSerializer = /** @class */ (function () {
    function CustomSerializer() {
    }
    CustomSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        return { url: url, params: params, queryParams: queryParams };
    };
    CustomSerializer = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CustomSerializer);
    return CustomSerializer;
}());



/***/ }),

/***/ "./src/app/core/title/title.service.ts":
/*!*********************************************!*\
  !*** ./src/app/core/title/title.service.ts ***!
  \*********************************************/
/*! exports provided: TitleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleService", function() { return TitleService; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TitleService = /** @class */ (function () {
    function TitleService(translateService, title) {
        this.translateService = translateService;
        this.title = title;
    }
    TitleService.prototype.setTitle = function (snapshot, lazyTranslateService) {
        var _this = this;
        var lastChild = snapshot;
        while (lastChild.children.length) {
            lastChild = lastChild.children[0];
        }
        var title = lastChild.data.title;
        var translate = lazyTranslateService || this.translateService;
        if (title) {
            translate
                .get(title)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (translatedTitle) { return translatedTitle !== title; }))
                .subscribe(function (translatedTitle) {
                return _this.title.setTitle(translatedTitle + " - " + _env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName);
            });
        }
        else {
            this.title.setTitle(_env_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].appName);
        }
    };
    TitleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]])
    ], TitleService);
    return TitleService;
}());



/***/ }),

/***/ "./src/app/settings/components/settings-container.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/settings/components/settings-container.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12\"><h1>{{ 'anms.settings.title' | translate }}</h1></div>\r\n  </div>\r\n  <br>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 group\">\r\n      <h2>{{ 'anms.settings.general' | translate }}</h2>\r\n      <div class=\"icon-form-field\">\r\n        <mat-icon color=\"accent\"><fa-icon icon=\"language\" color=\"accent\"></fa-icon></mat-icon>\r\n        <mat-form-field>\r\n          <mat-select [placeholder]=\"'anms.settings.general.placeholder' | translate\"\r\n                      [ngModel]=\"settings?.language\"\r\n                      (selectionChange)=\"onLanguageSelect($event)\"\r\n                      name=\"language\">\r\n            <mat-option *ngFor=\"let l of languages\" [value]=\"l.value\">\r\n              {{ 'anms.settings.general.language.' + l.label | translate }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"icon-form-field\">\r\n         <mat-icon color=\"accent\"><fa-icon icon=\"bars\" color=\"accent\"></fa-icon></mat-icon>\r\n         <mat-placeholder>{{ 'anms.settings.themes.sticky-header' | translate }}\r\n         </mat-placeholder>\r\n         <mat-slide-toggle\r\n           [checked]=\"settings?.stickyHeader\"\r\n           (change)=\"onStickyHeaderToggle($event)\">\r\n         </mat-slide-toggle>\r\n       </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6 group\">\r\n      <h2>{{ 'anms.settings.themes' | translate }}</h2>\r\n      <div class=\"icon-form-field\">\r\n        <mat-icon color=\"accent\"><fa-icon icon=\"paint-brush\" color=\"accent\"></fa-icon></mat-icon>\r\n        <mat-form-field>\r\n          <mat-select [placeholder]=\"'anms.settings.themes.placeholder' | translate\"\r\n                      [ngModel]=\"settings?.theme\"\r\n                      (selectionChange)=\"onThemeSelect($event)\"\r\n                      name=\"themes\">\r\n            <mat-option *ngFor=\"let t of themes\" [value]=\"t.value\">\r\n              {{ 'anms.settings.themes.' + t.label | translate }}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"icon-form-field\">\r\n        <mat-icon color=\"accent\"><fa-icon icon=\"lightbulb\" color=\"accent\"></fa-icon></mat-icon>\r\n        <mat-placeholder>{{ 'anms.settings.themes.night-mode' | translate }}\r\n        </mat-placeholder>\r\n        <mat-slide-toggle\r\n          [checked]=\"settings?.autoNightMode\"\r\n          (change)=\"onAutoNightModeToggle($event)\">\r\n        </mat-slide-toggle>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6 group\">\r\n      <h2>{{ 'anms.settings.animations' | translate }}</h2>\r\n      <div class=\"icon-form-field\">\r\n        <mat-icon color=\"accent\"><mat-icon color=\"accent\"><fa-icon icon=\"window-maximize\"></fa-icon></mat-icon></mat-icon>\r\n        <mat-placeholder>{{ 'anms.settings.animations.page' | translate }}\r\n        </mat-placeholder>\r\n        <mat-slide-toggle\r\n          matTooltip=\"Sorry, this feature is disabled in IE, EDGE and Safari\"\r\n          matTooltipPosition=\"before\"\r\n          *ngIf=\"settings?.pageAnimationsDisabled\"\r\n          disabled>\r\n        </mat-slide-toggle>\r\n        <mat-slide-toggle\r\n          *ngIf=\"!settings?.pageAnimationsDisabled\"\r\n          [checked]=\"settings?.pageAnimations\"\r\n          (change)=\"onPageAnimationsToggle($event)\">\r\n        </mat-slide-toggle>\r\n      </div>\r\n      <div class=\"icon-form-field\">\r\n        <mat-icon color=\"accent\"><fa-icon icon=\"stream\" color=\"accent\"></fa-icon></mat-icon>\r\n        <mat-placeholder>{{ 'anms.settings.animations.elements' | translate }}\r\n        </mat-placeholder>\r\n        <mat-slide-toggle\r\n          [checked]=\"settings?.elementsAnimations\"\r\n          (change)=\"onElementsAnimationsToggle($event)\">\r\n        </mat-slide-toggle>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/components/settings-container.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/settings/components/settings-container.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\nh1 {\n  margin: 0 0 20px 0;\n  text-transform: uppercase; }\n\nh2 {\n  margin: 0 0 10px 0;\n  text-transform: uppercase; }\n\n.group {\n  margin: 0 0 40px 0; }\n\n.icon-form-field {\n  position: relative;\n  display: -ms-flexbox;\n  display: flex;\n  height: 65.5px;\n  -ms-flex-align: center;\n      align-items: center; }\n\n.icon-form-field mat-placeholder {\n    -ms-flex: 2 1 auto;\n        flex: 2 1 auto; }\n\nmat-icon {\n  margin: 0 6px 6px 0;\n  font-size: 20px; }\n\nmat-form-field {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto; }\n"

/***/ }),

/***/ "./src/app/settings/components/settings-container.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/settings/components/settings-container.component.ts ***!
  \*********************************************************************/
/*! exports provided: SettingsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsContainerComponent", function() { return SettingsContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings.actions */ "./src/app/settings/settings.actions.ts");
/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../settings.selectors */ "./src/app/settings/settings.selectors.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsContainerComponent = /** @class */ (function () {
    function SettingsContainerComponent(store) {
        var _this = this;
        this.store = store;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.themes = [
            { value: 'DEFAULT-THEME', label: 'blue' },
            { value: 'LIGHT-THEME', label: 'light' },
            { value: 'NATURE-THEME', label: 'nature' },
            { value: 'BLACK-THEME', label: 'dark' }
        ];
        this.languages = [
            { value: 'it', label: 'it' },
            { value: 'en', label: 'en' }
        ];
        store
            .pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_settings_selectors__WEBPACK_IMPORTED_MODULE_5__["selectSettings"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.unsubscribe$))
            .subscribe(function (settings) { return (_this.settings = settings); });
    }
    SettingsContainerComponent.prototype.ngOnInit = function () { };
    SettingsContainerComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    SettingsContainerComponent.prototype.onLanguageSelect = function (_a) {
        var language = _a.value;
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeLanguage"]({ language: language }));
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsContainerComponent.prototype.onThemeSelect = function (_a) {
        var theme = _a.value;
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeTheme"]({ theme: theme }));
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsContainerComponent.prototype.onAutoNightModeToggle = function (_a) {
        var autoNightMode = _a.checked;
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeAutoNightMode"]({ autoNightMode: autoNightMode }));
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsContainerComponent.prototype.onStickyHeaderToggle = function (_a) {
        var stickyHeader = _a.checked;
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeStickyHeader"]({ stickyHeader: stickyHeader }));
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsContainerComponent.prototype.onPageAnimationsToggle = function (_a) {
        var pageAnimations = _a.checked;
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeAnimationsPage"]({ pageAnimations: pageAnimations }));
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsContainerComponent.prototype.onElementsAnimationsToggle = function (_a) {
        var elementsAnimations = _a.checked;
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsChangeAnimationsElements"]({ elementsAnimations: elementsAnimations }));
        this.store.dispatch(new _settings_actions__WEBPACK_IMPORTED_MODULE_4__["ActionSettingsPersist"]({ settings: this.settings }));
    };
    SettingsContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-settings',
            template: __webpack_require__(/*! ./settings-container.component.html */ "./src/app/settings/components/settings-container.component.html"),
            styles: [__webpack_require__(/*! ./settings-container.component.scss */ "./src/app/settings/components/settings-container.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], SettingsContainerComponent);
    return SettingsContainerComponent;
}());



/***/ }),

/***/ "./src/app/settings/index.ts":
/*!***********************************!*\
  !*** ./src/app/settings/index.ts ***!
  \***********************************/
/*! exports provided: SettingsModule, NIGHT_MODE_THEME, SettingsActionTypes, ActionSettingsChangeLanguage, ActionSettingsChangeTheme, ActionSettingsChangeAutoNightMode, ActionSettingsChangeStickyHeader, ActionSettingsChangeAnimationsPage, ActionSettingsChangeAnimationsPageDisabled, ActionSettingsChangeAnimationsElements, ActionSettingsPersist, selectSettings, initialState, settingsReducer, SETTINGS_KEY, SettingsEffects, SettingsContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _settings_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.module */ "./src/app/settings/settings.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return _settings_module__WEBPACK_IMPORTED_MODULE_0__["SettingsModule"]; });

/* harmony import */ var _settings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.model */ "./src/app/settings/settings.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NIGHT_MODE_THEME", function() { return _settings_model__WEBPACK_IMPORTED_MODULE_1__["NIGHT_MODE_THEME"]; });

/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.actions */ "./src/app/settings/settings.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["SettingsActionTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeLanguage", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsChangeLanguage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeTheme", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsChangeTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAutoNightMode", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsChangeAutoNightMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeStickyHeader", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsChangeStickyHeader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPage", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsChangeAnimationsPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPageDisabled", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsChangeAnimationsPageDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsElements", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsChangeAnimationsElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsPersist", function() { return _settings_actions__WEBPACK_IMPORTED_MODULE_2__["ActionSettingsPersist"]; });

/* harmony import */ var _settings_selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.selectors */ "./src/app/settings/settings.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectSettings", function() { return _settings_selectors__WEBPACK_IMPORTED_MODULE_3__["selectSettings"]; });

/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["initialState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["settingsReducer"]; });

/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.effects */ "./src/app/settings/settings.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return _settings_effects__WEBPACK_IMPORTED_MODULE_5__["SETTINGS_KEY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return _settings_effects__WEBPACK_IMPORTED_MODULE_5__["SettingsEffects"]; });

/* harmony import */ var _components_settings_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings-container.component */ "./src/app/settings/components/settings-container.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsContainerComponent", function() { return _components_settings_container_component__WEBPACK_IMPORTED_MODULE_6__["SettingsContainerComponent"]; });










/***/ }),

/***/ "./src/app/settings/settings.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.actions.ts ***!
  \**********************************************/
/*! exports provided: SettingsActionTypes, ActionSettingsChangeLanguage, ActionSettingsChangeTheme, ActionSettingsChangeAutoNightMode, ActionSettingsChangeStickyHeader, ActionSettingsChangeAnimationsPage, ActionSettingsChangeAnimationsPageDisabled, ActionSettingsChangeAnimationsElements, ActionSettingsPersist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsActionTypes", function() { return SettingsActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeLanguage", function() { return ActionSettingsChangeLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeTheme", function() { return ActionSettingsChangeTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAutoNightMode", function() { return ActionSettingsChangeAutoNightMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeStickyHeader", function() { return ActionSettingsChangeStickyHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPage", function() { return ActionSettingsChangeAnimationsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsPageDisabled", function() { return ActionSettingsChangeAnimationsPageDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsChangeAnimationsElements", function() { return ActionSettingsChangeAnimationsElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSettingsPersist", function() { return ActionSettingsPersist; });
var SettingsActionTypes;
(function (SettingsActionTypes) {
    SettingsActionTypes["CHANGE_LANGUAGE"] = "[Settings] Change Language";
    SettingsActionTypes["CHANGE_THEME"] = "[Settings] Change Theme";
    SettingsActionTypes["CHANGE_AUTO_NIGHT_AUTO_MODE"] = "[Settings] Change Auto Night Mode";
    SettingsActionTypes["CHANGE_STICKY_HEADER"] = "[Settings] Change Sticky Header";
    SettingsActionTypes["CHANGE_ANIMATIONS_PAGE"] = "[Settings] Change Animations Page";
    SettingsActionTypes["CHANGE_ANIMATIONS_PAGE_DISABLED"] = "[Settings] Change Animations Page Disabled";
    SettingsActionTypes["CHANGE_ANIMATIONS_ELEMENTS"] = "[Settings] Change Animations Elements";
    SettingsActionTypes["PERSIST"] = "[Settings] Persist";
})(SettingsActionTypes || (SettingsActionTypes = {}));
var ActionSettingsChangeLanguage = /** @class */ (function () {
    function ActionSettingsChangeLanguage(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_LANGUAGE;
    }
    return ActionSettingsChangeLanguage;
}());

var ActionSettingsChangeTheme = /** @class */ (function () {
    function ActionSettingsChangeTheme(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_THEME;
    }
    return ActionSettingsChangeTheme;
}());

var ActionSettingsChangeAutoNightMode = /** @class */ (function () {
    function ActionSettingsChangeAutoNightMode(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_AUTO_NIGHT_AUTO_MODE;
    }
    return ActionSettingsChangeAutoNightMode;
}());

var ActionSettingsChangeStickyHeader = /** @class */ (function () {
    function ActionSettingsChangeStickyHeader(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_STICKY_HEADER;
    }
    return ActionSettingsChangeStickyHeader;
}());

var ActionSettingsChangeAnimationsPage = /** @class */ (function () {
    function ActionSettingsChangeAnimationsPage(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE;
    }
    return ActionSettingsChangeAnimationsPage;
}());

var ActionSettingsChangeAnimationsPageDisabled = /** @class */ (function () {
    function ActionSettingsChangeAnimationsPageDisabled(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_ANIMATIONS_PAGE_DISABLED;
    }
    return ActionSettingsChangeAnimationsPageDisabled;
}());

var ActionSettingsChangeAnimationsElements = /** @class */ (function () {
    function ActionSettingsChangeAnimationsElements(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.CHANGE_ANIMATIONS_ELEMENTS;
    }
    return ActionSettingsChangeAnimationsElements;
}());

var ActionSettingsPersist = /** @class */ (function () {
    function ActionSettingsPersist(payload) {
        this.payload = payload;
        this.type = SettingsActionTypes.PERSIST;
    }
    return ActionSettingsPersist;
}());



/***/ }),

/***/ "./src/app/settings/settings.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.effects.ts ***!
  \**********************************************/
/*! exports provided: SETTINGS_KEY, SettingsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SETTINGS_KEY", function() { return SETTINGS_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsEffects", function() { return SettingsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.actions */ "./src/app/settings/settings.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SETTINGS_KEY = 'SETTINGS';
var SettingsEffects = /** @class */ (function () {
    function SettingsEffects(actions$, localStorageService, animationsService) {
        var _this = this;
        this.actions$ = actions$;
        this.localStorageService = localStorageService;
        this.animationsService = animationsService;
        this.persistSettings = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_settings_actions__WEBPACK_IMPORTED_MODULE_4__["SettingsActionTypes"].PERSIST), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (action) {
            var settings = action.payload.settings;
            var pageAnimations = settings.pageAnimations, elementsAnimations = settings.elementsAnimations;
            _this.localStorageService.setItem(SETTINGS_KEY, settings);
            _this.animationsService.updateRouteAnimationType(pageAnimations, elementsAnimations);
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], SettingsEffects.prototype, "persistSettings", void 0);
    SettingsEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"],
            _app_core__WEBPACK_IMPORTED_MODULE_3__["AnimationsService"]])
    ], SettingsEffects);
    return SettingsEffects;
}());



/***/ }),

/***/ "./src/app/settings/settings.model.ts":
/*!********************************************!*\
  !*** ./src/app/settings/settings.model.ts ***!
  \********************************************/
/*! exports provided: NIGHT_MODE_THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NIGHT_MODE_THEME", function() { return NIGHT_MODE_THEME; });
var NIGHT_MODE_THEME = 'BLACK-THEME';


/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _settings_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings.reducer */ "./src/app/settings/settings.reducer.ts");
/* harmony import */ var _settings_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings.effects */ "./src/app/settings/settings.effects.ts");
/* harmony import */ var _components_settings_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/settings-container.component */ "./src/app/settings/components/settings-container.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _app_shared__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forFeature('settings', _settings_reducer__WEBPACK_IMPORTED_MODULE_4__["settingsReducer"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forFeature([_settings_effects__WEBPACK_IMPORTED_MODULE_5__["SettingsEffects"]])
            ],
            declarations: [_components_settings_container_component__WEBPACK_IMPORTED_MODULE_6__["SettingsContainerComponent"]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/settings/settings.reducer.ts ***!
  \**********************************************/
/*! exports provided: initialState, settingsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsReducer", function() { return settingsReducer; });
/* harmony import */ var _settings_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.actions */ "./src/app/settings/settings.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    language: 'en',
    theme: 'DEFAULT-THEME',
    autoNightMode: false,
    stickyHeader: true,
    pageAnimations: true,
    pageAnimationsDisabled: false,
    elementsAnimations: true
};
function settingsReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"].CHANGE_LANGUAGE:
        case _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"].CHANGE_THEME:
        case _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"].CHANGE_AUTO_NIGHT_AUTO_MODE:
        case _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"].CHANGE_STICKY_HEADER:
        case _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"].CHANGE_ANIMATIONS_PAGE:
        case _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"].CHANGE_ANIMATIONS_ELEMENTS:
            return __assign({}, state, action.payload);
        case _settings_actions__WEBPACK_IMPORTED_MODULE_0__["SettingsActionTypes"].CHANGE_ANIMATIONS_PAGE_DISABLED:
            return __assign({}, state, { pageAnimations: false, pageAnimationsDisabled: action.payload.pageAnimationsDisabled });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/settings/settings.selectors.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.selectors.ts ***!
  \************************************************/
/*! exports provided: selectSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSettings", function() { return selectSettings; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectSettings = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('settings');


/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"color\" [disabled]=\"disabled\" (click)=\"onClick()\">\r\n  <mat-icon *ngIf=\"fontSet && fontIcon && !faIcon\" [fontSet]=\"fontSet\"\r\n            [fontIcon]=\"fontIcon\"></mat-icon>\r\n    <fa-icon *ngIf=\"faIcon\" [icon]=\"faIcon\"></fa-icon>\r\n  <span *ngIf=\"label\">{{label}}</span>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  padding: 0;\n  min-width: 36px;\n  margin-left: 10px; }\n  button mat-icon {\n    position: relative;\n    top: 2px;\n    font-size: 18px; }\n  button fa-icon {\n    position: relative;\n    font-size: 18px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input-action.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/big-input/big-input-action.component.ts ***!
  \****************************************************************/
/*! exports provided: BigInputActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInputActionComponent", function() { return BigInputActionComponent; });
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

var BigInputActionComponent = /** @class */ (function () {
    function BigInputActionComponent() {
        this.disabled = false;
        this.fontSet = '';
        this.fontIcon = '';
        this.faIcon = '';
        this.label = '';
        this.color = '';
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasFocus = false;
    }
    BigInputActionComponent.prototype.onClick = function () {
        this.action.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "fontSet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "fontIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "faIcon", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BigInputActionComponent.prototype, "action", void 0);
    BigInputActionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-big-input-action',
            template: __webpack_require__(/*! ./big-input-action.component.html */ "./src/app/shared/big-input/big-input-action.component.html"),
            styles: [__webpack_require__(/*! ./big-input-action.component.scss */ "./src/app/shared/big-input/big-input-action.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], BigInputActionComponent);
    return BigInputActionComponent;
}());



/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"big-input\" [ngClass]=\"{ 'has-focus': hasFocus }\">\r\n  <input (focus)=\"hasFocus = true\" (blur)=\"hasFocus = false\"\r\n         [value]=\"value\"\r\n         [placeholder]=\"placeholder\"\r\n         [disabled]=\"disabled\" />\r\n  <ng-content></ng-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".big-input {\n  width: 100%;\n  transition: all 0.5s;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 10px 10px 10px 20px; }\n  .big-input input {\n    -ms-flex-positive: 1;\n        flex-grow: 1;\n    border: 0;\n    font-size: 20px;\n    min-width: 100px; }\n"

/***/ }),

/***/ "./src/app/shared/big-input/big-input.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/big-input/big-input.component.ts ***!
  \*********************************************************/
/*! exports provided: BigInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigInputComponent", function() { return BigInputComponent; });
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

var BigInputComponent = /** @class */ (function () {
    function BigInputComponent() {
        this.value = '';
        this.disabled = false;
        this.hasFocus = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BigInputComponent.prototype, "placeholder", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "value", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], BigInputComponent.prototype, "disabled", void 0);
    BigInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-big-input',
            template: __webpack_require__(/*! ./big-input.component.html */ "./src/app/shared/big-input/big-input.component.html"),
            styles: [__webpack_require__(/*! ./big-input.component.scss */ "./src/app/shared/big-input/big-input.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], BigInputComponent);
    return BigInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material___WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/ */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _big_input_big_input_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./big-input/big-input.component */ "./src/app/shared/big-input/big-input.component.ts");
/* harmony import */ var _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./big-input/big-input-action.component */ "./src/app/shared/big-input/big-input-action.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_24__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faBars"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faUserCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faPowerOff"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faCog"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faRocket"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faPlayCircle"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_26__["faGithub"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_26__["faMediumM"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_26__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_26__["faInstagram"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_26__["faYoutube"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faPlus"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faEdit"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faTrash"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faTimes"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faCaretUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faCaretDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faExclamationTriangle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faFilter"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faTasks"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faCheck"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faLanguage"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faPaintBrush"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faLightbulb"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faWindowMaximize"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faStream"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_25__["faBook"]);


var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"]
            ],
            declarations: [_big_input_big_input_component__WEBPACK_IMPORTED_MODULE_27__["BigInputComponent"], _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_28__["BigInputActionComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_19__["MatSlideToggleModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatSliderModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_22__["MatDatepickerModule"],
                _angular_material___WEBPACK_IMPORTED_MODULE_21__["MatNativeDateModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_23__["FontAwesomeModule"],
                _big_input_big_input_component__WEBPACK_IMPORTED_MODULE_27__["BigInputComponent"],
                _big_input_big_input_action_component__WEBPACK_IMPORTED_MODULE_28__["BigInputActionComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/static/about/about.component.html":
/*!***************************************************!*\
  !*** ./src/app/static/about/about.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n  <div class=\"gradient\">\r\n    <div class=\"container\">\r\n      <h1>{{ 'anms.title' | translate }}</h1>\r\n      <div class=\"actions\">\r\n        <a [ngClass]=\"routeAnimationsElements\" mat-raised-button class=\"actions-main\" color=\"primary\" routerLink=\"../features\">\r\n          {{ 'anms.menu.features' | translate }}\r\n        </a>\r\n        <a mat-raised-button class=\"actions-main\" color=\"accent\" routerLink=\"../examples\" [ngClass]=\"routeAnimationsElements\">\r\n          {{ 'anms.menu.examples' | translate }}\r\n        </a>\r\n        <a mat-raised-button class=\"actions-main\" color=\"warn\" routerLink=\"../settings\" [ngClass]=\"routeAnimationsElements\">\r\n          {{ 'anms.about.change-theme' | translate }}\r\n        </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"contributors\" [ngClass]=\"routeAnimationsElements\">\r\n    <div class=\"contributors-wrapper\">\r\n\r\n      <!-- ALL-CONTRIBUTORS-LIST:START -->\r\n  <a class=\"contributor\" href=\"https://medium.com/@tomastrajan\" target=\"_blank\">\r\n    <img src=\"https://avatars0.githubusercontent.com/u/3764868?v=4\">\r\n    <span>Aniello Sorrentino</span>\r\n  </a>\r\n  <!-- ALL-CONTRIBUTORS-LIST:END -->\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/static/about/about.component.scss":
/*!***************************************************!*\
  !*** ./src/app/static/about/about.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  text-align: center;\n  font-size: 3em;\n  text-transform: uppercase; }\n\nh2 {\n  font-size: 1.5em;\n  text-transform: uppercase; }\n\n.background {\n  padding: 80px 0 0 0;\n  position: relative; }\n\n.background .actions {\n    text-align: center;\n    margin: 50px;\n    z-index: 1; }\n\n.background .actions span {\n      display: inline-block;\n      font-weight: bold;\n      padding: 20px 10px 30px 10px; }\n\n.background .actions a {\n      margin: 0 5px 10px 0; }\n\n.background .actions a.actions-main {\n        text-transform: uppercase;\n        padding: 3px 24px; }\n\n.background .actions a fa-icon {\n        position: relative;\n        bottom: 1px; }\n\n.background .get-started {\n    max-width: 700px;\n    margin: 50px auto;\n    letter-spacing: 0.01px;\n    overflow-wrap: break-word;\n    z-index: 1;\n    overflow: hidden; }\n\n.background .get-started code {\n      font-size: 0.9em;\n      display: inline-block;\n      word-wrap: break-word;\n      white-space: normal;\n      margin: 0 0 10px 0; }\n\n.background::before {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    background: url('intro.jpg') no-repeat center top;\n    background-size: cover;\n    opacity: 0.7;\n    content: '';\n    z-index: 0; }\n\n.background .gradient::before {\n    position: absolute;\n    top: 51%;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    content: '';\n    z-index: 0; }\n\n.background .container {\n    position: relative; }\n\n.follow-releases {\n  max-width: 700px;\n  margin: 0 auto 60px auto; }\n\n.follow-releases p {\n    line-height: 40px; }\n\n.follow-releases p a {\n      border-bottom: 3px solid; }\n\n.follow-releases img {\n    display: block;\n    max-width: 80%;\n    margin: 20px auto 0 auto;\n    border-radius: 5px;\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.contributors {\n  max-width: 700px;\n  margin: 0 auto 60px auto; }\n\n.contributors p a {\n    border-bottom: 3px solid; }\n\n.contributors .contributors-wrapper {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: row;\n        flex-direction: row;\n    -ms-flex-pack: center;\n        justify-content: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap; }\n\n.contributors .contributors-wrapper a {\n      margin: 8px;\n      width: 100px;\n      display: inline-block;\n      text-align: center; }\n\n.contributors .contributors-wrapper a span {\n        display: inline-block;\n        padding: 10px 0 0 0;\n        line-height: 16px; }\n\n.contributors .contributors-wrapper a img {\n        border-radius: 50%;\n        width: 100px;\n        border: 5px solid;\n        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n@media (max-width: 768px) {\n  .background .actions {\n    margin: 50px 0; }\n  .background .get-started {\n    width: auto; }\n  .follow-releases {\n    width: auto; }\n    .follow-releases img {\n      max-width: 100%; } }\n\n@media (max-width: 576px) {\n  .background {\n    padding: 40px 0 0 0; }\n    .background h1 {\n      line-height: 1em; }\n    .background .actions {\n      margin: 40px 0 0 0; }\n      .background .actions span {\n        padding: 10px 0 20px 0; }\n      .background .actions a {\n        width: 100%; }\n    .background .get-started {\n      width: auto;\n      margin: 40px auto 40px auto; }\n  .follow-releases {\n    margin: 0 auto 40px auto; } }\n"

/***/ }),

/***/ "./src/app/static/about/about.component.ts":
/*!*************************************************!*\
  !*** ./src/app/static/about/about.component.ts ***!
  \*************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_1__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.releaseButler = __webpack_require__(/*! ../../../assets/release-butler.png */ "./src/assets/release-butler.png");
    }
    AboutComponent.prototype.ngOnInit = function () { };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/static/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/static/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/static/features/features.component.html":
/*!*********************************************************!*\
  !*** ./src/app/static/features/features.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h1 class=\"main-heading\">{{ 'anms.features.title' | translate }}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row align-items-end\">\r\n    <div *ngFor=\"let feature of features\" class=\"col-md-6 col-lg-4\" [ngClass]=\"routeAnimationsElements\">\r\n      <mat-card>\r\n        <mat-card-title>\r\n          <code *ngIf=\"feature.version\">{{feature.version}}</code>{{feature.name | translate}}\r\n        </mat-card-title>\r\n        <mat-card-subtitle>\r\n          {{ feature.description | translate }}\r\n        </mat-card-subtitle>\r\n        <mat-card-actions>\r\n          <a *ngIf=\"feature.github\" mat-icon-button [href]=\"feature.github\" target=\"_blank\">\r\n            <fa-icon [icon]=\"['fab','github']\"></fa-icon>\r\n          </a>\r\n          <a mat-button [href]=\"feature.documentation\" target=\"_blank\">\r\n            <fa-icon icon=\"book\"></fa-icon>{{ 'anms.features.documentation' | translate }}\r\n          </a>\r\n          <a *ngIf=\"feature.medium\" mat-button [href]=\"feature.medium\" target=\"_blank\">\r\n            <fa-icon [icon]=\"['fab','medium-m']\"></fa-icon>{{ 'anms.features.guide' | translate }}\r\n          </a>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/static/features/features.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/static/features/features.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 20px; }\n\n.main-heading {\n  text-transform: uppercase;\n  margin: 0 0 20px 0; }\n\nmat-card {\n  margin: 0 0 20px 0; }\n\nmat-card mat-card-title {\n    position: relative; }\n\nmat-card mat-card-title code {\n      position: absolute;\n      top: 11px;\n      right: 0;\n      float: right;\n      font-size: 10px; }\n\nmat-card mat-card-subtitle {\n    min-height: 60px; }\n\n@media (max-width: 576px) {\n    mat-card mat-card-subtitle {\n      min-height: auto; } }\n\nmat-card a fa-icon {\n    position: relative;\n    bottom: 2px;\n    font-size: 16px;\n    margin: 6px; }\n\nmat-card a[mat-icon-button] {\n    position: relative;\n    left: 5px; }\n"

/***/ }),

/***/ "./src/app/static/features/features.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/static/features/features.component.ts ***!
  \*******************************************************/
/*! exports provided: FeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesComponent", function() { return FeaturesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core */ "./src/app/core/index.ts");
/* harmony import */ var _features_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features.data */ "./src/app/static/features/features.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FeaturesComponent = /** @class */ (function () {
    function FeaturesComponent() {
        this.routeAnimationsElements = _app_core__WEBPACK_IMPORTED_MODULE_1__["ROUTE_ANIMATIONS_ELEMENTS"];
        this.features = _features_data__WEBPACK_IMPORTED_MODULE_2__["features"];
    }
    FeaturesComponent.prototype.ngOnInit = function () { };
    FeaturesComponent.prototype.openLink = function (link) {
        window.open(link, '_blank');
    };
    FeaturesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'anms-features',
            template: __webpack_require__(/*! ./features.component.html */ "./src/app/static/features/features.component.html"),
            styles: [__webpack_require__(/*! ./features.component.scss */ "./src/app/static/features/features.component.scss")]
        })
    ], FeaturesComponent);
    return FeaturesComponent;
}());



/***/ }),

/***/ "./src/app/static/features/features.data.ts":
/*!**************************************************!*\
  !*** ./src/app/static/features/features.data.ts ***!
  \**************************************************/
/*! exports provided: features */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "features", function() { return features; });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");

var features = [
    {
        name: 'Angular',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.angular,
        description: 'anms.features.angular',
        github: 'https://github.com/angular/angular',
        documentation: 'https://angular.io/docs/ts/latest/'
    },
    {
        name: 'Angular Material',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.material,
        description: 'anms.features.angular-material',
        github: 'https://github.com/angular/material2/',
        documentation: 'https://material.angular.io/'
    },
    {
        name: 'Angular Cli',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.angularCli,
        description: 'anms.features.angular-cli',
        github: 'https://github.com/angular/angular-cli',
        documentation: 'https://cli.angular.io/'
    },
    {
        name: 'NgRx',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.ngrx,
        description: 'anms.features.ngrx',
        github: 'https://github.com/ngrx/platform',
        documentation: 'http://ngrx.github.io/',
        medium: 'https://medium.com/@tomastrajan/object-assign-vs-object-spread-in-angular-ngrx-reducers-3d62ecb4a4b0'
    },
    {
        name: 'RxJS',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.rxjs,
        description: 'anms.features.rxjs',
        github: 'https://github.com/ReactiveX/RxJS',
        documentation: 'http://reactivex.io/rxjs/',
        medium: 'https://medium.com/@tomastrajan/practical-rxjs-in-the-wild-requests-with-concatmap-vs-mergemap-vs-forkjoin-11e5b2efe293'
    },
    {
        name: 'Bootstrap',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.bootstrap,
        description: 'anms.features.bootstrap',
        github: 'https://github.com/twbs/bootstrap',
        documentation: 'https://getbootstrap.com/docs/4.0/layout/grid/',
        medium: 'https://medium.com/@tomastrajan/how-to-build-responsive-layouts-with-bootstrap-4-and-angular-6-cfbb108d797b'
    },
    {
        name: 'Typescript',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.typescript,
        description: 'anms.features.typescript',
        github: 'https://github.com/Microsoft/TypeScript',
        documentation: 'https://www.typescriptlang.org/docs/home.html'
    },
    {
        name: 'I18n',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.ngxtranslate,
        description: 'anms.features.ngxtranslate',
        github: 'https://github.com/ngx-translate/core',
        documentation: 'http://www.ngx-translate.com/'
    },
    {
        name: 'Font Awesome 5',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.fontAwesome,
        description: 'anms.features.fontawesome',
        github: 'https://github.com/FortAwesome/Font-Awesome',
        documentation: 'https://fontawesome.com/icons'
    },
    {
        name: 'Cypress',
        version: _env_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].versions.cypress,
        description: 'anms.features.cypress',
        github: 'https://github.com/cypress-io/cypress',
        documentation: 'https://www.cypress.io/'
    },
    {
        name: 'anms.features.themes.title',
        description: 'anms.features.themes',
        documentation: 'https://material.angular.io/guide/theming',
        medium: 'https://medium.com/@tomastrajan/the-complete-guide-to-angular-material-themes-4d165a9d24d1'
    },
    {
        name: 'anms.features.lazyloading.title',
        description: 'anms.features.lazyloading',
        documentation: 'https://angular.io/guide/router#lazy-loading-route-configuration'
    }
];


/***/ }),

/***/ "./src/app/static/index.ts":
/*!*********************************!*\
  !*** ./src/app/static/index.ts ***!
  \*********************************/
/*! exports provided: StaticRoutingModule, StaticModule, AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./static-routing.module */ "./src/app/static/static-routing.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticRoutingModule", function() { return _static_routing_module__WEBPACK_IMPORTED_MODULE_0__["StaticRoutingModule"]; });

/* harmony import */ var _static_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./static.module */ "./src/app/static/static.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return _static_module__WEBPACK_IMPORTED_MODULE_1__["StaticModule"]; });

/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]; });






/***/ }),

/***/ "./src/app/static/static-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/static/static-routing.module.ts ***!
  \*************************************************/
/*! exports provided: StaticRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRoutingModule", function() { return StaticRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/features.component */ "./src/app/static/features/features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"],
        data: { title: 'anms.menu.about' }
    },
    {
        path: 'features',
        component: _features_features_component__WEBPACK_IMPORTED_MODULE_3__["FeaturesComponent"],
        data: { title: 'anms.menu.features' }
    }
];
var StaticRoutingModule = /** @class */ (function () {
    function StaticRoutingModule() {
    }
    StaticRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StaticRoutingModule);
    return StaticRoutingModule;
}());



/***/ }),

/***/ "./src/app/static/static.module.ts":
/*!*****************************************!*\
  !*** ./src/app/static/static.module.ts ***!
  \*****************************************/
/*! exports provided: StaticModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticModule", function() { return StaticModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared */ "./src/app/shared/index.ts");
/* harmony import */ var _static_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./static-routing.module */ "./src/app/static/static-routing.module.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/static/about/about.component.ts");
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./features/features.component */ "./src/app/static/features/features.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var StaticModule = /** @class */ (function () {
    function StaticModule() {
    }
    StaticModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_app_shared__WEBPACK_IMPORTED_MODULE_1__["SharedModule"], _static_routing_module__WEBPACK_IMPORTED_MODULE_2__["StaticRoutingModule"]],
            declarations: [_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _features_features_component__WEBPACK_IMPORTED_MODULE_4__["FeaturesComponent"]]
        })
    ], StaticModule);
    return StaticModule;
}());



/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAtTSURBVHja7J1rbBTXGYaf3bVjQI5rxSJYUCOMS+oaSE2FVYdoW1mxTaAlsZW6mE2gFgKXH7VdLEBGyKY2FTdRJDuqhCP1R1tSGtRbuERxUhmpUdOmQlEiGoyJapM4ISEgMI2FL1zcHz5Lzdo7Zy8zu+fMzCutBLvrmTPne+ec5zv7zYxnfHwcV86V1+0C1wCuHKwUhx53LhAAAn19fQC/E69+Ox/0woULp7zncRADPAr8EFgHPAF4AIQBAMaBfwDHgOPAF64B9Fc6UCmCXjbdiDfJAJN1B/irGBX+DAzZ1QB2nAIeAp4WQX8WmBnj1Pi0eA0Dr4qR4XVgzGUANWHWL4JeBTxi4rZnAtXidR34gxgZ3gLu6d5xuk8BhQLmqoGcWDYQZgqIRAPA74UZ3nMZIAkEDxTEu7E4DDBZ54URjgF9rgGsI/gAUBwkeDNkkgEmZxL/FGZQLpPQzQBBgg8ApVbxiskGmKy7wJsqZRI6ZAFBgg8Az8RI8KrIF5JJnBBmUCqTUMEAQYIPAD8wmeBV0UxgrXhdB/4IvKxCJpHMKaAQeF50Sk6yGmHhFBBpJvGKMIPlmYQKDLBQ5OqmELwNDBCaSRwT00SfnQzwqDjL15lN8DYzQGgmcUyMDl/oaICHgQpxppcJIFJSChogXCbxF+BLlbMAOxG86plEFzCqQhYQJPjngedsSvC2ziRinQKCBF8NfFXnXlV8CohEnzDxm4Q0k4iXARaK4X2dKgTvGmCKevh/dVOfGQYIEnwA+LZqBO8awDCTeEcY4X4mEa0BTgKrVCZ41wARZxKvA9+fzgBGVcFL7R58B2USS4woPpw+dvvONvrYNYBrANcAoTp9+jRnzpxxtAFSnGqAkZER6uvruX37NitWrCAtLc0dAZxkgIMHD9LX18fAwACdnZ2OHQGM0sAlwDk79kZ/fz8FBQWMjIwAkJaWRldXFzk5OXY1wFLg39GmgR/ZtTcaGhruBx9gdHSUtrY2dwoI0ZfADTuC38mTJ6e8393dbVcgHAT+G4sBbMcBQfALp9bWVkZHRx1z9jvOAEHwCyebAqFrgCD47du3T/q9I0eOMDAw4BrAbgYIBb9wsiEQugYIB37hZDMgdLYBZODnACB0tgFk4OcAIDSMoawiyMdENWqqruA3ecUvVEuWLGFsbIyLFy9O+7kNVgjvADOYKAoh2pVAxB9+alfw6+joYPfu3XYGwk+DwY91CtB2GpCBX1VVFSUlJRQXF7N69Wq7AqE0drY0gAz8Zs2axaFDh+7/f+fOncycOdOOQOhMA8jAr6mpifnz59///9y5c9myZYsdgdB5BpCt+OXm5rJ9+/Yp72/evNkQ9jRdIXSeAWTgd/jwYWbMmDEt8e/atctuQOgsA8jAb+XKlVRUVIT9vKysjJKSEjsBoTR2kVwa9jAGvyerBH6LFy8OO/enpaVx7tw5Fi1a9MD7od+/dOkSq1atYmxs+tv45OTk0NXVpUsN4Vcmxy6WdQDQpDBEBn5bt26dEvzptGDBAjZu3GgHIByM5MSN9OLQ94Bvqgx+Rit+8+bN48KFC6Snp0/5bDrT3Lp1i9LSUq5cuRJ2NNFghfB9Jq7iJt4RQHkOkIHfwYMHpw2+0TpBU1OT7kAYUcy0N4AM/Px+P+vWrYt6u2vWrKGoqEhnILS/AUZGRqirqwv7uc/no6OjA48n+qvaPR4PLS0t+Hzhr49VfIXQ/gY4cOAA/f3hn/JSW1tLYWFhzNsvKCigurpaVyCMKGaRQuAK4O86gV9WVha9vb1kZWUZbkdWKzA4OEhZWRnXr1/XDQifBN62LQTW19cbgt/evXulwY9EmZmZbNu2TUcgNHUK+Ay4rRL4nTp1Kuzny5cvZ9OmTabtr6qqiqVLl+oEhLdFzEwzgDKFITLw83g8vPjii3i95j0S0ev1snv3bkOYVAwIpYUg0RpAmWlABn4bNmyguLjY9P0uW7aMyspKXYAw4lhFc5u43wIvqAx+GRkZ9Pb2kp2dHfE2oykYvXr1KqWlpQwNDakOhEeB9aFvxgOBSowAMvBraWmJKvjRavbs2YbTj0JAGHGstDGADPzy8/Njqv+PVjU1NeTl5akOhPYygAz8ANrb20lNtb56PSUlhebmZsPvKACE9jKADPwqKyspLy9PWHv8fr9hJbECQGgJBCalMEQGfrNmzaKnp+eBIs9oFOudQi9fvkx5eTnDw8MqAmEG0zxbIF4ITEphiAz8Qit8EyVZJXESgfAGUTxYwmvV0JII8AtX4ZsoySqJkwSEUcVIWQNEAn7hKnwTJVklcZKA0B4GkIFfeXm5YYVvolRWVobf71cJCPU3QH9/P/v37w/7eWpqKu3t7aii5uZmUlLC33Q1wReV6G8AGfjV19eTn5+vjAHy8vKoqalRBQj1NoAM/LKzs2lpaUE11dXVMWfOHEMg7O7u1t4Alt49NBLwO3ToEBkZGcoZID093bCSGKCtrS0RQGipASwtDJGBn9/vJxAIoKpklcQDAwMcOXLEyiZEXAgSVCyPjesDcq0AP6MVP5/Px9mzZ+Mq8pz2YEx+ZtD58+epqKjg7t27YVNHC1cILxnFJt6VQEs5QAZ+8Vb4JkqySuLR0VFaW1uVGP6VMYAM/LKystizZw+6qLGxkczMzLCfnzlzxiog1M8AkYDfnj17TKnwTZQyMzNpbGxMBhDqZwAZ+BUWFlJbW4tuqq6upqCgINFAqJcBZCt+Ho+Hjo4Ow8uzVJXP56OlpcWwkrizs9PsFUK9DCADv0AgYLjOrrqKiooMK4ktAEJ9DCADv4yMjAdu5aarduzYYXhpuslAmBADDDHx/HpLwc/qCt9ESVZJbCIQRlUIElRKHE57xCrwy83NZf369dy4YX0B0s2bNy3fR2VlJUePHg073weBsKGhIaFnP8S2EgjwKvBMrOBntOLnVJmwQnhSFhOzVgLj4gAZ+DlVJgBhTDFJqAFk4Od0xQmEahsgEvBzFRcQqm0AGfi5ehAIVYfAecAnLvgpBYQ5spiYCYFRFYa44Gc5EEZdCBLvCAAWFYYkWmYXhCRJ/cBC2ZfMHAHiSgVdma6YY+EawDWAawDXAK4BXAO4BnAN4BrANUDUO73n9n3SdS9ZBhgCvgW85sYgaXpNxGAoGQaAiceSfA/4DiF3pnZlqd4Gviv6/v04tuMx64a6bzFxe/JngQ/c+FimD0QfPwn8zYTtebwmN/AE8DjwIyy+kthh+gioEX17wsTtpngtaOw94DfAY8BPgWtu/GLWNdGHjwG/tgC6vV4LGz8GtDPxg9HP4gEVB2oIaBV91y760gp5vDY6GDso4SeNN4EHZ/Vwpnsun5Rp05uEg7UKaHRVUsHZm8QDNzul0U1KpM5eBTrCrEUNXaTU4plXoY4JLmu+APzHhoHvE8em1PK5V7FOuge8DBQAPwE+t0HgPxfH8g1xbErBr1fRThsDfgksApqBQQ0Df1O0fZE4FiXTX6/inTgE/Fx04i+AYQ0CPyza+jXRdqUXwLyanE3XgG3A14FfAXcUbOMd0bZ80VYtlsB1MUBQA8AmkTf/CRhXoE3joi2Pi7ZpVSmlmwGC6gGeA4qB7iS2oxt4QrSlR8eO1NUAQf0LeApYCbybwP2+K/b5FPCOzh2ouwGCegNYDqwFPrRwPx8C1WJfb9ih4+xigOBcfFysIWwhxoslw+gzsc0C4BVF2MM1gAGNdwJ5QFOcawiDwE6xrU5Fsw/XAAb5+AEmfls/EOUawuS/3a/J+oNrAIOzuImJhRnZWXwHeEl8N97RwzWAYro8aR4/HjKPT+aHH4vvOkJOMsBkkl8LFAmSf1P82+oMQknFc4cQ7WWTu4NErGnuEPKQow3glJN80nQXeu96z/8GADbnGQuxB6UeAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/release-butler.png":
/*!***************************************!*\
  !*** ./src/assets/release-butler.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "release-butler.png";

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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var packageJson = __webpack_require__(/*! ../../package.json */ "./package.json");
var environment = {
    appName: 'Angular Ngrx Material Starter',
    envName: 'DEV',
    production: false,
    test: false,
    i18nPrefix: '',
    versions: {
        app: packageJson.version,
        angular: packageJson.dependencies['@angular/core'],
        ngrx: packageJson.dependencies['@ngrx/store'],
        material: packageJson.dependencies['@angular/material'],
        bootstrap: packageJson.dependencies.bootstrap,
        rxjs: packageJson.dependencies.rxjs,
        ngxtranslate: packageJson.dependencies['@ngx-translate/core'],
        fontAwesome: packageJson.dependencies['@fortawesome/fontawesome-free'],
        angularCli: packageJson.devDependencies['@angular/cli'],
        typescript: packageJson.devDependencies['typescript'],
        cypress: packageJson.devDependencies['cypress']
    }
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nello\Desktop\Progetti\Front-End\Angular\Template\gitHub\turbo-giggle\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map