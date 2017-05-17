import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './DataService';
import { HttpModule } from '@angular/http';
import { MainPageComponent } from './app.mainpage/app.mainpage.component';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [AppComponent, MainPageComponent],
    bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
