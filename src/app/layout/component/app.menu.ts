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
                            label: 'Mes demandes de devis',
                            icon: 'pi pi-fw pi-file',
                            routerLink: ['/demandeDevisClient']
                        },
                    ]
                },
            ]
        }

        else if(profil == "manager") {
            this.model = [
            
                {
                    label: '',
                    icon: 'pi pi-fw pi-briefcase',
                    routerLink: ['/pages'],
                    items: [
                        {
                            label: 'Accueil Manager',
                            icon: 'pi pi-fw pi-circle-off',
                            routerLink: ['/accueilManager']
                        },
                    ]
                },
            ]
        }

        else if(profil == "mecanicien") {
            this.model = [
            
                {
                    label: '',
                    icon: 'pi pi-fw pi-briefcase',
                    routerLink: ['/pages'],
                    items: [
                        {
                            label: 'Accueil Mécanicien',
                            icon: 'pi pi-fw pi-circle-off',
                            routerLink: ['/accueilMecanicien']
                        },
                    ]
                },
            ]
        }
        
    }
}

