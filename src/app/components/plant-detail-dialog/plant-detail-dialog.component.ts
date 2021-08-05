import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Plant } from 'src/app/interfaces/plant';

@Component({
  selector: 'app-plant-detail-dialog',
  templateUrl: './plant-detail-dialog.component.html',
  styleUrls: ['./plant-detail-dialog.component.scss']
})
export class PlantDetailDialogComponent implements OnInit {
  plantValue: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.plantValue = [this.data.plant.value];
  }

}
