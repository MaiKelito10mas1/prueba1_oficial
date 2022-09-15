import { Component, Output, EventEmitter } from '@angular/core';
import { Clase, Sigla } from './../modelos/clase'

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss']
})
export class ClaseComponent {

public clase: Clase = {
  id: 0,
  sigla: 'A',
}

public rID(evento:Event): void{
  const ele = evento.target as HTMLInputElement;
  this.clase.id = Number.parseInt(ele.value) || 0;

}

public rSeccion(evento:Event): void{
  const ele = evento.target as HTMLSelectElement;
  this.clase.sigla = ele.value as Sigla;
}

@Output() public enviarRegistro = new EventEmitter<Clase>();
public guardarRegistro(){
  //copia de el registro para guardar la clase
  const copia: Clase = {
    ...this.clase
  }
  this.enviarRegistro.emit(copia);
  this.clase = {
    id: 0,
    sigla: 'A',
  }
}

}
