import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Login } from './app/pages/auth/login';
import { AccueilClient } from './app/pages/client/accueilClient';
import { DemandeDevisClient } from './app/pages/client/demandeDevisClient';
import { AccueilManager } from './app/pages/manager/accueilManager';
import { AccueilMecanicien } from './app/pages/mecanicien/accueilMecanicien';

export const appRoutes: Routes = [
    { path: '', component: Login }, //rehefa vao miditra dia Login

    //ato anatin'ity izay page misy navbar ny layout-any
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'accueilClient', component: AccueilClient },
            { path: 'demandeDevisClient', component: DemandeDevisClient },
            { path: 'accueilManager', component: AccueilManager },
            { path: 'accueilMecanicien', component: AccueilMecanicien },
        ]
    },

    //eto ivelany otran'izao izay tsy mila navbar
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];