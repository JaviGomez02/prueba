import { Component } from '@angular/core';
import { Incidencias } from 'src/app/interfaces/incidencias.interface';
import { IncidenciasService } from 'src/app/services/incidencias.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incidencias',
  templateUrl: './incidencias.component.html',
  styleUrls: ['./incidencias.component.css']
})
export class IncidenciasComponent {
  issues: Incidencias[]=[]
  issue !: Incidencias
  id: any|string;

  constructor(private servicio: IncidenciasService, private route:Router) { }

  ngOnInit(): void {
    this.servicio.getIncidencias()
    .subscribe({
      next:(resp)=>{
        this.issues=resp
      }
    })
  }

  borrarIncidencia(id:string){
    this.servicio.borrarIncidencia(id)
    .subscribe({
      next:(resp)=>{
        window.location.reload()
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
