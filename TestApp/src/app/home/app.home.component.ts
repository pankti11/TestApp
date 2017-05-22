﻿import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Inject } from "@angular/core";
import { Router } from '@angular/router';
import { DataService } from '../services/DataService';
import { SharedService } from '../services/SharedService';
interface lines {

}

@Component({
    templateUrl: './app.home.component.html'
})
export class HomeComponent {
    name: string;
   
    showdiv: boolean = false;
    header: any = [];
    constructor( @Inject(DataService) public dataService: DataService, @Inject(SharedService) public sharedService: SharedService, @Inject(Router) public router: Router) {
        this.dataService = dataService;
    }

    

    initiallCall() {
        this.dataService.getItems()
            .subscribe(data => {
                //alert(data);
                this.name = data;
                console.log(this.name)
            });
    }

    getFileData(path: string) {
        this.dataService.getFileData(path).subscribe((data: any) => {
            let content = data.data;
            let head = data.header
            //var lines = content.split(",");
            //let cont = ;
            // let hd = JSON.parse(head);
            let obj: lines = JSON.parse(content);
            //this.header = hd;
            this.sharedService.setLines(obj);
            console.log("Done");
            this.router.navigate(['/data']);
        });
    }

    fileChanged(event?: any) {
        var target: any = event.target || event.srcElement;
        console.log(target.files);
        var input: any = document.getElementById('fileInput');
        var file = input.files[0];
        console.log(file);
    }

    onClick() {
        var ele: any = document.getElementById('fileInput');
        var path = ele.value;
        if (path === "") {
            alert("Please choose file to upload");
        }
        else {
            this.getFileData(path);
        }
       
    }


}

