import { Component, OnInit, TemplateRef} from '@angular/core';
import { Plant } from '../plant';
import { PLANTS } from '../plants';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})

export class PlantListComponent implements OnInit {

  plantList = PLANTS;
  selectedPlant: Plant;
  isPlant = false;
  modalRef: BsModalRef;
  rooms = [
    "Kitchen", 
    "Living Room", 
    "Bedroom", 
    "Office"
  ];

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  onSelect(plant: Plant) : void {
    this.selectedPlant = plant;
    this.isPlant = true;
  }

  plantForm: FormGroup;
  
  // Add form values to plantList
  addPlant() {
    this.plantList.push(this.plantForm.value);
  }
}
