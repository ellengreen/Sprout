import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from 'src/app/interfaces/room.interface';
import { PlantDatabaseService } from 'src/app/services/plant-database.service';

@Component({
  selector: 'app-add-room-dialog',
  templateUrl: './add-room-dialog.component.html',
  styleUrls: ['./add-room-dialog.component.scss']
})
export class AddRoomDialogComponent implements OnInit {

  newRoomForm: FormGroup;
  constructor(public formBuilder: FormBuilder, private plantDatabaseService: PlantDatabaseService) { }

  ngOnInit(): void {
    this.newRoomForm = new FormGroup({
      roomName: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.plantDatabaseService.createRoom(this.newRoomForm.value);
  }
}  
