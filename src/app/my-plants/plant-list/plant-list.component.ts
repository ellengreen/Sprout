import { Component, OnInit, Input} from '@angular/core';
import { Plant } from '../plant';
import { PLANTS } from '../plants';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {
  plantList = PLANTS;
  @Input() plants: Plant[];

  selectedPlant: Plant;
  newName: string;
  newLocation: string;
  newLight: string;
  newWater: string;
  newDate: string;


  constructor() { }

  ngOnInit() {
  }

  addPlant(){
    let plant = new Plant(this.newName, this.newLocation, this.newLight, this.newWater, this.newDate)
    this.plantList.push(plant);
  }

  onSelect(plant: Plant) : void {
    this.selectedPlant = plant;
  }

}
