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


import { Passageiro } from '../../classes/models/passageiro';
import { passageiros, reservas, voos } from '../../mock/dados';
import { Voo } from '../../classes/models/voo';
import { Reserva } from '../../classes/models/reserva';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stepper',
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
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  myControl = new FormControl('');
  selectedPassageiro: Passageiro | undefined;
  selectedVoo: Voo | null = null;

  passageiros: Passageiro[] = passageiros;
  voos: Voo[] = voos;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    // selectedVoo: [null, Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
   
  })

  voosDisplayedColumns: string[] = ['numero', 'data', 'companhia', 'origem', 'destino'];

  selectVoo(voo: Voo): void {
    if (this.selectedVoo === voo) {
      this.selectedVoo = null;
    } else {
      this.selectedVoo = voo;
    }
  }

  isVooSelected(voo: Voo): boolean {
    return this.selectedVoo === voo;
  }

  reservarVoo (): void { 
    if (this.selectedVoo && this.selectedPassageiro) {
      const reserva = new Reserva(this.selectedVoo.getEmbarque().getData(), this.selectedPassageiro);
      reserva.addVoo(this.selectedVoo);
      reservas.push(reserva);
    }

    alert("Reserva confirmada!");
    this.router.navigate(['/']);

    console.log(reservas);
    
  }

  constructor(private _formBuilder: FormBuilder, private router: Router) {}
}
