import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Notfound } from './app/pages/notfound/notfound';
import { Login } from './app/pages/auth/login';
import { Access } from './app/pages/auth/access';
import { Error } from './app/pages/auth/error';
import { InscriptionComponent } from './app/pages/auth/inscription/inscription.component';
import { LoginEmployeComponent } from './app/pages/auth/login-employe/login-employe.component';

import { AccueilClientComponent } from './app/pages/client/accueil-client/accueil-client.component';
import { DemandeDevisClientComponent } from './app/pages/client/demande-devis-client/demande-devis-client.component';
import { DetailsDemandeDevisClientComponent } from './app/pages/client/details-demande-devis-client/details-demande-devis-client.component';
import { DemandeRendezVousClientComponent } from './app/pages/client/demande-rendez-vous-client/demande-rendez-vous-client.component';
import { VehiculesClientComponent } from './app/pages/client/vehicules-client/vehicules-client.component';
import { HistoriqueRendezVousClientComponent } from './app/pages/client/historique-rendez-vous-client/historique-rendez-vous-client.component';
import { FaireDevisClientComponent } from './app/pages/client/faire-devis-client/faire-devis-client.component';

import { TacheMecaComponent } from './app/pages/mecanicien/tache-meca/tache-meca.component';

import { SatisfactionClientComponent } from './app/pages/manager/satisfaction-client/satisfaction-client.component';
import { GestionMecanicienComponent } from './app/pages/manager/gestion-mecanicien/gestion-mecanicien.component';
import { ReponseDevisComponent } from './app/pages/manager/reponse-devis/reponse-devis.component';
import { GestionRendezvousComponent } from './app/pages/manager/gestion-rendezvous/gestion-rendezvous.component';
import { GestionGarageEntretienComponent } from './app/pages/manager/gestion-garage-entretien/gestion-garage-entretien.component';
import { GestionGarageReparationComponent } from './app/pages/manager/gestion-garage-reparation/gestion-garage-reparation.component';
import { GestionGarageSpecialiteComponent } from './app/pages/manager/gestion-garage-specialite/gestion-garage-specialite.component';
import { GestionGarageMarqueComponent } from './app/pages/manager/gestion-garage-marque/gestion-garage-marque.component';
import { GestionGarageModeleComponent } from './app/pages/manager/gestion-garage-modele/gestion-garage-modele.component';

export const appRoutes: Routes = [
    { path: '', component: Login }, //rehefa vao miditra dia Login

    //ato anatin'ity izay page misy navbar ny layout-any
    {
        path: '',
        component: AppLayout,
        children: [
            { path: 'accueilClient', component: AccueilClientComponent },
            { path: 'demandeDevisClient', component: DemandeDevisClientComponent },
            { path: 'detailsDemandeDevisClient', component: DetailsDemandeDevisClientComponent },
            { path: 'demandeRendezVousClient', component: DemandeRendezVousClientComponent },
            { path: 'vehiculesClient', component: VehiculesClientComponent },
            { path: 'historiqueRendezVousClient', component: HistoriqueRendezVousClientComponent },
            { path: 'faireDevisClient', component: FaireDevisClientComponent},

            {path: 'tacheMeca', component: TacheMecaComponent},

            { path: 'satisfactionClient', component: SatisfactionClientComponent },
            { path: 'gestionMecanicienComponent', component: GestionMecanicienComponent },
            { path: 'reponseDevis', component: ReponseDevisComponent},
            { path: 'gestionRendezvous', component: GestionRendezvousComponent },
            { path: 'gestionGarageEntretien', component: GestionGarageEntretienComponent},
            { path: 'gestionGarageReparation', component: GestionGarageReparationComponent},
            { path: 'gestionGarageSpecialite', component: GestionGarageSpecialiteComponent},
            { path: 'gestionGarageMarque', component: GestionGarageMarqueComponent},
            { path: 'gestionGarageModele', component: GestionGarageModeleComponent}
        ]
    },

    //eto ivelany otran'izao izay tsy mila navbar
    { path: 'loginEmploye', component: LoginEmployeComponent },
    { path: 'inscription', component: InscriptionComponent },
    { path: 'notfound', component: Notfound },
    { path: 'access', component: Access },
    { path: 'error', component: Error },
    { path: '**', redirectTo: '/notfound' }
];