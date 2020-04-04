import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { PLANTS } from '../plants';

@Component({
  selector: 'app-plant-form',
  templateUrl: './plant-form.component.html',
  styleUrls: ['./plant-form.component.scss']
})

export class PlantFormComponent {

  plantList = PLANTS;
  rooms = [
    'Kitchen', 'Bedroom', 'Living Room', 'Office'
  ]

  angForm: FormGroup;
  constructor (private formBuilder: FormBuilder){
  }
  ngOnInit() : void {
    this.angForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      location: [null, [Validators.required]],
      light: ["", [Validators.required]],
      water: ["", [Validators.required]],
      date: ["", [Validators.required]]
    })
  }
  addPlant() {
    this.plantList.push(this.angForm.value);
    this.resetForm(this.angForm)
  }

  resetForm(form: FormGroup){
    form.reset();
  }
//   angForm: FormGroup;
//   constructor(private fb: FormBuilder) {
//    this.createForm();
//  }

//   createForm() {
//    this.angForm = this.fb.group({
//       name: ['', Validators.required ],
//       location: ['', Validators.required ],
//       light: ['', Validators.required ],
//       water: ['', Validators.required ],
//       date: ['', Validators.required ]
//    });
//  }

//  addPlant() {
//    this.plantList.push(this.angForm.value);
//  }


}
