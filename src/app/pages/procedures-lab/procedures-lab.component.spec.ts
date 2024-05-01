import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduresLabComponent } from './procedures-lab.component';

describe('ProceduresLabComponent', () => {
  let component: ProceduresLabComponent;
  let fixture: ComponentFixture<ProceduresLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProceduresLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProceduresLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
