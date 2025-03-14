import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { Tag } from 'primeng/tag';
import { Tooltip } from 'primeng/tooltip';
import { Dialog } from 'primeng/dialog';
import { Select } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect'; 
import { SelectButton } from 'primeng/selectbutton';



@Component({
  selector: 'app-gestion-mecanicien',
  imports: [
    TableModule,
    IconFieldModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    Tag,
    Tooltip,
    Dialog,
    Select,
    FormsModule,
    DatePickerModule,
    AccordionModule,
    CardModule,
    MultiSelectModule,
    SelectButton
  ],
  standalone: true,
  templateUrl: './gestion-mecanicien.component.html',
  styleUrl: './gestion-mecanicien.component.scss'
})
export class GestionMecanicienComponent {

  mecaniciens = [
    { id: 'P001', nom: 'RAZANADAHY', prenom: 'Sahaza Mandresy', dateNaissance: '1985-01-12', dateInscription: '2021-08-20', email: 'jean.dupont@example.com', specialites: [1, 2] },
    { id: 'P002', nom: 'Sophie', prenom: 'Martin', dateNaissance: '1990-03-22', dateInscription: '2021-09-15', email: 'sophie.martin@example.com', specialites: [3] },
    { id: 'P003', nom: 'Ali', prenom: 'Ben Salah', dateNaissance: '1980-11-05', dateInscription: '2021-06-10', email: 'ali.bensalah@example.com', specialites: [4, 5] },
    { id: 'P004', nom: 'Claire', prenom: 'Leclerc', dateNaissance: '1995-02-17', dateInscription: '2021-05-05', email: 'claire.leclerc@example.com', specialites: [1, 3] },
    { id: 'P005', nom: 'Marc', prenom: 'Durand', dateNaissance: '1978-09-30', dateInscription: '2021-04-18', email: 'marc.durand@example.com', specialites: [2, 4] }
  ];

  specialites = [
    { id: 1, name: 'Mécanique Générale' },
    { id: 2, name: 'Électricité Auto' },
    { id: 3, name: 'Carrosserie' },
    { id: 4, name: 'Peinture Automobile' },
    { id: 5, name: 'Diagnostic Électronique' }
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

  //modals detail
  selectedMecanicienSpecialites: any[] = [];
  visibledetail: boolean = false;
  openModalDetail(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' , mecanicien: any) {
    this.positionModal = postition;
    this.visibledetail = true;
    this.selectedMecanicienSpecialites = this.specialites.filter(specialite => mecanicien.specialites.includes(specialite.id));
  }

  //modals ajouter
  visibleajouter: boolean = false;
  openModalAjouter(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visibleajouter = true;
  }

  //modals modifier
  stateOptions: any[] = [{ label: 'Activé', value: 1 },{ label: 'Desactivé', value: 0 }];
  valuestatut: number = 1;
  visiblemodifier: boolean = false;
  openModalModifier(postition: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright') {
    this.positionModal = postition;
    this.visiblemodifier = true;
  }

}
