import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityCreateDialogComponent } from './mobility-create-dialog.component';

describe('MobilityCreateDialogComponent', () => {
  let component: MobilityCreateDialogComponent;
  let fixture: ComponentFixture<MobilityCreateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilityCreateDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilityCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
