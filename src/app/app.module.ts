import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './my-plants/plant-list/plant-list.component';
import { MapViewComponent } from './explore-shops/map-view/map-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantFormComponent } from './my-plants/plant-form/plant-form.component';
import { WeatherComponent } from './explore-shops/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlantListComponent,
    MapViewComponent,
    PlantFormComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKi-ZfdztsvTQAWMjq8WUF2lwPhzvVcM0'
    }),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
