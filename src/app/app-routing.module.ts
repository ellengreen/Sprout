import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantDetailsComponent } from './plant-details/plant-details.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'plants', component: PlantListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
