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
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var DataService_1 = require("../services/DataService");
var SharedService_1 = require("../services/SharedService");
var HomeComponent = (function () {
    function HomeComponent(dataService, sharedService, router) {
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.router = router;
        this.showdiv = false;
        this.header = [];
        this.dataService = dataService;
    }
    HomeComponent.prototype.initiallCall = function () {
        var _this = this;
        this.dataService.getItems()
            .subscribe(function (data) {
            //alert(data);
            _this.name = data;
            console.log(_this.name);
        });
    };
    HomeComponent.prototype.getFileData = function (path) {
        var _this = this;
        this.dataService.getFileData(path).subscribe(function (data) {
            var content = data.data;
            var head = data.header;
            //var lines = content.split(",");
            //let cont = ;
            // let hd = JSON.parse(head);
            var obj = JSON.parse(content);
            //this.header = hd;
            _this.sharedService.setLines(obj);
            console.log("Done");
            _this.router.navigate(['/data']);
        });
    };
    HomeComponent.prototype.fileChanged = function (event) {
        var target = event.target || event.srcElement;
        console.log(target.files);
        var input = document.getElementById('fileInput');
        var file = input.files[0];
        console.log(file);
    };
    HomeComponent.prototype.onClick = function () {
        var ele = document.getElementById('fileInput');
        var path = ele.value;
        if (path === "") {
            alert("Please choose file to upload");
        }
        else {
            this.getFileData(path);
        }
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        templateUrl: './app.home.component.html'
    }),
    __param(0, core_2.Inject(DataService_1.DataService)), __param(1, core_2.Inject(SharedService_1.SharedService)), __param(2, core_2.Inject(router_1.Router)),
    __metadata("design:paramtypes", [DataService_1.DataService, SharedService_1.SharedService, router_1.Router])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=app.home.component.js.map