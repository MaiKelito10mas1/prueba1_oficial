import { Component } from '@angular/core';
import { Clase } from './componentes/modelos/clase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Prueba1';

  public listarSeccion: Array<Clase> = [{
    sigla: "A",
    id: 1,
    }
  ]

  public recibirRegistro(nuevoRegistro: Clase): void{
    this.listarSeccion.push(nuevoRegistro)
  }
}
