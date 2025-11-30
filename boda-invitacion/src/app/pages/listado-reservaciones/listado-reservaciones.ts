import { Component, OnInit } from '@angular/core';
import { ReservacionesService } from '../../services/reservacionesService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-reservaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-reservaciones.html',
  styleUrl: './listado-reservaciones.scss'
})
export class ListadoReservaciones  implements OnInit {
    reservaciones: any[] = [];

  constructor(private reservacionesService: ReservacionesService) {}

  ngOnInit(): void {
    this.reservacionesService.obtenerReservaciones().subscribe({
      next: data => this.reservaciones = data,
      error: err => console.error('Error al cargar reservaciones', err)
    });
  }

}
