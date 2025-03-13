import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Login } from './app/pages/auth/login';
import { AccueilClientComponent } from './app/pages/client/accueil-client/accueil-client.component';
import { DemandeDevisClientComponent } from './app/pages/client/demande-devis-client/demande-devis-client.component';

import { AccueilMecanicien } from './app/pages/mecanicien/accueilMecanicien';

import { SatisfactionClientComponent } from './app/pages/manager/satisfaction-client/satisfaction-client.component';
import { GestionMecanicienComponent } from './app/pages/manager/gestion-mecanicien/gestion-mecanicien.component';

export const appRoutes: Routes = [
    { path: '', component: Login }, //rehefa vao miditra dia Login

    //ato anatin'ity izay page misy navbar ny layout-any
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'accueilClient', component: AccueilClientComponent },
            { path: 'demandeDevisClient', component: DemandeDevisClientComponent },

            { path: 'satisfactionClient', component: SatisfactionClientComponent },
            { path: 'gestionMecanicienComponent', component: GestionMecanicienComponent },
            
            { path: 'accueilMecanicien', component: AccueilMecanicien },
        ]
    },

    //eto ivelany otran'izao izay tsy mila navbar
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];