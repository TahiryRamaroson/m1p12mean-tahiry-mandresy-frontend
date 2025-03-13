import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demande-devis-client',
  imports: [
    CardModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './demande-devis-client.component.html',
  styleUrl: './demande-devis-client.component.scss'
})
export class DemandeDevisClientComponent implements OnInit {
  demandesDevis: any[] = [];

  ngOnInit() {
    this.demandesDevis = [
      { marque: 'Toyota', modele: 'Corolla', immatriculation: 'AB-123-CD', dateDemande: new Date(), statut: 'En attente de réponse', color: "bg-yellow-500" },
      { marque: 'Peugeot', modele: '208', immatriculation: 'EF-456-GH', dateDemande: new Date(), statut: 'Reçu', color: "bg-green-500" },
      // Ajoutez d'autres demandes ici...
    ];
  }
}
