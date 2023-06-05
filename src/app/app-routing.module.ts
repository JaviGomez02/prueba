import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { IncidenciasComponent } from './incidencias/incidencias/incidencias.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'incidencias',
    loadChildren: () => import('./incidencias/incidencias.module').then(m => m.IncidenciasModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
