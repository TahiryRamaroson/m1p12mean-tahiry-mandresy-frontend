import { Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { CalendarOptions } from '@fullcalendar/core'; 
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-demande-rendez-vous-client',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    FormsModule,
    FullCalendarModule,
    DialogModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './demande-rendez-vous-client.component.html',
  styleUrl: './demande-rendez-vous-client.component.scss'
})

export class DemandeRendezVousClientComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    selectable: true,
    editable: true,
    dateClick: this.handleDateClick.bind(this) // Bind the method to the component context
  };

  displayModal: boolean = false;
  selectedDate: Date | null = null;

  handleDateClick(arg: any) {
    this.selectedDate = arg.date;
    this.displayModal = true;
  }

  hideModal() {
    this.displayModal = false;
  }

  confirmerDemande() {
    if (this.selectedDate) {
      console.log('Demande de rendez-vous envoyée pour la date :', this.selectedDate);
      this.hideModal();
    } else {
      console.log('Veuillez sélectionner une date.');
    }
  }
}
