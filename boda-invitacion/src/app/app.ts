import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ReservacionComponent } from './pages/reservacion/reservacion';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink,RouterLinkActive,CommonModule,ReservacionComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  protected readonly title = signal('boda-invitacion');
   constructor(private router: Router) {}

  logout() {
    // Limpiar sesión / token
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    // Redirigir al inicio o login
    this.router.navigate(['/']);
  }
}
