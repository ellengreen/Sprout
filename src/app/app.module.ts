import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './my-plants/plant-list/plant-list.component';
import { MapViewComponent } from './explore-shops/map-view/map-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlantListComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBKi-ZfdztsvTQAWMjq8WUF2lwPhzvVcM0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
