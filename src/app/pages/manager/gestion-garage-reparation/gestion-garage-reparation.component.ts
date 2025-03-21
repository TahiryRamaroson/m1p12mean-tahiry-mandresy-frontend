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
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-garage-reparation',
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
    SelectButton,
    CommonModule
  ],
  templateUrl: './gestion-garage-reparation.component.html',
  styleUrl: './gestion-garage-reparation.component.scss'
})
export class GestionGarageReparationComponent {
  reparations = [
    { id: 'R001', nom: 'Tableau de bord', prixUnitaire: 500, specialite: { id: 2, nom: 'Électricité Auto' } },
    { id: 'R002', nom: 'Freins', prixUnitaire: 350, specialite: { id: 1, nom: 'Mécanique Générale' } },
    { id: 'R003', nom: 'Transmission', prixUnitaire: 175, specialite: { id: 1, nom: 'Mécanique Générale' } },
    { id: 'R004', nom: 'Kit tuning', prixUnitaire: 75, specialite: { id: 3, nom: 'Carrosserie' } },
    { id: 'R005', nom: 'Redressage', prixUnitaire: 100, specialite: { id: 3, nom: 'Carrosserie' } }
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
