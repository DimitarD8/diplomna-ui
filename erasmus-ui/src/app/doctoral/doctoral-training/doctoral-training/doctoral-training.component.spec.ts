import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoralTrainingComponent } from './doctoral-training.component';

describe('DoctoralTrainingComponent', () => {
  let component: DoctoralTrainingComponent;
  let fixture: ComponentFixture<DoctoralTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctoralTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctoralTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
