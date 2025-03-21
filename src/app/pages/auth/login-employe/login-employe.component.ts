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

@Component({
  selector: 'app-login-employe',
  imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
  templateUrl: './login-employe.component.html',
  styleUrl: './login-employe.component.scss'
})
export class LoginEmployeComponent {
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

          if(this.email == "manager") this.router.navigate(['/satisfactionClient']);
          else if(this.email == "mecanicien") this.router.navigate(['/tacheMeca']);
          else this.router.navigate(['/access']);
  }
}
