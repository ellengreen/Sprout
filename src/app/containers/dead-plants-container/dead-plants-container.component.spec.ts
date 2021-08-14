import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadPlantsContainerComponent } from './dead-plants-container.component';

describe('DeadPlantsContainerComponent', () => {
  let component: DeadPlantsContainerComponent;
  let fixture: ComponentFixture<DeadPlantsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeadPlantsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadPlantsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
