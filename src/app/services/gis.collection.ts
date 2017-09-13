import { Component, Input } from '@angular/core';

import { GIS } from './gis';

@Component({
    selector: 'menu-root',
    templateUrl: './menu.html'
})

export class GISComponent{
    @Input() gis:GIS;
}