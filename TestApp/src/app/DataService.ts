import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TodoItem } from './TodoItem';

@Injectable()
export class DataService {
    constructor( @Inject(Http) public http: Http) {
        this.http = http;
    }

   // getItems(): Observable<TodoItem> { return this.http.get('/api/home/getData').map((res: Response) => res.json()); }

    getItems() {
        return this.http.get('/Home/GetData').map((res: Response) => res.json().Name);
    }


}