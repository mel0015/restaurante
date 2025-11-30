import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ReservacionesService } from '../../services/reservacionesService';
import { UsuariosService } from '../../services/usuarios';

@Component({
  selector: 'app-reservacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservacion.html',
  styleUrls: ['./reservacion.scss']
})
export class ReservacionComponent {

  model = {
    nombre:'',
    personas: null,
    fecha: '',
    hora: '',
    mensaje: '',
    telefono: ''
  };

  // Limitar fechas
  fechaMinima: string;
  fechaMaxima: string;

  // Horario del restaurante
  horaApertura: string = '14:00';
  horaCierre: string = '1:00';

  constructor(
    private reservacionesService: ReservacionesService,
    private usuariosService: UsuariosService
  ) {
    const hoy = new Date();
    this.fechaMinima = hoy.toISOString().split('T')[0];

    const limite = new Date();
    limite.setMonth(limite.getMonth() + 6); // límite máximo 6 meses adelante
    this.fechaMaxima = limite.toISOString().split('T')[0];
  }

 onSubmit(form: NgForm) {
    console.log("Datos enviados:", form.value);
    if (form.invalid) return;

    // Obtener token guardado en localStorage después del login
     const headers = this.usuariosService.getAuthHeaders();
    if (!headers) {
      alert("Debes iniciar sesión para hacer una reservación");
      return;
    }

    this.reservacionesService.guardarReservacion(form.value).subscribe({
      next: () => {
        console.log("Respuesta backend: OK");
        alert("Reservación guardada correctamente");
        form.resetForm();
      },
      error: (err) => {
        console.error("Error en backend:", err);
        alert("Error al guardar la reservación");
      }
    });
  }
}
