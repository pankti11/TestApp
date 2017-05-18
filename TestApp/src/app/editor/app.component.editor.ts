import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Inject } from "@angular/core";
import { SharedService } from '../services/SharedService';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'app/editor/app.component.editor.html'
})

export class EditorComponent {

    recievedData: string
    constructor( @Inject(SharedService) public service: SharedService, @Inject(Router) public router: Router) {
        this.service = service;
        this.router = router;
        this.recievedData = this.service.getData();
        console.log(this.recievedData)
    }



}