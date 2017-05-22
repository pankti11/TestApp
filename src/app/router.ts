import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/app.home.component'; 
import { MainPageComponent } from './app.mainpage/app.mainpage.component';
import { EditorComponent } from './editor/editor.component';


const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'data', component: MainPageComponent },
    { path: 'editor', component: EditorComponent },
    { path: '', pathMatch:"prefix", redirectTo: '/home' }
];


export const routing = RouterModule.forRoot(appRoutes);