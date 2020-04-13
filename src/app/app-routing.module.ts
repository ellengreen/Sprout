import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './my-plants/plant-list/plant-list.component';
import { MapViewComponent } from './explore-shops/map-view/map-view.component';
import { CreditsComponent } from './credits/credits.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'plants', component: PlantListComponent
  },
  {
    path: 'map', component: MapViewComponent
  },
  {
    path: 'credits', component: CreditsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
