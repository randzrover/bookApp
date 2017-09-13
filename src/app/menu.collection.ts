import { Component, Input } from '@angular/core';

import { itemMenu } from './menu';

@Component({
    selector: 'menu-root',
    templateUrl: './menu.html'
})

export class MenuComponents{
    @Input() menu:itemMenu;
}

