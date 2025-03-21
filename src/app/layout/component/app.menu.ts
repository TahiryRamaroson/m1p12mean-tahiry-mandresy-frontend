import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { SessionService } from '../../services/session.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    constructor(private sessionService: SessionService) { }

    ngOnInit() {
        const profil = this.sessionService.getSession('profil');

        if(profil == "client") {
            this.model = [
            
                {
                    label: '',
                    icon: 'pi pi-fw pi-briefcase',
                    routerLink: ['/pages'],
                    items: [
                        {
                            label: 'Accueil',
                            icon: 'pi pi-fw pi-home',
                            routerLink: ['/accueilClient']
                        },
                        {
                            label: 'Mes véhicules',
                            icon: 'pi pi-fw pi-car',
                            routerLink: ['/vehiculesClient']
                        },
                        {
                            label: 'Faire un devis',
                            icon: 'pi pi-fw pi-file-edit',
                            routerLink: ['/faireDevisClient']
                        },
                        {
                            label: 'Mes demandes de devis',
                            icon: 'pi pi-fw pi-copy',
                            routerLink: ['/demandeDevisClient']
                        },
                        {
                            label: 'Historique des rendez-vous',
                            icon: 'pi pi-fw pi-calendar-clock',
                            routerLink: ['/historiqueRendezVousClient']
                        },
                    ]
                },
            ]
        }

        else if(profil == "manager") {
            this.model = [
                {
                    label: 'Tableau de bord',
                    items: [
                        { label: 'Satisfaction client', icon: 'pi pi-fw pi-heart', routerLink: ['/satisfactionClient'] },
                        { label: 'Chiffre d`affaire', icon: 'pi pi-fw pi-wallet', routerLink: [''] },
                        { label: 'Facturation', icon: 'pi pi-fw pi-chart-bar', class: 'rotated-icon', routerLink: [''] }
                    ]
                },
                {
                    label: 'Mes Taches',
                    items: [
                        {
                            label: 'Gestion garage',
                            icon: 'pi pi-fw pi-warehouse',
                            items: [
                                { 
                                    label: 'Mécanicien', 
                                    icon: 'pi pi-fw pi-user-edit', 
                                    routerLink: ['/gestionMecanicienComponent'] 
                                },
                                { 
                                    label: 'Spécialité mécanicien', 
                                    icon: 'pi pi-fw pi-graduation-cap', 
                                    routerLink: ['gestionGarageSpecialite'] 
                                },
                                {
                                    label: 'Entretien',
                                    icon: 'pi pi-fw pi-gauge',
                                    routerLink: ['gestionGarageEntretien']
                                },
                                {
                                    label: 'Réparation',
                                    icon: 'pi pi-fw pi-wrench',
                                    routerLink: ['gestionGarageReparation']
                                },
                                {
                                    label: 'Marque de véhicule',
                                    icon: 'pi pi-fw pi-car',
                                    routerLink: ['gestionGarageMarque']
                                },
                                {
                                    label: 'Modèle de véhicule',
                                    icon: 'pi pi-fw pi-car',
                                    routerLink: ['gestionGarageModele']
                                }
                            ]
                        },
                        { label: 'Gestion rendez-vous', icon: 'pi pi-fw pi-calendar-clock', routerLink: ['/gestionRendezvous'] },
                        { label: 'Réponse aux devis', icon: 'pi pi-fw pi-send', class: 'rotated-icon', routerLink: ['/reponseDevis'] }
                    ]
                },
            ]
        }

        else if(profil == "mecanicien") {
            this.model = [
                {
                    label: 'Mes Taches',
                    items: [
                        { label: 'Gestion travaux', icon: 'pi pi-fw pi-wrench', routerLink: ['/tacheMeca'] },
                    ]
                },
            ]
        }
        
    }
}

