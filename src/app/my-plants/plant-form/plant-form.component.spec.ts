import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PlantFormComponent } from './plant-form.component';

describe('PlantFormComponent', () => {
  let component: PlantFormComponent;
  let fixture: ComponentFixture<PlantFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ PlantFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Checks that form is invalid at creation
  it('form should be invalid upon opening', () => {
    expect(component.plantForm.valid).toBeFalsy();
  });

  //Checks that form is invalid when empty (is this the same as above??)
  it('form invalid when empty', () => { 
    component.plantForm.controls.name.setValue('');
    component.plantForm.controls.location.setValue(null);
    component.plantForm.controls.light.setValue('');
    component.plantForm.controls.water.setValue('');
    component.plantForm.controls.date.setValue('');
    expect(component.plantForm.valid).toBeFalsy();
  });

  //Checks that form is valid when filled 
  it('form should be valid', () => {
    component.plantForm.controls.name.setValue('Snake Plant');
    component.plantForm.controls.location.setValue('Bedroom');
    component.plantForm.controls.light.setValue('Indirect');
    component.plantForm.controls.water.setValue('Weekly');
    component.plantForm.controls.date.setValue('June 2019');
    expect(component.plantForm.valid).toBeTruthy();
  });

});



