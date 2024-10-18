import { Component } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { RouterOutlet } from '@angular/router';
import { AgregarCursoComponent } from '../agregar-cursos/agregar-cursos.component';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CursosComponent,AgregarCursoComponent, ContactoComponent,RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {

}
