import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PLANTS } from '../plants';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {
  plants = PLANTS;
  selectedPlant: Plant;
  constructor() { }

  ngOnInit() {
  }

  onSelect(plant: Plant) : void {
    this.selectedPlant = plant;
  }

}
