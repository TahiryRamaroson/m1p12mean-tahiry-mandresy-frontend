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
import { DatePickerModule } from 'primeng/datepicker';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect'; 
import { SelectButton } from 'primeng/selectbutton';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestion-garage-specialite',
  imports: [
    TableModule,
    IconFieldModule,
    ButtonModule,
    InputTextModule,
    PaginatorModule,
    Tag,
    Tooltip,
    Dialog,
    FormsModule,
    DatePickerModule,
    AccordionModule,
    CardModule,
    MultiSelectModule,
    SelectButton,
    CommonModule
  ],
  templateUrl: './gestion-garage-specialite.component.html',
  styleUrl: './gestion-garage-specialite.component.scss'
})
export class GestionGarageSpecialiteComponent {

  specialites = [
    { id: 1, nom: 'Mécanique Générale' },
    { id: 2, nom: 'Électricité Auto' },
    { id: 3, nom: 'Carrosserie' },
    { id: 4, nom: 'Peinture Automobile' },
    { id: 5, nom: 'Diagnostic Électronique' }
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
