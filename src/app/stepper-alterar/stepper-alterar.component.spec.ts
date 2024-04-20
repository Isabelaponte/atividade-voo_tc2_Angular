import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperAlterarComponent } from './stepper-alterar.component';

describe('StepperAlterarComponent', () => {
  let component: StepperAlterarComponent;
  let fixture: ComponentFixture<StepperAlterarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperAlterarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StepperAlterarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
