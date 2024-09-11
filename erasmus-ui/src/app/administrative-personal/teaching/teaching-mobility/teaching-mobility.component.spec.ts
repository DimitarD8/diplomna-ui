import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachingMobilityComponent } from './teaching-mobility.component';

describe('TeachingMobilityComponent', () => {
  let component: TeachingMobilityComponent;
  let fixture: ComponentFixture<TeachingMobilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachingMobilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachingMobilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
