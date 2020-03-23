import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './my-plants/plant-list/plant-list.component';
import { PlantDetailsComponent } from './my-plants/plant-details/plant-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlantListComponent,
    PlantDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
