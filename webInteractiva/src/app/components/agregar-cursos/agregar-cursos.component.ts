import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

//import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-agregar-cursos',
  standalone: true,
  imports: [ FormsModule,CommonModule],
  templateUrl: './agregar-cursos.component.html',
  styleUrl: './agregar-cursos.component.scss'
})

export class AgregarCursoComponent implements OnInit {

    cursos: any[] = []; // Array para almacenar los cursos
    nuevoCurso = {
      nombre: '',
      docente: '',
      fechaInicio: '',
      duracion: '',
      descripcion: ''
    };
  
    ngOnInit() {
      this.cargarCursos(); 
    }
  
   
    agregarCurso() {
      if (!this.nuevoCurso.nombre || !this.nuevoCurso.docente || !this.nuevoCurso.fechaInicio || !this.nuevoCurso.duracion || !this.nuevoCurso.descripcion) {
        alert('Por favor, completa todos los campos.');
        return;
      }
  
      const cursosGuardados = JSON.parse(localStorage.getItem('cursos') || '[]');
      cursosGuardados.push(this.nuevoCurso);
      localStorage.setItem('cursos', JSON.stringify(cursosGuardados));
  
      this.nuevoCurso = {
        nombre: '',
        docente: '',
        fechaInicio: '',
        duracion: '',
        descripcion: ''
      };
  
      this.cargarCursos(); 
    }
  
   
    cargarCursos() {
      this.cursos = JSON.parse(localStorage.getItem('cursos') || '[]');
    }
  
    
    eliminarCurso(index: number) {
      const cursosGuardados = JSON.parse(localStorage.getItem('cursos') || '[]');
      cursosGuardados.splice(index, 1);
      localStorage.setItem('cursos', JSON.stringify(cursosGuardados));
      this.cargarCursos(); 
    }

}
  