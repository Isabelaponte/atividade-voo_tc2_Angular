import { Component } from '@angular/core';
import { Reserva } from '../../classes/models/reserva';
import { reservas } from '../../mock/dados';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-informacoes-passagens',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './informacoes-passagens.component.html',
  styleUrl: './informacoes-passagens.component.scss'
})
export class InformacoesPassagensComponent {

  reservas: Reserva[] = reservas;
  reservasDisplayedColumns: string[] = ['data', 'passageiro', 'voo'];

}
