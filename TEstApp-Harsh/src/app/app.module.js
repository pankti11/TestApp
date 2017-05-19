"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var DataService_1 = require("./DataService");
var http_1 = require("@angular/http");
var app_mainpage_component_1 = require("./app.mainpage/app.mainpage.component");
var highlight_directive_1 = require("./app.mainpage/highlight.directive");
var router_1 = require("./router");
var app_home_component_1 = require("./home/app.home.component");
var SharedService_1 = require("./SharedService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.routing],
        declarations: [app_component_1.AppComponent, app_mainpage_component_1.MainPageComponent, highlight_directive_1.HighlightDirective, app_home_component_1.HomeComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [DataService_1.DataService, SharedService_1.SharedService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map