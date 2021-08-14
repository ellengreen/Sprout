import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/shared/interfaces/room.interface';
import { PlantDatabaseService } from 'src/app/shared/services/plant-database.service';
import { map } from 'rxjs/operators/';

@Component({
  selector: 'app-plant-list-container',
  templateUrl: './plant-list-container.component.html',
  styleUrls: ['./plant-list-container.component.scss']
})
export class PlantListContainerComponent implements OnInit {
  roomList: Room[];

  constructor(private plantDatabaseService: PlantDatabaseService) { }

  ngOnInit(): void {
    this.roomList = this.getAllPlants();
  }

  getAllPlants() {
    this.plantDatabaseService.getAllRooms().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      this.roomList = customers;
    });
    return this.roomList;
  }

}
