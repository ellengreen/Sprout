import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {PlantFormComponent } from 'src/app/my-plants/plant-form/plant-form.component';
import { PlantListComponent } from './plant-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Plant } from '../plant';


describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, ModalModule.forRoot()],
      declarations: [ PlantListComponent, PlantFormComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSelect() should select plant', () => {
    const plant: Plant = { name: 'Plant', location: 'Bedroom', light: 'Low', water: 'Weekly', date: 'Today' };
    component.onSelect(plant);
    expect(component.selectedPlant).toBe(plant);
  })

});

