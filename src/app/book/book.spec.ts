import { BookComponent } from './book.component'

describe('BookComponent',()=>{
    it('should be defined the Initialization',()=>{
        let book = new BookComponent();
        expect(book.ngOnInit()).not.toBeDefined();
    });
    it('should be contain alt',()=>{
        let book = new BookComponent();
        expect(book.altImage).toContain('FULL Image');
    });
});