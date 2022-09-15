import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaseComponent } from './componentes/clase/clase.component';
import { FormularioAlumnoComponent } from './componentes/formulario-alumno/formulario-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaseComponent,
    FormularioAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
