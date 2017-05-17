import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from "./DataService";
import { Inject } from "@angular/core";
import { TodoItem } from "./TodoItem";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
    name: string;
    lines: any[];
    showdiv: boolean = false;
    constructor( @Inject(DataService) public dataService: DataService) {
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
        this.dataService.getFileData(path).subscribe(data => {
            let content = data;
            //var lines = content.split(",");
            this.lines = JSON.parse(data);
            console.log("Done");
        });

        this.initiallCall();
    }

    fileChanged(event?:any) {
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
        this.showdiv = true;
    }
        
}
