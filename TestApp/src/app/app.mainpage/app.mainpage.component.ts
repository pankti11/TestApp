import { Component,Input } from "@angular/core";
import { Http } from '@angular/http';
import { DataService } from "../services/DataService";
import { Inject } from "@angular/core";
import { Router } from '@angular/router';
import { SharedService } from '../services/SharedService';

@Component({
    //selector: 'app',
    templateUrl: './mainpage.html',
    styleUrls: ['./mainpage.css']
})

export class MainPageComponent {
    lines: any;
    header: any;
    dragedLines : any[];
    public showTooltip: boolean = false;

    constructor( @Inject(DataService) public dataService: DataService, @Inject(SharedService) public sharedService: SharedService,@Inject(Router) public router: Router) {
        this.dataService = dataService;
        this.router = router;
        this.lines = this.sharedService.getLines();   
        console.log(this.lines)
    }

    send(){

    var dropedContent = document.getElementById('dropedContent');
    var text = dropedContent.innerText;
    var items = dropedContent.getElementsByTagName("p");
    this.dragedLines = []
        for(var i = 0; i < items.length; ++i) {
            var li = items[i].id;
            var liText = document.getElementById(li);
            this.dragedLines.push(liText.innerHTML);
        }
    this.sharedService.saveLines(this.dragedLines.join("\n"));
    this.router.navigate(['/editor']);
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