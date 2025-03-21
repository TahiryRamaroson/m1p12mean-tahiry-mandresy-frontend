import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { SessionService } from '../../../services/session.service';
import { LayoutService } from '../../../layout/service/layout.service';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  selector: 'app-inscription',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, DatePickerModule],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  constructor(private sessionService: SessionService, private router: Router) { }

  LayoutService = inject(LayoutService);
  
      isDarkTheme = computed(() => this.LayoutService.layoutConfig().darkTheme);
  
      toggleDarkMode() {
          this.LayoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
      }
  nom: string = '';
  prenom: string = '';
  dateNaissance: number = Date.now();
  contact: string = '';  
  email: string = '';
  password: string = '';
}
