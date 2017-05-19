import { Component,Input } from "@angular/core";
import { Http } from '@angular/http';
import { DataService } from "../DataService";
import { Inject } from "@angular/core";
import { SharedService } from '../SharedService';

@Component({
    //selector: 'app',
    templateUrl: './mainpage.html',
    styleUrls: ['./mainpage.css']
})

export class MainPageComponent {
    lines: any;
    header: any;
    public showTooltip: boolean = false;

    constructor( @Inject(DataService) public dataService: DataService, @Inject(SharedService) public sharedService: SharedService) {
        this.dataService = dataService;
        this.lines = this.sharedService.getLines();   
        console.log(this.lines)
    }

    showthis(id?: any) {
        var tooltip = document.getElementById("tooltip");
        var obj = document.getElementById(id);
        tooltip.innerHTML = this.createText(this.header);//this.header;//obj.innerHTML;
    tooltip.style.display = "block";
    tooltip.style.top = obj.offsetTop + obj.offsetHeight + "px";
    tooltip.style.left = obj.offsetLeft + obj.innerHTML.length + "px";
}

    hidethis(id?: any) {
        var tooltip = document.getElementById("tooltip");
        var obj = document.getElementById(id);
    tooltip.style.display = "none";
    tooltip.style.top = "-9999px";
    tooltip.style.left = "-9999px";
    }
    createText(data: any): any {
        var htmlText: string = ""
        //htmlText += '<div>';
        for (var key in data) {
            htmlText +=  data[key] + '<br\>';
        }
        return htmlText;
    }
}