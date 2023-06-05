import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncidenciasRoutingModule } from './incidencias-routing.module';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { DetalleIncidenciaComponent } from './detalle-incidencia/detalle-incidencia.component';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IncidenciasComponent,
    DetalleIncidenciaComponent,
    CrearIncidenciaComponent
  ],
  imports: [
    CommonModule,
    IncidenciasRoutingModule,
    ReactiveFormsModule
  ]
})
export class IncidenciasModule { }
