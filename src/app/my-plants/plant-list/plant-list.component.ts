import { Component, OnInit, Input, TemplateRef} from '@angular/core';
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

  modalRef: BsModalRef;

  rooms = [
    "Kitchen", "Living Room", "Bedroom", "Bathroom", "Office"
  ];

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }


  onSelect(plant: Plant) : void {
    this.selectedPlant = plant;
  }

  angForm: FormGroup;
  
  addPlant() {
    this.plantList.push(this.angForm.value);
  }
}
