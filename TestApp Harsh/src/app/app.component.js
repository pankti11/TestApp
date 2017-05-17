"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DataService_1 = require("./DataService");
var core_2 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.showdiv = false;
        this.dataService = dataService;
    }
    AppComponent.prototype.initiallCall = function () {
        var _this = this;
        this.dataService.getItems()
            .subscribe(function (data) {
            //alert(data);
            _this.name = data;
            console.log(_this.name);
        });
    };
    AppComponent.prototype.getFileData = function (path) {
        var _this = this;
        this.dataService.getFileData(path).subscribe(function (data) {
            var content = data;
            //var lines = content.split(",");
            _this.lines = JSON.parse(data);
            console.log("Done");
        });
        this.initiallCall();
    };
    AppComponent.prototype.fileChanged = function (event) {
        var target = event.target || event.srcElement;
        console.log(target.files);
        var input = document.getElementById('fileInput');
        var file = input.files[0];
        console.log(file);
    };
    AppComponent.prototype.onClick = function () {
        var ele = document.getElementById('fileInput');
        var path = ele.value;
        this.getFileData(path);
        this.showdiv = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app.component.html'
    }),
    __param(0, core_2.Inject(DataService_1.DataService)),
    __metadata("design:paramtypes", [DataService_1.DataService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map