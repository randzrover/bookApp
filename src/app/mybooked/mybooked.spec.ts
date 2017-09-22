import { TestBed, async } from '@angular/core/testing';
import { gisService } from '../services/gis.service';
import { MyBookedComponent } from './mybooked.component'
import { Http,Response } from '@angular/http';


describe('Component: MyBokcomponent',() =>{
    let book :MyBookedComponent;
    let service : gisService;

    TestBed.configureTestingModule({
        providers:[gisService],
        imports:[Http, Response]
    });

    beforeEach(()=>{
        book = new MyBookedComponent(service);
    })

    it('should defined testFN()',()=> {
        expect(book.testFN()).toBeDefined();
    });
});