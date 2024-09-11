import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoralInformationComponent } from './doctoral-information.component';

describe('DoctoralInformationComponent', () => {
  let component: DoctoralInformationComponent;
  let fixture: ComponentFixture<DoctoralInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DoctoralInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DoctoralInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
