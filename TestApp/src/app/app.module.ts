import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routing } from './router';
import { SharedService } from './services/SharedService';
import { HttpModule } from '@angular/http';
import { MenuComponent } from './menu/app.menuComponent';
import { EditorComponent } from './editor/app.component.editor'
import { SPAComponent } from './spa/app.spa.component';
import { HomeComponent } from './home/app.home.component';
import { DataService } from './services/DataService';


@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [SPAComponent, MenuComponent, EditorComponent, HomeComponent],
    bootstrap: [SPAComponent],
    providers: [SharedService, DataService]
})
export class AppModule {}