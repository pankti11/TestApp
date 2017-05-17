import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from "./DataService";
import { Inject } from "@angular/core";
import { TodoItem } from "./TodoItem";

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>`
})

export class AppComponent {
    name: string;
    constructor( @Inject(DataService) public dataService: DataService) {
        this.dataService = dataService;
    }
    
    ngOnInit() {
        this.dataService.getItems()
            .subscribe(data => {
                alert(data);
                this.name = data;
                console.log(this.name)
            });
    }
}
