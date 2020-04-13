import { Component, OnInit, TemplateRef } from '@angular/core';
import { Marker } from '../marker';
import { styles } from '../mapStyle';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.scss']
})
export class MapViewComponent implements OnInit {

  //initial center position for map
  lat = 38.610185;
  lng = -90.256227;
  zoom = 11;

  modalRef: BsModalRef;
  styles = styles;
  markers = Marker; 
  selectedMarker: any;

  onSelect(marker: any) : void {
    this.selectedMarker = marker;
  }

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }
  ngOnInit() {
  }

}
