import { Injectable } from '@angular/core';

import { itemMenu } from './menu';
import{ ITEMMENUS } from './menu.mock';

@Injectable()
export class MenuService{
    getMenus(): Promise<itemMenu[]>{
        return Promise.resolve(ITEMMENUS);
    };
}
