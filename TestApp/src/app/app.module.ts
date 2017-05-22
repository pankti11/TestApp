import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './services/DataService';
import { HttpModule } from '@angular/http';
import { MainPageComponent } from './app.mainpage/app.mainpage.component';
import { HighlightDirective } from './app.mainpage/highlight.directive';
import { RouterModule } from '@angular/router';
import { routing } from './router';
import { HomeComponent } from './home/app.home.component';
import { SharedService } from './services/SharedService';
import {EditorComponent} from './editor/editor.component';

@NgModule({
    imports: [BrowserModule, HttpModule, routing],
    declarations: [AppComponent, MainPageComponent, HighlightDirective, HomeComponent, EditorComponent],
    bootstrap: [AppComponent],
    providers: [DataService, SharedService]
})
export class AppModule { }
