import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss'
})
export class ContactoComponent {

  formularioContacto: FormGroup;
  mensajeEnviado = false;

  constructor(private formBuilder: FormBuilder) {
    // Inicializamos el formulario con validaciones requeridas
    this.formularioContacto = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      asunto: ['', Validators.required],
      mensaje: ['', Validators.required]
    });
  }

  // Método que se ejecuta al enviar el formulario
  enviarMensaje() {
    if (this.formularioContacto.invalid) {
      // Si el formulario es inválido, no hacer nada
      return;
    }

    // Si el formulario es válido, mostramos el mensaje de confirmación
    this.mensajeEnviado = true;
  }

  // Método para obtener el estado de control y verificar si está inválido
  campoInvalido(campo: string) {
    return this.formularioContacto.get(campo)?.invalid && this.formularioContacto.get(campo)?.touched;
  }
}
