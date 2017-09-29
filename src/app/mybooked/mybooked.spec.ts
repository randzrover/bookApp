import { TestBed, async } from '@angular/core/testing';
import { gisService } from '../services/gis.service';
import { MyBookedComponent } from './mybooked.component'
import { Http,Response, ResponseOptions } from '@angular/http';


describe('Component: MyBokcomponent',() =>{
    let book :MyBookedComponent;
    let service : gisService;
    let _http : Http;
    let _get : ResponseOptions;

    TestBed.configureTestingModule({
        providers:[gisService],
        imports:[Http, Response]
    });

    beforeEach(()=>{
        book = new MyBookedComponent(service);
        service = new gisService(_http);
       
    })

    it('should defined testFN()',()=> {
        expect(book.testFN()).toBeDefined();
    });
    // it('should defined getAddressInfo()',()=> {
    //     expect(book.getAddressInfo()).toBeDefined();
    // });
});