import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from '../services/DataService';
import { SharedService } from '../services/SharedService';
import { Inject } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    templateUrl: './app.home.component.html'
})

export class HomeComponent {
    name: string;
    lines: any[];
    showdiv: boolean = false;

    constructor( @Inject(DataService) public dataService: DataService, @Inject(SharedService) public service: SharedService, @Inject(Router) public router: Router) {
        this.dataService = dataService;
        this.service = service;
        this.router = router;
    }


    fileChanged(event?: any) {
        var target: any = event.target || event.srcElement;
        console.log(target.files);
        var input: any = document.getElementById('fileInput');
        var file = input.files[0];
        console.log(file);
    }

    
     uploadData() {
        var a = null ;
        var ele: any = document.getElementById('fileInput');
        var path = ele.value;
        this.service.setLines(this.dataService.getFileData(path));
        //pro.then(function (data) {
        //    this.service.setLines(JSON.parse(data));
        //    this.router.navigate(['/menu']);
        //}, function () {
        //    console.log("error");
        //    });
    }

}

