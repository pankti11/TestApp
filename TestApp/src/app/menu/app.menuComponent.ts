import { Component} from '@angular/core';
import { Http } from '@angular/http';
import { Inject } from "@angular/core";
import { SharedService } from '../services/SharedService';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'app/menu/menu.component.html'
})

export class MenuComponent {

    lines : any[];

    constructor( @Inject(SharedService) public service: SharedService, @Inject(Router) public router: Router) {
        this.service = service;
        this.router = router;
        this.lines = this.service.getLines();

        console.log("got lines");
        console.log(this.lines);


    }


    data: any[] = ["jhbshbkfbsdkgvbdsgv", "fdsanflksnkfnlksf", "fchkdfdsf"]

    send() {
        this.service.saveData('pankti');
        this.router.navigate(['/editor']);
    }

}