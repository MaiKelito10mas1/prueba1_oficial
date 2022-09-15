import { Component } from '@angular/core';
import { Alumno } from './../modelos/formularioA'

@Component({
  selector: 'app-formulario-alumno',
  templateUrl: './formulario-alumno.component.html',
  styleUrls: ['./formulario-alumno.component.scss']
})
export class FormularioAlumnoComponent {
  public alumno: Alumno = {
    nombre: '',
    apellido: '',
    rut: 0,
    edad: 0,
  }

  public rRut(evento:Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.rut = Number.parseInt(ele.value) || 0;
  }

  public rNombre(evento:Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.nombre = ele.value;
  }

  public rApellido(evento:Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.apellido = ele.value;
  }

  public rEdad(evento:Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.edad = Number.parseInt(ele.value) || 0;;
  }

}
