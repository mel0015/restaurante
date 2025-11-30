import { Component, OnInit } from '@angular/core';
import { OpinionesService } from '../../services/opinionesService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado-opiniones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-opiniones.html',
  styleUrl: './listado-opiniones.scss'
})
export class ListadoOpiniones implements OnInit {
  opiniones: any[] = [];

  constructor(private opinionesService: OpinionesService) {}

  ngOnInit(): void {
    this.opinionesService.obtenerOpiniones().subscribe({
      next: data => this.opiniones = data,
      error: err => console.error('Error al cargar opiniones', err)
    });
  }
}
