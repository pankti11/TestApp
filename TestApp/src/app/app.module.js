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
var router_1 = require("./router");
var SharedService_1 = require("./services/SharedService");
var http_1 = require("@angular/http");
var app_menuComponent_1 = require("./menu/app.menuComponent");
var app_component_editor_1 = require("./editor/app.component.editor");
var app_spa_component_1 = require("./spa/app.spa.component");
var app_home_component_1 = require("./home/app.home.component");
var DataService_1 = require("./services/DataService");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, router_1.routing],
        declarations: [app_spa_component_1.SPAComponent, app_menuComponent_1.MenuComponent, app_component_editor_1.EditorComponent, app_home_component_1.HomeComponent],
        bootstrap: [app_spa_component_1.SPAComponent],
        providers: [SharedService_1.SharedService, DataService_1.DataService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map