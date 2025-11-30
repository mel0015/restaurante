import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservacionesService {

  private apiURL = 'http://localhost:3000/reservaciones';

  constructor(private http: HttpClient) {}

  // POST
  guardarReservacion(data: any): Observable<any> {
      const token = localStorage.getItem('token');

      const headers = new HttpHeaders({
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
  });

  return this.http.post(this.apiURL, data, { headers });
}

  // GET
  obtenerReservaciones(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}


