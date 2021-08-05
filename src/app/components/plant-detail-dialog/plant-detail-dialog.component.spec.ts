import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDetailDialogComponent } from './plant-detail-dialog.component';

describe('PlantDetailDialogComponent', () => {
  let component: PlantDetailDialogComponent;
  let fixture: ComponentFixture<PlantDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
