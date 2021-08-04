import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { LightConditions } from 'src/app/enums/light-conditions';
import { PlantDatabaseService } from 'src/app/services/plant-database.service';

@Component({
  selector: 'app-add-plant-dialog',
  templateUrl: './add-plant-dialog.component.html',
  styleUrls: ['./add-plant-dialog.component.scss']
})
export class AddPlantDialogComponent implements OnInit {

  newPlantForm: FormGroup;
  LightConditions = LightConditions;

  constructor(public formBuilder: FormBuilder, private plantDatabaseService: PlantDatabaseService,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit(): void {
    this.newPlantForm = new FormGroup({
      plantName: new FormControl('', [Validators.required]),
      acquiredDate: new FormControl(''),
      needs: new FormGroup({
        wateringSchedule: new FormControl('', [Validators.required]),
        light: new FormControl('', [Validators.required])
      })
    });
  }

  onSubmit() {
    this.plantDatabaseService.createPlant(this.newPlantForm.value, this.data);
  }
}
