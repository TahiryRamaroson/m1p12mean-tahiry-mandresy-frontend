import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Login } from './app/pages/auth/login';
import { AccueilClient } from './app/pages/client/accueilClient';
import { DemandeDevisClient } from './app/pages/client/demandeDevisClient';
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
            { path: 'accueilClient', component: AccueilClient },
            { path: 'demandeDevisClient', component: DemandeDevisClient },

            { path: 'satisfactionClient', component: SatisfactionClientComponent },
            { path: 'gestionMecanicienComponent', component: GestionMecanicienComponent },
            
            { path: 'accueilMecanicien', component: AccueilMecanicien },
        ]
    },

    //eto ivelany otran'izao izay tsy mila navbar
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];