import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BookComponent } from './book/book.component';
import { MyBookedComponent } from './mybooked/mybooked.component';

import { MenuComponents } from './menu.collection';
import { MenuService } from './menu.service';
import { gisService } from './services/gis.service';

const appRoutes : Routes = [
{ path: 'Home', component: AppComponent},
{ path: 'About', component: AboutComponent },
{ path: 'Book', component: BookComponent },
{ path: 'MyBooked', component: MyBookedComponent },
{ path: '', redirectTo:'/Book', pathMatch: 'full'},
{ path: '#', redirectTo:'/Book', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BookComponent,
    MyBookedComponent,
    MenuComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [MenuService, gisService],
  bootstrap: [AppComponent,AboutComponent,BookComponent,MyBookedComponent,MenuComponents]
})


export class AppModule { }