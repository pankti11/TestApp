"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SharedService = (function () {
    function SharedService() {
    }
    SharedService.prototype.saveData = function (str) {
        console.log('save data function called' + str);
        this.sharingData = str;
    };
    SharedService.prototype.getData = function () {
        return this.sharingData;
    };
    SharedService.prototype.setLines = function (comingData) {
        this.lines = comingData;
        return "sucess";
    };
    SharedService.prototype.getLines = function () {
        console.log(this.lines);
        return this.lines;
    };
    SharedService.prototype.setHeader = function (comingData) {
        this.header = comingData;
        return "sucess";
    };
    SharedService.prototype.getHeader = function () {
        console.log(this.header);
        return this.header;
    };
    SharedService.prototype.saveLines = function (comingLines) {
        this.savedLines = comingLines;
    };
    SharedService.prototype.getSavedLines = function () {
        return this.savedLines;
    };
    return SharedService;
}());
SharedService = __decorate([
    core_1.Injectable()
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=SharedService.js.map