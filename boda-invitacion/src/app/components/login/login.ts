import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent {
  model = {
    telefono: '',
    contrasena: ''
  };

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.usuariosService.login(this.model).subscribe({
      next: (res: any) => {
        alert("Login exitoso");
        this.usuariosService.saveToken(res.token);
        this.router.navigate(['/reservacion']); // Redirige automáticamente
      },
      error: (err) => {
        console.error(err);
        alert("Teléfono o contraseña incorrectos");
      }
    });
  }
}
