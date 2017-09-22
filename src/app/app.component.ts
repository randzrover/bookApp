import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { itemMenu } from './menu';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MenuService]
})
export class AppComponent implements OnInit {
  title = 'app works!';
  menuItem = 'nav-link'
  menulist : itemMenu[];
  menuSelected : itemMenu;

  constructor(private menuSrv: MenuService){}

  onSelect(item : itemMenu): void{
    this.menulist.forEach(h=> h.isSelected == false);
    this.menuSelected.isSelected = true;
  }
  collectMenus(): void{
    this.menuSrv.getMenus().then(m=> this.menulist = m);
    alert(this.menulist.length);
  }

  ngOnInit(): void{
    this.collectMenus();
  }
}
