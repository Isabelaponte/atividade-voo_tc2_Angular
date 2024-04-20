import { Component } from '@angular/core';
import { Voo } from '../../classes/models/voo';
import { voos } from '../../mock/dados';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-informacoes-voos',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './informacoes-voos.component.html',
  styleUrl: './informacoes-voos.component.scss'
})
export class InformacoesVoosComponent {
  voos: Voo[] = voos;
  voosDisplayedColumns: string[] = ['numero', 'data', 'companhia', 'origem', 'destino'];

}
