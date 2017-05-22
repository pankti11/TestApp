import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { Inject } from "@angular/core";
import { Input } from "@angular/core";
import { OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { SharedService } from '../SharedService';

@Component({
  selector: 'my-editor',
  templateUrl: './app.component.editor.html'
})

export class EditorComponent {
    menuData: string;

    constructor(@Inject(SharedService) public sharedService: SharedService, @Inject(Router) public router: Router) {
        this.sharedService = sharedService;
	this.menuData = this.sharedService.getSavedLines();
    }

    submit(data:string){

    alert("submission completed");
    }
}