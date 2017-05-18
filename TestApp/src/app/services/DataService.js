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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.http = http;
        //this.headers = new Headers({
        //    'Content-Type': 'application/json',
        //    'Accept': 'q=0.8;application/json;q=0.9'});
        // this.options = new RequestOptions({ headers: this.headers });
    }
    // getItems(): Observable<TodoItem> { return this.http.get('/api/home/getData').map((res: Response) => res.json()); }
    DataService.prototype.getItems = function () {
        return this.http.get('/Home/GetData').map(function (res) { return res.json().Name; });
    };
    DataService.prototype.getFileData = function (filePath) {
        var searchParams = new http_1.URLSearchParams();
        searchParams.set("path", filePath); //"C:/Users/310285056/Desktop/LeavingConfigMode.feature" );
        var options = new http_1.RequestOptions({
            search: searchParams
        });
        return this.http
            .get('/Home/ReadFile', options)
            .map(function (res) { return res.json().data; });
    };
    // return this.http.get('/Home/ReadFile', "C:/Users/310285056/Desktop/LeavingConfigMode.feature").map((res: Response) => res.json().content);
    DataService.prototype.savevar = function (lines, name) {
        this.sharedVar = lines;
        this.sharedName = name;
    };
    DataService.prototype.getvar = function () {
        return this.sharedVar, this.sharedName;
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject(http_1.Http)),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=DataService.js.map