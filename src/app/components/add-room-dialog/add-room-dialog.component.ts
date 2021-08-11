import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PlantDatabaseService } from 'src/app/services/plant-database.service';
import { LightingConditions } from 'src/app/shared/constants/lighting-conditions';

@Component({
  selector: 'app-add-room-dialog',
  templateUrl: './add-room-dialog.component.html',
  styleUrls: ['./add-room-dialog.component.scss']
})
export class AddRoomDialogComponent implements OnInit {
  lightConditions = LightingConditions.lightConditions;
  roomIconURLS = [
    {
      id: 0,
      url: '../../../assets/room-icons/bedroom.png'
    },
    {
      id: 1,
      url: '../../../assets/room-icons/coffee.png'
    },
    {
      id: 2,
      url: '../../../assets/room-icons/kitchen.png'
    },
    {
      id: 3,
      url: '../../../assets/room-icons/living-room1.png'
    },
    {
      id: 4,
      url: '../../../assets/room-icons/living-room2.png'
    }
  ];
  roomSelected: string;
  newRoomForm: FormGroup;

  setSelected(roomImage: string) {
    this.newRoomForm.get('roomImage').setValue(roomImage);
  }

  constructor(public formBuilder: FormBuilder, private plantDatabaseService: PlantDatabaseService) { }

  ngOnInit(): void {
    this.newRoomForm = new FormGroup({
      roomName: new FormControl('', [Validators.required]),
      light: new FormControl('', Validators.required),
      roomImage: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.plantDatabaseService.createRoom(this.newRoomForm.value);
  }
}
