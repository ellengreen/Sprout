import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Room } from 'src/app/shared/interfaces/room.interface';
import { AddPlantDialogComponent } from '../add-plant-dialog/add-plant-dialog.component';
import { PlantDetailDialogComponent } from '../plant-detail-dialog/plant-detail-dialog.component';

@Component({
  selector: 'app-room-carousel',
  templateUrl: './room-carousel.component.html',
  styleUrls: ['./room-carousel.component.scss']
})
export class RoomCarouselComponent implements OnInit {
  @Input() roomList: Room[];
  @Output() openDialog: EventEmitter<any> = new EventEmitter();
  responsiveOptions;

  constructor(public plantDialog: MatDialog, public plantDetailDialog: MatDialog) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 1,
        numScroll: 3
      }
    ];
  }

  ngOnInit(): void {
  }


  openPlantDialog(room: string) {
    this.plantDialog.open(AddPlantDialogComponent, {
      data: {
        roomKey: room
      }
    });
  }

  openPlantDetailDialog(plant: any) {
    this.plantDetailDialog.open(PlantDetailDialogComponent, {
      data: {
        plant: plant
      }
    });
  }
}
