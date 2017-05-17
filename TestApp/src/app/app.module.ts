import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DataService } from './DataService';
import { HttpModule } from '@angular/http';
@NgModule({
    imports: [BrowserModule, HttpModule],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent],
  providers: [DataService]
})
export class AppModule { }
