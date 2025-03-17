import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { Tooltip } from 'primeng/tooltip';
import { Dialog } from 'primeng/dialog';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { PaginatorModule } from 'primeng/paginator';
import { AccordionModule } from 'primeng/accordion';


@Component({
  selector: 'app-reponse-devis',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    Tooltip,
    Dialog,
    DatePickerModule,
    InputTextModule,
    CardModule,
    PaginatorModule,
    AccordionModule,
    FormsModule
  ],
  templateUrl: './reponse-devis.component.html',
  styleUrl: './reponse-devis.component.scss'
})
export class ReponseDevisComponent {

  devis = [
    {
      id: 1,
      client: { nom: 'Dupont', prenom: 'Jean' },
      voiture: { marque: 'Toyota', numero: '0012AP' },
      dateDemande: '2025-03-01',
      details: [
        { id:1, categorie: 'Mécanique', service: 'Changement de pneus', prix: 100 },
        { id:2, categorie: 'Entretien', service: 'Vidange', prix: 50 }
      ]
    },
    {
      id: 2,
      client: { nom: 'Martin', prenom: 'Marie' },
      voiture: { marque: 'Honda', numero: '0012AP' },
      dateDemande: '2025-03-02',
      details: [
        { id:3, categorie: 'Mécanique', service: 'Révision', prix: 150 },
        { id:4, categorie: 'Carrosserie', service: 'Peinture', prix: 200 }
      ]
    },
  ];


  positionModal: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';
  

  //modals filtre
  loading: boolean = false;
  load() {
      this.loading = true;

      setTimeout(() => {
          this.loading = false
      }, 1000);
  }
  visiblefiltre: boolean = false;
  openModalFilter(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visiblefiltre = true;
  }


  //------------modal repondre
  selectedDevis: any;
  visiblerepondre: boolean = false;
  openModalRepondre(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' , devis: any) {
    this.positionModal = postition;
    this.selectedDevis= devis;
    this.visiblerepondre = true;

    // Initialiser le tableau pour chaque détail si ce n'est pas encore fait
    this.selectedDevis.details.forEach((detail: any) => {
      if (!this.outilsParDetail[detail.id]) {
        this.outilsParDetail[detail.id] = [];
      }
    })
  }
  // Stocker les outils pour chaque détail
  outilsParDetail: { [key: number]: { libelle: string; prix: number }[] } = {};
  // Ajouter un nouvel outil à un détail
  ajouterOutil(detailId: number) {
    this.outilsParDetail[detailId].push({ libelle: '',prix: 0 });
  }
  // Supprimer un outil d'un détail
  supprimerOutil(detailId: number, index: number) {
    this.outilsParDetail[detailId].splice(index, 1);
  }
  //-------------------------------

}
