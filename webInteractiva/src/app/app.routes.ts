import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AgregarCursosComponent } from './components/agregar-cursos/agregar-cursos.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    { path: 'Inicio', component: InicioComponent },
    { path: 'Cursos', component: CursosComponent },
    { path: 'AgregarCurso', component: AgregarCursosComponent },
    { path: 'Contacto', component: ContactoComponent }
  ];




