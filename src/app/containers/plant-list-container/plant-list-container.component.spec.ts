import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantListContainerComponent } from './plant-list-container.component';

describe('PlantListContainerComponent', () => {
  let component: PlantListContainerComponent;
  let fixture: ComponentFixture<PlantListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
