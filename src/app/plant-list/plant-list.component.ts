import { Component, OnInit } from '@angular/core';
import { Plants } from '../plants';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {

  plants = Plants;
  constructor() { }

  ngOnInit() {
  }

}
