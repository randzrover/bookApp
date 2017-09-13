import { Component , OnInit, Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { GIS,Candidates } from '../services/gis';
import { gisService } from '../services/gis.service';

@Component({
  selector: 'mybooked-root',
  templateUrl: './mybooked.component.html',
  styleUrls: ['./mybooked.component.css'],
  providers: [gisService]
})
export class MyBookedComponent implements OnInit {
  title = 'my-booked works!';
  constructor(private GISService: gisService){}
  addressList : Candidates;

  // getGIS(): Promise<GIS[]>{
  //   return this.addressList = this.GISService.getAddressInfo();
  // }

  getAddressInfo(){
    this.GISService.getAddInfo().subscribe((ret)=> this.addressList = ret.candidates as Candidates);
  }
  catchResult(result: any): void{
    //alert('test');
  }

  private handleError(error: any): Promise<any> {
        alert(error);
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

  ngOnInit(){
     this.getAddressInfo();
  }
}
