import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncidenciasComponent } from './incidencias/incidencias.component';
import { DetalleIncidenciaComponent } from './detalle-incidencia/detalle-incidencia.component';
import { CrearIncidenciaComponent } from './crear-incidencia/crear-incidencia.component';

const routes: Routes = [
  {
    path: '',
    component: IncidenciasComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: DetalleIncidenciaComponent
  },
  {
    path: 'crear/crear',
    component: CrearIncidenciaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidenciasRoutingModule { }
