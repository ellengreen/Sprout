import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantListContainerComponent } from './containers/plant-list-container/plant-list-container.component';
import { DeadPlantsContainerComponent } from './containers/dead-plants-container/dead-plants-container.component';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'plants', component: PlantListContainerComponent
  },
  {
    path: 'obituary', component: DeadPlantsContainerComponent
  },
  {
    path: 'profile', component: ProfileContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
