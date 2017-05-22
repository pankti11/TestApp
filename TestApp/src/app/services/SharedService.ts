import { Component, Injectable } from '@angular/core'

// Name Service
export interface myData {
    name: string;
}

@Injectable()
export class SharedService {
    sharingData: string;
    savedLines:string;
    lines: any;

    saveData(str: string) {
        console.log('save data function called' + str);
        this.sharingData = str;
    }

    saveLines(comingLines:string){
        this.savedLines = comingLines;
    }

    getSavedLines():string{
        return this.savedLines;
    }

    getData(): string {
        return this.sharingData;
    }

    setLines(comingData: any) {
        this.lines = comingData;
        return "sucess";
    }

    getLines(): any{
        console.log(this.lines);
        return this.lines;
    }


}