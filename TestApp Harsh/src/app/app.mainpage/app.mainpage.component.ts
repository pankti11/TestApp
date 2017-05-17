import { Component,Input } from "@angular/core";
import { Http } from '@angular/http';
import { DataService } from "../DataService";
import { Inject } from "@angular/core";

@Component({
    selector: 'app',
    templateUrl: './mainpage.html'
})

export class MainPageComponent {
    @Input() label: string;
    @Input() lines: any;

    constructor( @Inject(DataService) public dataService: DataService) {
        this.dataService = dataService;
        this.lines, this.label = this.dataService.getvar();
        
    }
}