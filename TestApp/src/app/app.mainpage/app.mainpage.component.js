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
var DataService_1 = require("../services/DataService");
var core_2 = require("@angular/core");
var router_1 = require("@angular/router");
var SharedService_1 = require("../services/SharedService");
var MainPageComponent = (function () {
    function MainPageComponent(dataService, sharedService, router) {
        this.dataService = dataService;
        this.sharedService = sharedService;
        this.router = router;
        this.showTooltip = false;
        this.dataService = dataService;
        this.router = router;
        this.lines = this.sharedService.getLines();
        console.log(this.lines);
    }
    MainPageComponent.prototype.send = function () {
        var dropedContent = document.getElementById('dropedContent');
        var text = dropedContent.innerText;
        var items = dropedContent.getElementsByTagName("p");
        this.dragedLines = [];
        for (var i = 0; i < items.length; ++i) {
            var li = items[i].id;
            var liText = document.getElementById(li);
            this.dragedLines.push(liText.innerHTML);
        }
        this.sharedService.saveLines(this.dragedLines.join("\n"));
        this.router.navigate(['/editor']);
    };
    MainPageComponent.prototype.showthis = function (id) {
        var tooltip = document.getElementById("tooltip");
        var obj = document.getElementById(id);
        tooltip.innerHTML = this.createText(this.header); //this.header;//obj.innerHTML;
        tooltip.style.display = "block";
        tooltip.style.top = obj.offsetTop + obj.offsetHeight + "px";
        tooltip.style.left = obj.offsetLeft + obj.innerHTML.length + "px";
    };
    MainPageComponent.prototype.hidethis = function (id) {
        var tooltip = document.getElementById("tooltip");
        var obj = document.getElementById(id);
        tooltip.style.display = "none";
        tooltip.style.top = "-9999px";
        tooltip.style.left = "-9999px";
    };
    MainPageComponent.prototype.createText = function (data) {
        var htmlText = "";
        //htmlText += '<div>';
        for (var key in data) {
            htmlText += data[key] + '<br\>';
        }
        return htmlText;
    };
    return MainPageComponent;
}());
MainPageComponent = __decorate([
    core_1.Component({
        //selector: 'app',
        templateUrl: './mainpage.html',
        styleUrls: ['./mainpage.css']
    }),
    __param(0, core_2.Inject(DataService_1.DataService)), __param(1, core_2.Inject(SharedService_1.SharedService)), __param(2, core_2.Inject(router_1.Router)),
    __metadata("design:paramtypes", [DataService_1.DataService, SharedService_1.SharedService, router_1.Router])
], MainPageComponent);
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=app.mainpage.component.js.map