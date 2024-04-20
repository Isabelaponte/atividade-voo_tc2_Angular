import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StepperComponent } from './stepper-comprar/stepper.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HomeComponent } from './views/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StepperComponent, HomeComponent, AngularMaterialModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'atividade_voos';
}
