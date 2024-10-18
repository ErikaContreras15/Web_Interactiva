
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  detallesVisibles: boolean[] = [];

  ngOnInit() {
    
    this.detallesVisibles = new Array(6).fill(false); // Asume que hay 6 cursos
  }

  toggleDetalles(index: number) {
    this.detallesVisibles[index] = !this.detallesVisibles[index];
  }
}
