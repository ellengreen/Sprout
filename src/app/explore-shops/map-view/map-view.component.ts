import { Component, OnInit } from '@angular/core';
import { Marker } from '../marker';
import { styles } from '../mapStyle';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  //initial center position for map
  lat = 38.627810;
  lng = -90.196091;
  zoom = 11;

  styles = styles;
  markers = Marker; 
  selectedMarker; 

  onSelect(marker) : void {
    this.selectedMarker = marker;
  }

  constructor() { }

  ngOnInit() {
  }

}
