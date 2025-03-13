import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Login } from './app/pages/auth/login';
import { AccueilClientComponent } from './app/pages/client/accueil-client/accueil-client.component';
import { AccueilManager } from './app/pages/manager/accueilManager';
import { AccueilMecanicien } from './app/pages/mecanicien/accueilMecanicien';

export const appRoutes: Routes = [
    { path: '', component: Login }, //rehefa vao miditra dia Login

    //ato anatin'ity izay page misy navbar ny layout-any
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'accueilClient', component: AccueilClientComponent },
            { path: 'accueilManager', component: AccueilManager },
            { path: 'accueilMecanicien', component: AccueilMecanicien },
        ]
    },

    //eto ivelany otran'izao izay tsy mila navbar
    { path: 'notfound', component: Notfound },
    { path: '**', redirectTo: '/notfound' }
];