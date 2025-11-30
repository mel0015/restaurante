import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OpinionesService {

  private apiURL = 'http://localhost:3000/opiniones'; // Ajusta según tu backend

  constructor(private http: HttpClient) {}

  // POST → Guardar opinión
 guardarOpinion(opinion: any): Observable<any> {
  const token = localStorage.getItem('token');

   if (!token) {
    console.error('No hay token, el usuario debe hacer login primero');
    return throwError(() => new Error('Usuario no logueado'));
  }

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  return this.http.post(this.apiURL, opinion, { headers });
}

  // GET → Obtener todas las opiniones
  obtenerOpiniones(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
