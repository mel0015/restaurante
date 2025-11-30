import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'http://localhost:3000/usuarios';

  constructor(private http: HttpClient) {}

  // Registro de usuario
  register(data: { nombre: string, telefono: string, contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Login de usuario
  login(data: { telefono: string, contrasena: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Obtener token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Guardar token
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Eliminar token
  logout() {
    localStorage.removeItem('token');
  }


  getAuthHeaders(): HttpHeaders | null {
    const token = this.getToken();
    if (token) {
      return new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    }
    return null;
  }
}
