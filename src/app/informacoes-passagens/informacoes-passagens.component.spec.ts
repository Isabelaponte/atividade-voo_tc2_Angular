import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesPassagensComponent } from './informacoes-passagens.component';

describe('InformacoesPassagensComponent', () => {
  let component: InformacoesPassagensComponent;
  let fixture: ComponentFixture<InformacoesPassagensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesPassagensComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacoesPassagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
