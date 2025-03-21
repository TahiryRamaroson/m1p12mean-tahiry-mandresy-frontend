import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Dialog } from 'primeng/dialog';
import { CalendarOptions } from '@fullcalendar/core'; 
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { Select } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';




@Component({
  selector: 'app-gestion-rendezvous',
  imports: [
    FullCalendarModule,
    FormsModule,
    Dialog,
    ButtonModule,
    CardModule,
    AccordionModule,
    CommonModule,
    Select,
    TextareaModule
  ],
  templateUrl: './gestion-rendezvous.component.html',
  styleUrl: './gestion-rendezvous.component.scss'
})
export class GestionRendezvousComponent {  
  
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
      ]
    },
    {
      id: 2,
      client: { nom: 'Martin', prenom: 'Sophie' },
      voiture: { marque: 'Peugeot', numero: '5678BC' },
      dateRendezVous: '2025-03-01',
      details: [
        { id:3, categorie: 'Carrosserie', service: 'Peinture', prix: 300,
          outils: [
            { libelle: 'Peinture',unite: 1, prix: 200 },
            { libelle: 'Pinceau',unite: 1, prix: 20 }
          ]
        }
      ]
    }
  ];


  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true,
    events: this.rendezvousList.map(rdv => ({
      id: rdv.id.toString(), 
      title: `${rdv.client.nom} ${rdv.client.prenom} : ID : ${rdv.id} / (${rdv.voiture.numero})`,
      date: rdv.dateRendezVous
    })),
    eventClick: this.handleEventClick.bind(this)
  };


  positionModal: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';
  
  
  //modal repondre rendez-vous
  visiblerepondre: boolean = false;
  openModalRepondre(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visiblerepondre = true;
  }
  selectedRendezvous: any = null; // Stocke le rendez-vous sélectionné
  handleEventClick(arg: any) {
    const rdvId = parseInt(arg.event.id, 10);
    this.selectedRendezvous = this.rendezvousList.find(rdv => rdv.id === rdvId);
    this.openModalRepondre('center');
  }


  //modal confirmer rendez-vous
  mecaniciens = [
    { id: 'P001', nom: 'RAZANADAHY', prenom: 'Sahaza Mandresy', dateNaissance: '1985-01-12', dateInscription: '2021-08-20', email: 'jean.dupont@example.com', specialites: [1, 2] },
    { id: 'P002', nom: 'Sophie', prenom: 'Martin', dateNaissance: '1990-03-22', dateInscription: '2021-09-15', email: 'sophie.martin@example.com', specialites: [3] },
    { id: 'P003', nom: 'Ali', prenom: 'Ben Salah', dateNaissance: '1980-11-05', dateInscription: '2021-06-10', email: 'ali.bensalah@example.com', specialites: [4, 5] },
    { id: 'P004', nom: 'Claire', prenom: 'Leclerc', dateNaissance: '1995-02-17', dateInscription: '2021-05-05', email: 'claire.leclerc@example.com', specialites: [1, 3] },
    { id: 'P005', nom: 'Marc', prenom: 'Durand', dateNaissance: '1978-09-30', dateInscription: '2021-04-18', email: 'marc.durand@example.com', specialites: [2, 4] }
  ];
  visiblevalider: boolean = false;
  openModalValider(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visiblevalider = true;
  }


  //modal refuser rendez-vous
  visiblerefuser: boolean = false;
  openModalRefuser(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visiblerefuser = true;
  }


}
