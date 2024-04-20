import { Component, ChangeDetectorRef } from '@angular/core';
import { Reserva } from '../../classes/models/reserva';
import { reservas } from '../../mock/dados';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancelar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './cancelar.component.html',
  styleUrl: './cancelar.component.scss'
})
export class CancelarComponent {
  selectedReserva: Reserva | null = null;

  reservas: Reserva[] = reservas;

  reservasDisplayedColumns: string[] = ['data', 'passageiro', 'voo'];

  cancelarGroup = this._formBuilder.group({
    // firstCtrl: ['', Validators.required],
  });

  selectReserva(reserva: Reserva): void {
    if (this.selectedReserva === reserva) {
      this.selectedReserva = null;
    } else {
      this.selectedReserva = reserva;
    }
  }

  isReservaSelected(reserva: Reserva): boolean {
    return this.selectedReserva === reserva;
  }

  cancelarReserva(): void {
    if (this.selectedReserva) {
      const index = this.reservas.indexOf(this.selectedReserva);
      if (index !== -1) {
        const confirmarRemocao = confirm('Tem certeza de que deseja cancelar esta reserva?');
        if (confirmarRemocao) {
          this.reservas.splice(index, 1);
          this.selectedReserva = null; 
  
          alert("Reserva cancelada com sucesso!");
          this.router.navigate(['/']);
        }
      }
    }
  }
  

  constructor(private _formBuilder: FormBuilder, private router: Router) {}
}
