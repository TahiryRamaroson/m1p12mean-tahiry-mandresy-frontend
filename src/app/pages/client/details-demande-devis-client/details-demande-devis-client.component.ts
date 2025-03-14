import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-demande-devis-client',
  imports: [
    ButtonModule,
    TableModule,
    CommonModule
  ],
  templateUrl: './details-demande-devis-client.component.html',
  styleUrl: './details-demande-devis-client.component.scss'
})
export class DetailsDemandeDevisClientComponent {
  detailsDevis: any[] = [];
  totalMontant: number = 0;

  ngOnInit() {
    this.detailsDevis = [
      {
        service: 'Entretien',
        sousCategories: [
          { service: 'Vidange', unite: 1, prixUnitaire: 100, montant: 100 },
          { service: 'Huile', unite: 1, prixUnitaire: 50, montant: 50 }
        ]
      },
      {
        service: 'Réparation',
        sousCategories: [
          { service: 'Embrayage', unite: 1, prixUnitaire: 200, montant: 200 },
          { service: 'Disque d\'embrayage', unite: 1, prixUnitaire: 150, montant: 150 },
          { service: 'Freins', unite: 1, prixUnitaire: 100, montant: 100 },
          { service: 'Plaquette de freins', unite: 1, prixUnitaire: 80, montant: 80 }
        ]
      }
    ];
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalMontant = this.detailsDevis.reduce((acc: number, detail: any) => {
      return acc + detail.sousCategories.reduce((subAcc: number, sousCategorie: any) => subAcc + sousCategorie.montant, 0);
    }, 0);
  }

  exporterPDF() {
    console.log('Exporter en PDF');
  }

  exporterFacture() {
    console.log('Exporter la facture');
  }
}
