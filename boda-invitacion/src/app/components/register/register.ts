import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UsuariosService } from '../../services/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.scss']
})
export class RegisterComponent {
  model = {
    nombre: '',
    telefono: '',
    contrasena: ''
  };

  constructor(private usuariosService: UsuariosService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    this.usuariosService.register(this.model).subscribe({
      next: (res) => {
        alert("Usuario registrado correctamente");
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        alert("Error al registrar usuario");
      }
    });
  }
}
