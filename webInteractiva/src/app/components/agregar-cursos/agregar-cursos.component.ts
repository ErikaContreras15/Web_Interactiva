import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-agregar-cursos',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './agregar-cursos.component.html',
  styleUrl: './agregar-cursos.component.scss'
})

export class AgregarCursoComponent implements OnInit {
  curso = {
    nombre: '',
    docente: '',
    fechaInicio: '',
    duracion: 0,
    descripcion: ''
  };

  cursos: any[] = [];

  ngOnInit() {
    this.cargarCursos(); 
  }

  agregarCurso() {
    if (this.curso.nombre && this.curso.docente && this.curso.fechaInicio && this.curso.duracion && this.curso.descripcion) {
      // Crear un objeto curso con los datos actuales
      const nuevoCurso = { ...this.curso };

      // Guardar en localStorage
      /*let cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];*/
      let cursosGuardados = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')!) : [];


      cursosGuardados.push(nuevoCurso);
      localStorage.setItem('cursos', JSON.stringify(cursosGuardados));

      // Actualizar la lista en la vista
      this.cursos.push(nuevoCurso);

      // Limpiar el formulario
      this.limpiarFormulario();
    }
  }

  cargarCursos() {
    const cursosGuardados = localStorage.getItem('cursos') ? JSON.parse(localStorage.getItem('cursos')!) : [];
    this.cursos = cursosGuardados; // Cargar los cursos desde el localStorage
  }

 /* cargarCursos() {
    const cursosGuardados = JSON.parse(localStorage.getItem('cursos')) || [];
    this.cursos = cursosGuardados; 
  }*/

  eliminarCurso(index: number) {
    this.cursos.splice(index, 1);
    localStorage.setItem('cursos', JSON.stringify(this.cursos)); 
  }

  limpiarFormulario() {
    this.curso = {
      nombre: '',
      docente: '',
      fechaInicio: '',
      duracion: 0,
      descripcion: ''
    };
  }
}

