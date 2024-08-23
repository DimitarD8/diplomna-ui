import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoralShortTermTrainingComponent } from './doctoral-short-term-training.component';

describe('DoctoralShortTermTrainingComponent', () => {
  let component: DoctoralShortTermTrainingComponent;
  let fixture: ComponentFixture<DoctoralShortTermTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctoralShortTermTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctoralShortTermTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
