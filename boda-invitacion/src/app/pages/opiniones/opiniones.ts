import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { OpinionesService } from '../../services/opinionesService';
import { UsuariosService } from '../../services/usuarios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opiniones',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './opiniones.html',
  styleUrls: ['./opiniones.scss']
})
export class OpinionesComponent {

  model = {
    calificacion: null,
    comentario: ''
  };

  constructor(private opinionesService: OpinionesService,
  private usuariosService: UsuariosService
  ) {}

 onSubmit(form: NgForm) {
  if (form.invalid) return;

  const token = localStorage.getItem('token');
  if (!token) {
    alert("Debes iniciar sesión para dejar una opinión");
    return;
  }


  const data = {
    calificacion: this.model.calificacion,
    comentario: this.model.comentario
  };

  this.opinionesService.guardarOpinion(data).subscribe({
    next: () => {
      alert("Opinión registrada con éxito");
      form.resetForm();
    },
    error: (err) => {
      console.error("Error en backend:", err);
      alert("Error al guardar la opinión");
    }
  });
}
}
