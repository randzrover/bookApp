import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { GIS,Candidates } from './gis';
import { GISMock } from './gis.mock';

@Injectable()
export class gisService{
    gisURL = "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/findAddressCandidates?Address=kello%20school,%20Wichita%20KS&outFields=AddrNum,StName,City,Postal,Subregion,Country&forStorage=false&f=pjson";
    collectedAddress: Observable<GIS[]>;
    test : any[];
    constructor(private _http: Http) { }
    getAddressInfo(): Promise<GIS[]>{
        return Promise.resolve(GISMock);
    }

    getAddInfo(){
        return this._http.get(this.gisURL)
        .map((resp:Response)=> resp.json());
    }
    
    private handleError(error: any): Promise<any> {
        alert(error);
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private handleSuccess(success:any): Promise<GIS[]>{
        return success;
    }
}
