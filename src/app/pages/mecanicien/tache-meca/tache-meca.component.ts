import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { Dialog } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-tache-meca',
  imports: [
    FormsModule,
    CommonModule,
    CardModule,
    ButtonModule,
    Tooltip,
    Dialog,
    AccordionModule
  ],
  templateUrl: './tache-meca.component.html',
  styleUrl: './tache-meca.component.scss'
})
export class TacheMecaComponent {
  

  rendezvousList = [
    {
      id: 1,
      client: { nom: 'Dupont', prenom: 'Jean' },
      voiture: { marque: 'Toyota', numero: '0012AP' },
      dateRendezVous: '2025-03-01',
      details: [
        { id:1, categorie: 'Mécanique', service: 'Changement de pneus', prix: 100,
          outils: [
            { libelle: 'Pneu', unite: 1,prix: 50 },
            { libelle: 'Boulons', unite: 2,prix: 10 }
          ]
        },
        { id:2, categorie: 'Entretien', service: 'Vidange', prix: 50,
          outils: [
            { libelle: 'Huile', unite: 1,prix: 20 },
            { libelle: 'Filtre', unite: 2,prix: 10 }
          ]
        }
      ],
      statut: 1
    },
    {
      id: 2,
      client: { nom: 'Martin', prenom: 'Sophie' },
      voiture: { marque: 'Peugeot', numero: '5678BC' },
      dateRendezVous: '2025-03-05',
      details: [
        { id:3, categorie: 'Carrosserie', service: 'Peinture', prix: 300,
          outils: [
            { libelle: 'Peinture', unite: 1, prix: 200 },
            { libelle: 'Pinceau', unite: 1, prix: 20 }
          ]
        }
      ],
      statut: 3
    },
    {
      id: 3,
      client: { nom: 'Maraco', prenom: 'Andre' },
      voiture: { marque: 'Peugeot', numero: '89853C' },
      dateRendezVous: '2025-03-06',
      details: [
        { id:3, categorie: 'Carrosserie', service: 'Peinture', prix: 300,
          outils: [
            { libelle: 'Peinture',unite: 1, prix: 200 },
            { libelle: 'Pinceau',unite: 1, prix: 20 }
          ]
        }
      ],
      statut: 3
    }
  ];


  // Méthode pour filtrer les rendez-vous par statut
  getRendezvousByStatut(statut: number) {
    return this.rendezvousList.filter(rdv => rdv.statut === statut);
  }


  positionModal: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';
  

  //modal details rendez-vous
  visibledetails: boolean = false;
  openModalDetails(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visibledetails = true;
  }
  selectedRendezvous: any = null;
  handleEventClick(rendezvous : any) {
    console.log(rendezvous);
    this.selectedRendezvous = this.rendezvousList.find(rdv => rdv.id === rendezvous.id);
    this.openModalDetails('center');
  }


  //modal discuter
  visiblediscuter: boolean = false;
  openModalDiscuter(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visiblediscuter = true;
  }


    //modal comfirmeracheve
    visiblevalideracheve: boolean = false;
    openModalValiderAcheve(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
      this.positionModal = postition;
      this.visiblevalideracheve = true;
    }


}
