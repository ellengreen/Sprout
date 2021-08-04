import { Component, Input, OnChanges } from '@angular/core';
import { PlantDatabaseService } from 'src/app/services/plant-database.service';
import { Room } from 'src/app/interfaces/room.interface';
import { MatDialog } from '@angular/material';
import { AddRoomDialogComponent } from 'src/app/components/add-room-dialog/add-room-dialog.component';
import { AddPlantDialogComponent } from 'src/app/components/add-plant-dialog/add-plant-dialog.component';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})

export class PlantListComponent implements OnChanges {
  @Input() roomList: Room[];

  userRooms: Room[];

  constructor(public plantDatabaseService: PlantDatabaseService, public roomDialog: MatDialog, public plantDialog: MatDialog) {
  }

  ngOnChanges() {
    console.log(this.roomList)
  }

  openDialog() {
    const dialogRef = this.roomDialog.open(AddRoomDialogComponent);
  }

  openPlantDialog(room: string) {
    this.plantDialog.open(AddPlantDialogComponent, {
      data: {
        roomKey: room
      }
    });
  }

  countPlants(room: Room): number {
    return Object.keys(room.plants)?.length
  }
}
