import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresLashComponent } from './procedures-lash.component';

describe('ProceduresLashComponent', () => {
  let component: ProceduresLashComponent;
  let fixture: ComponentFixture<ProceduresLashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceduresLashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProceduresLashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
