import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { TodoItem } from './TodoItem';

@Injectable()
export class DataService {
    public sharedVar: any;
    public sharedName: string;
    constructor( @Inject(Http) public http: Http) {
        this.http = http;
        //this.headers = new Headers({
        //    'Content-Type': 'application/json',
        //    'Accept': 'q=0.8;application/json;q=0.9'});
       // this.options = new RequestOptions({ headers: this.headers });
    }
   
   // getItems(): Observable<TodoItem> { return this.http.get('/api/home/getData').map((res: Response) => res.json()); }

    getItems() {
        return this.http.get('/Home/GetData').map((res: Response) => res.json().Name);
    }

    getFileData(filePath: string): any{
        var lines: any;
        let searchParams = new URLSearchParams();
        searchParams.set("path", filePath);//"C:/Users/310285056/Desktop/LeavingConfigMode.feature" );
        let options = new RequestOptions({
            search: searchParams
        });
        return this.http
            .get('/Home/ReadFile', options)
            .map((res: Response) => {
                let data = res.json();
                if (data) {
                   lines = data;
                }
                return lines;
            });
        }  
       // return this.http.get('/Home/ReadFile', "C:/Users/310285056/Desktop/LeavingConfigMode.feature").map((res: Response) => res.json().content);
    savevar(lines:any, name : string) {
        this.sharedVar = lines;
        this.sharedName = name;
    }

    getvar() {
        return this.sharedVar, this.sharedName;
    }


}