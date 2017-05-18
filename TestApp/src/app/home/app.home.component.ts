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

    initiallCall() {
        this.dataService.getItems()
            .subscribe(data => {
                //alert(data);
                this.name = data;
                console.log(this.name)
            });
    }

    getFileData(path: string) {
        this.dataService.getFileData(path).subscribe(data => {
            this.service.setLines(JSON.parse(data));   
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
        this.getFileData(path);
        this.router.navigate(['/menu']);

    }

}

