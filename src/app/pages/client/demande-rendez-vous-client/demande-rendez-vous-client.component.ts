import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-demande-rendez-vous-client',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './demande-rendez-vous-client.component.html',
  styleUrl: './demande-rendez-vous-client.component.scss'
})

export class DemandeRendezVousClientComponent {
  envoyerDemande() {
      console.log(' date.');
  }
}
