import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { AccordionModule } from 'primeng/accordion';
import { CalendarOptions } from '@fullcalendar/core'; 
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-historique-rendez-vous-client',
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
    DialogModule,
    AccordionModule,
    FullCalendarModule,
  ],
  templateUrl: './historique-rendez-vous-client.component.html',
  styleUrl: './historique-rendez-vous-client.component.scss'
})
export class HistoriqueRendezVousClientComponent implements OnInit {
  historiqueEnCours: any[] = [];

  ngOnInit() {
    this.historiqueEnCours = [
      { id: 1, marque: 'Toyota', modele: 'Corolla', immatriculation: 'AB-123-CD', dateDebut: new Date(), dateFin: new Date(), statut: 'En cours'},
      { id: 2, marque: 'Peugeot', modele: '208', immatriculation: 'EF-456-GH', dateDebut: new Date(), dateFin: new Date(), statut: 'A venir'},
      { id: 3, marque: 'Porsche', modele: 'Cayenne', immatriculation: 'IJ-937-KL', dateDebut: new Date(), dateFin: new Date(), statut: 'Terminé'},
      
    ];
  }

  detailsVisible: { [key: number]: boolean } = {};

  toggleDetails(id: number) {
    this.detailsVisible[id] = !this.detailsVisible[id];
  }

  decalageVisible: { [key: number]: boolean } = {};

  toggleDecalage(id: number) {
    this.decalageVisible[id] = !this.decalageVisible[id];
  }

  rendezvousList = [
    {
      id: 3,
      client: { nom: 'Maraco', prenom: 'Andre' },
      voiture: { marque: 'Peugeot', numero: '89853C' },
      dateRendezVous: '2025-03-06',
      details: [
        { id:3, categorie: 'Entretien', service: 'Peinture', prix: 300,
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

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true,
    dateClick: this.handleDateClick.bind(this)
  };

  displayConfirmDateModal: boolean = false;
  selectedDate: Date | null = null;

  handleDateClick(arg: any) {
    this.selectedDate = arg.date;
    this.displayConfirmDateModal = true;
  }

  hideConfirmDateModal() {
    this.displayConfirmDateModal = false;
  }

  confirmerDemande() {
    if (this.selectedDate) {
      console.log('Demande de rendez-vous envoyée pour la date :', this.selectedDate);
      this.hideConfirmDateModal();
    } else {
      console.log('Veuillez sélectionner une date.');
    }
  }
}
