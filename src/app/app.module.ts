import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PlantListComponent } from './components/plant-list/plant-list/plant-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatDialogModule, MatFormFieldModule, MatGridListModule, MatIconModule, MatInputModule, MatNativeDateModule, MatSelectModule, MatToolbarModule, MatTooltipModule } from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { PlantListContainerComponent } from './containers/plant-list-container/plant-list-container.component';
import { AddRoomDialogComponent } from './components/add-room-dialog/add-room-dialog.component';
import { AddPlantDialogComponent } from './components/add-plant-dialog/add-plant-dialog.component';
import { PlantDetailDialogComponent } from './components/plant-detail-dialog/plant-detail-dialog.component';
import { CarouselModule } from 'primeng/carousel';
import { AddRoomButtonComponent } from './components/add-room-button/add-room-button.component';
import { DeadPlantsContainerComponent } from './containers/dead-plants-container/dead-plants-container.component';
import { ProfileContainerComponent } from './containers/profile-container/profile-container.component';
import { DeadPlantsComponent } from './components/dead-plants/dead-plants.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RoomCarouselComponent } from './components/room-carousel/room-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlantListComponent,
    NavComponent,
    PlantListContainerComponent,
    AddRoomDialogComponent,
    AddPlantDialogComponent,
    PlantDetailDialogComponent,
    AddRoomButtonComponent,
    DeadPlantsContainerComponent,
    ProfileContainerComponent,
    DeadPlantsComponent,
    ProfileComponent,
    RoomCarouselComponent
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
    HttpClientModule,
    MatButtonModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    CarouselModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
