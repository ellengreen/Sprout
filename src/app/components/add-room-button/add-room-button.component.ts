import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddRoomDialogComponent } from '../add-room-dialog/add-room-dialog.component';

@Component({
  selector: 'app-add-room-button',
  templateUrl: './add-room-button.component.html',
  styleUrls: ['./add-room-button.component.scss']
})
export class AddRoomButtonComponent implements OnInit {

  constructor(public roomDialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.roomDialog.open(AddRoomDialogComponent);
  }
}
