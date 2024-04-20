import { Component } from '@angular/core';

import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';


import { reservas, voos } from '../../mock/dados';
import { Voo } from '../../classes/models/voo';
import { Reserva } from '../../classes/models/reserva';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stepper-alterar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    AsyncPipe,
    MatSelectModule,
    MatTableModule
  ],
  templateUrl: './stepper-alterar.component.html',
  styleUrl: './stepper-alterar.component.scss'
})
export class StepperAlterarComponent {

  selectedVoo: Voo | null = null;
  selectedReserva: Reserva | null = null;

  voos: Voo[] = voos;

  reservas: Reserva[] = reservas;

  firstFormGroup = this._formBuilder.group({
    // firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    // selectedVoo: [null, Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
   
  })

  voosDisplayedColumns: string[] = ['numero', 'data', 'companhia', 'origem', 'destino'];
  reservasDisplayedColumns: string[] = ['data', 'passageiro', 'voo'];

  selectVoo(voo: Voo): void {
    if (this.selectedVoo === voo) {
      this.selectedVoo = null;
    } else {
      this.selectedVoo = voo;
    }
  }

  selectReserva(reserva: Reserva): void {
    if (this.selectedReserva === reserva) {
      this.selectedReserva = null;
    } else {
      this.selectedReserva = reserva;
    }
  }

  isVooSelected(voo: Voo): boolean {
    return this.selectedVoo === voo;
  }
  
  isReservaSelected(reserva: Reserva): boolean {
    return this.selectedReserva === reserva;
  }

  alterarVoo(): void {
    if (this.selectedVoo && this.selectedReserva) {
      
      this.selectedReserva.setVoos(this.selectedReserva.getVoos()[0], this.selectedVoo);
      alert("Reserva confirmada!");
      this.router.navigate(['/']);
  
      console.log(reservas);
    }
  }

  constructor(private _formBuilder: FormBuilder, private router: Router) {}
}
