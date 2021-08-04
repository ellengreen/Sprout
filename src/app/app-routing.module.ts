import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapViewComponent } from './explore-shops/map-view/map-view.component';
import { PlantListContainerComponent } from './containers/plant-list-container/plant-list-container.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'plants', component: PlantListContainerComponent
  },
  {
    path: 'map', component: MapViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
