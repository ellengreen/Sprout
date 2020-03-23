import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Plants } from '../plants';

@Component({
  selector: 'app-plant-details',
  templateUrl: './plant-details.component.html',
  styleUrls: ['./plant-details.component.scss']
})
export class PlantDetailsComponent implements OnInit {

  plant;
  constructor(
    private route:
    ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.plant = Plants[+params.get('plantId')];
    })
  }

}
