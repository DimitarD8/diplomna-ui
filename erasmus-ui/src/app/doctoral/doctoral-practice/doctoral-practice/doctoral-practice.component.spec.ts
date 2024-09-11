import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoralPracticeComponent } from './doctoral-practice.component';

describe('DoctoralPracticeComponent', () => {
  let component: DoctoralPracticeComponent;
  let fixture: ComponentFixture<DoctoralPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctoralPracticeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctoralPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
