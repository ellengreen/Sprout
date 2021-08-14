import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadPlantsComponent } from './dead-plants.component';

describe('DeadPlantsComponent', () => {
  let component: DeadPlantsComponent;
  let fixture: ComponentFixture<DeadPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadPlantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
