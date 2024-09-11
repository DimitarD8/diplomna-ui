import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilityUpdateDialogComponent } from './mobility-update-dialog.component';

describe('MobilityUpdateDialogComponent', () => {
  let component: MobilityUpdateDialogComponent;
  let fixture: ComponentFixture<MobilityUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilityUpdateDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilityUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
