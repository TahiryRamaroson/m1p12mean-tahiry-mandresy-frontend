import { Component } from '@angular/core';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faire-devis-client',
  imports: [
    SelectModule,
    MultiSelectModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './faire-devis-client.component.html',
  styleUrl: './faire-devis-client.component.scss'
})
export class FaireDevisClientComponent {
  voitures = [
    { id: 1, marqueModele: 'Peugeot 208' },
    { id: 2, marqueModele: 'Renault Clio' },
    { id: 3, marqueModele: 'Citroën C3' }
  ];

  services = [
    { id: 1, 
      nom: 'Entretien',  
      details : [
        {
          id: 1,
          nom: 'Vidange'
        },
        {
          id: 2,
          nom: 'Peinture'
        },
        {
          id: 3,
          nom: 'Essuie glace'
        },
        {
          id: 4,
          nom: 'Lavage'
        }
      ]
    },
    { id: 2, 
      nom: 'Réparation',  
      details : [
        {
          id: 5,
          nom: 'Freins'
        },
        {
          id: 6,
          nom: 'Suspension'
        },
        {
          id: 7,
          nom: 'Transmission'
        }
      ]
    },
  ];

  voitureSelectionnee: any = null;
  servicesSelectionnes: any[] = [];
  detailsSelectionnes: { [key: string]: any[] } = {};

  soumettreDevis() {
    if (this.voitureSelectionnee && this.servicesSelectionnes.length > 0) {
      // Logique pour soumettre le devis
      console.log('Voiture sélectionnée :', this.voitureSelectionnee);
      console.log('Services sélectionnés :', this.servicesSelectionnes);
      console.log('Détails des services sélectionnés :', this.detailsSelectionnes);
    } else {
      console.log('Veuillez sélectionner une voiture et au moins un service.');
    }
  }

  isServiceSelected(serviceName: string): boolean {
    return this.servicesSelectionnes.some(service => service.nom === serviceName);
  }

  nettoyerDetailsSelectionnes() {
    const servicesSelectionnesNoms = this.servicesSelectionnes.map(service => service.nom);
    for (const serviceNom in this.detailsSelectionnes) {
      if (!servicesSelectionnesNoms.includes(serviceNom)) {
        delete this.detailsSelectionnes[serviceNom];
      }
    }
  }
}
