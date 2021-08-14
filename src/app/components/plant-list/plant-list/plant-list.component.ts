import { Component, Input, OnChanges } from '@angular/core';
import { PlantDatabaseService } from 'src/app/shared/services/plant-database.service';
import { Room } from 'src/app/shared/interfaces/room.interface';
import { MatDialog } from '@angular/material';
import { AddRoomDialogComponent } from 'src/app/components/add-room-dialog/add-room-dialog.component';
import { AddPlantDialogComponent } from 'src/app/components/add-plant-dialog/add-plant-dialog.component';
import { PlantDetailDialogComponent } from 'src/app/components/plant-detail-dialog/plant-detail-dialog.component';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})

export class PlantListComponent implements OnChanges {
  @Input() roomList: Room[];

  userRooms: Room[];

  constructor(public plantDatabaseService: PlantDatabaseService, public roomDialog: MatDialog) {
  }

  ngOnChanges() {
  }

  openDialog() {
    const dialogRef = this.roomDialog.open(AddRoomDialogComponent);
  }

}
