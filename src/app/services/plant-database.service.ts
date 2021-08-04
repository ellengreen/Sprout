import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Plant } from '../interfaces/plant';
import { Room } from '../interfaces/room.interface';

@Injectable({
  providedIn: 'root'
})
export class PlantDatabaseService {

  roomsRef: AngularFireList<Room>;

  constructor(private db: AngularFireDatabase) {
    this.roomsRef = db.list('/rooms');
  }

  createRoom(room: Room): any {
    return this.roomsRef.push(room);
  }

  createPlant(plant: Plant, roomKey: any) {
    const roomID = roomKey.roomKey;
    const list = this.db.list(`rooms/${roomID}/plants`);
    list.push(plant);
  }

  getAllRooms(): Observable<any> {
    return this.db.list('/rooms').snapshotChanges();
  }

  updateRoom(key: string, value: any): Promise<void> {
    return this.roomsRef.update(key, value);
  }

  deleteRoom(key: string): Promise<void> {
    return this.roomsRef.remove(key);
  }

  deleteAllRooms(): Promise<void> {
    return this.roomsRef.remove();
  }
}
