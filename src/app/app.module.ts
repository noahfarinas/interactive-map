// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { CountryInfoComponent } from '../country-info/country-info.component';
// import { MapComponent } from '../map/map.component';
// import { ApiService } from './api.service';
// import { TestComponent } from '../test/test.component';

// @NgModule({
//   declarations: [AppComponent, CountryInfoComponent, MapComponent, TestComponent,],
//   imports: [
//     BrowserModule,
//     RouterModule.forRoot([
//       { path: '', component: AppComponent },
//       { path: 'country-info', component: CountryInfoComponent },
//     ]),
//   ],
//   providers: [ApiService], 
//   bootstrap: [AppComponent], 
// })
// export class AppModule {} 

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [AppComponent, MapComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}