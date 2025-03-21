import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { SessionService } from '../../services/session.service';
import { LayoutService } from '../../layout/service/layout.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
    template: `
        <div class="fixed flex gap-4 top-8 right-8">
            <p-button type="button" (onClick)="toggleDarkMode()" [rounded]="true" [icon]="isDarkTheme() ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
        </div>
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="flex items-center justify-center mb-4">
                            <img src="assets/images/logo.svg" class="w-20 h-20">
                        </div>
                        <div class="text-center mb-2">
                            <span class="text-2xl">Se connecter pour continuer</span>
                        </div>
                        <div class="text-center mb-8">
                            <span class="text-muted-color font-medium"><a href="inscription">Vous n'avez pas encore de compte?</a></span>
                        </div>
                        <div>
                            <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Profil</label>
                            <input pInputText id="email1" type="text" placeholder="Adresse email" class="w-full md:w-[30rem] mb-8" [(ngModel)]="email" />

                            <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Mot de passe</label>
                            <p-password id="password1" [(ngModel)]="password" placeholder="Mot de passe" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>
                            
                            <p-button label="Se connecter" styleClass="w-full" (click)="login()"></p-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login {
    constructor(private sessionService: SessionService, private router: Router) { }

    LayoutService = inject(LayoutService);
    
        isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);
    
        toggleDarkMode() {
            this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
        }

    email: string = '';
    password: string = '';
    checked: boolean = false;

    login(): void {
            this.sessionService.setSession('profil', this.email);

            if(this.email == "client") this.router.navigate(['/accueilClient']);
    }
}