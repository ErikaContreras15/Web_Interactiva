import { Component, OnInit } from '@angular/core';

import { Curso } from '../../domain/Curso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent  {
}