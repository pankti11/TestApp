import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/app.component.editor';
import { MenuComponent } from './menu/app.menuComponent';
import { HomeComponent } from './home/app.home.component'; 

const appRoutes: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'editor', component: EditorComponent },
    { path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);