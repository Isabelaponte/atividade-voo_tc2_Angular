import { Routes } from '@angular/router';
import { StepperComponent } from './stepper-comprar/stepper.component';
import { HomeComponent } from './views/home/home.component';
import { StepperAlterarComponent } from './stepper-alterar/stepper-alterar.component';
import { CancelarComponent } from './cancelar/cancelar.component';
import { InformacoesPassagensComponent } from './informacoes-passagens/informacoes-passagens.component';
import { InformacoesVoosComponent } from './informacoes-voos/informacoes-voos.component';

export const routes: Routes = [
    
    { path: "", component: HomeComponent },
    { path: "comprar-passagem", component: StepperComponent },
    { path: "alterar-passagem", component: StepperAlterarComponent },
    { path: "cancelar-passagem", component: CancelarComponent },
    { path: "informacoes-passagens", component: InformacoesPassagensComponent },
    { path: "informacoes-voos", component: InformacoesVoosComponent },

];
