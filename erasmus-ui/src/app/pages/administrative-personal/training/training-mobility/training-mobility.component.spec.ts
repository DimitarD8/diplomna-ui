import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingMobilityComponent } from './training-mobility.component';

describe('TrainingMobilityComponent', () => {
  let component: TrainingMobilityComponent;
  let fixture: ComponentFixture<TrainingMobilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingMobilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrainingMobilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
