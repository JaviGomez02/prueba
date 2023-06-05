import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { IncidenciasModule } from './incidencias/incidencias.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    IncidenciasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
