import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { Vehicule } from '../../../models/vehicule';

@Component({
  selector: 'app-vehicules-client',
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    FileUploadModule
  ],
  templateUrl: './vehicules-client.component.html',
  styleUrl: './vehicules-client.component.scss'
})

export class VehiculesClientComponent {
  uploadedFiles: any[] = [];
  uploadedFilesEdit: any[] = [];
  vehicules: Vehicule[] = [
    {
      id: 1,
      photo: 'assets/images/vehicule.jpeg',
      marque: 'Peugeot',
      modele: '208',
      annee: 2020,
      immatriculation: 'AB-123-CD'
    },
    {
      id: 2,
      photo: 'assets/images/vehicule.jpeg',
      marque: 'Renault',
      modele: 'Clio',
      annee: 2019,
      immatriculation: 'EF-456-GH'
    },
  ];

  marques: string[] = ['Peugeot', 'Renault', 'Citroën', 'Toyota', 'Ford'];
  modeles: { [key: string]: string[] } = {
    'Peugeot': ['208', '308', '508'],
    'Renault': ['Clio', 'Megane', 'Scenic'],
    'Citroën': ['C3', 'C4', 'C5'],
    'Toyota': ['Yaris', 'Corolla', 'Camry'],
    'Ford': ['Fiesta', 'Focus', 'Mustang']
  };

  displayModal: boolean = false;
  displayEditModal: boolean = false;
  nouveauVehicule: Vehicule = {
    id: 0,
    photo: '',
    marque: '',
    modele: '',
    annee: 0,
    immatriculation: ''
  };
  vehiculeEnCours: Vehicule = {
    id: 0,
    photo: '',
    marque: '',
    modele: '',
    annee: 0,
    immatriculation: ''
  };

  showModal() {
    this.displayModal = true;
  }

  hideModal() {
    this.displayModal = false;
  }

  showEditModal(vehicule: Vehicule) {
    this.vehiculeEnCours = { ...vehicule };
    this.displayEditModal = true;
  }

  hideEditModal() {
    this.displayEditModal = false;
  }

  ajouterVehicule() {
    this.nouveauVehicule.id = this.vehicules.length + 1;
    this.vehicules.push({ ...this.nouveauVehicule });
    this.nouveauVehicule = {
      id: 0,
      photo: '',
      marque: '',
      modele: '',
      annee: 0,
      immatriculation: ''
    };
    this.uploadedFiles = [];
    console.log('Ajouter un véhicule', this.vehicules);
    this.hideModal();
  }

  onSelect(event: any) {
    this.uploadedFiles = [];
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
    if (this.uploadedFiles.length > 0) {
      this.nouveauVehicule.photo = this.uploadedFiles[0].name; // Utiliser le nom du fichier sélectionné
    }
  }

  onSelectEdit(event: any) {
    this.uploadedFilesEdit = [];
    for (let file of event.files) {
      this.uploadedFilesEdit.push(file);
    }
    if (this.uploadedFilesEdit.length > 0) {
      this.vehiculeEnCours.photo = this.uploadedFilesEdit[0].name; // Utiliser le nom du fichier sélectionné
    }
  }

  modifierVehicule() {
    const index = this.vehicules.findIndex(v => v.id === this.vehiculeEnCours.id);
    if (index !== -1) {
      this.vehicules[index] = { ...this.vehiculeEnCours };
    }
    this.uploadedFilesEdit = [];
    this.hideEditModal();
  }

  supprimerVehicule(id: number) {
    this.vehicules = this.vehicules.filter(v => v.id !== id);
    console.log('Supprimer le véhicule avec id', id);
  }
}
