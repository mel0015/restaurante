import { Routes } from '@angular/router';
import { ReservacionComponent } from './pages/reservacion/reservacion';
import { OpinionesComponent } from './pages/opiniones/opiniones';
import { Home } from './pages/home/home';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { ListadoReservaciones } from './pages/listado-reservaciones/listado-reservaciones';
import { ListadoOpiniones } from './pages/listado-opiniones/listado-opiniones';
export const routes: Routes = [
  // Página principal ahora es Home
    { path: '', component: Home },
    { path: 'reservacion', component: ReservacionComponent },
    { path: 'opiniones', component: OpinionesComponent },
    { path: 'listado-reservaciones', component: ListadoReservaciones },
    { path: 'listado-opiniones', component: ListadoOpiniones },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
// Opcional: Ruta de comodín para redirigir si la URL no existe
    { path: '**', redirectTo: '' }
];
