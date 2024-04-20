import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatStepperModule, 
    MatInputModule, 
    MatButtonModule
  ],
  exports: [
    MatStepperModule, 
    MatInputModule, 
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
