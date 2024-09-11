import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTrainingComponent } from './student-training.component';

describe('StudentTrainingComponent', () => {
  let component: StudentTrainingComponent;
  let fixture: ComponentFixture<StudentTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTrainingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
