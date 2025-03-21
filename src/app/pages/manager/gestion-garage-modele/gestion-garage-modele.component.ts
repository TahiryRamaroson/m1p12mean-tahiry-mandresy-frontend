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
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-gestion-garage-modele',
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
    CommonModule,
    SelectModule
  ],
  templateUrl: './gestion-garage-modele.component.html',
  styleUrl: './gestion-garage-modele.component.scss'
})
export class GestionGarageModeleComponent {
  modeles = [
    { id: 1, nom: 'A3', marque: { id: 1, nom: 'Audi'}},
    { id: 2, nom: '205', marque: { id: 2, nom: 'Peugeot'}},
    { id: 3, nom: 'Land Cruiser', marque: { id: 3, nom: 'Toyota'}},
    { id: 4, nom: 'Macan', marque: { id: 4, nom: 'Porsche'}},
    { id: 5, nom: 'Defender', marque: { id: 5, nom: 'Land Rover'}}
  ];

  marques = [
    { id: 1, nom: 'Audi'},
    { id: 2, nom: 'Peugeot'},
    { id: 3, nom: 'Toyota'},
    { id: 4, nom: 'Porsche'},
    { id: 5, nom: 'Land Rover'}
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
