import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesVoosComponent } from './informacoes-voos.component';

describe('InformacoesVoosComponent', () => {
  let component: InformacoesVoosComponent;
  let fixture: ComponentFixture<InformacoesVoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesVoosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacoesVoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
