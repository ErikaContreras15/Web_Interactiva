import { Component } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';
import { AgregarCursosComponent } from '../agregar-cursos/agregar-cursos.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CursosComponent,AgregarCursosComponent,ContactoComponent,RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
