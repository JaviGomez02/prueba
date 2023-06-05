import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Incidencias } from 'src/app/interfaces/incidencias.interface';
import { IncidenciasService } from 'src/app/services/incidencias.service';

@Component({
  selector: 'app-detalle-incidencia',
  templateUrl: './detalle-incidencia.component.html',
  styleUrls: ['./detalle-incidencia.component.css']
})
export class DetalleIncidenciaComponent implements OnInit{

  constructor(private route: ActivatedRoute, private servicio:IncidenciasService, private router: Router){}

  incidencia!:Incidencias

  ngOnInit(): void {
    this.servicio.getIncidenciaId(this.route.snapshot.params['id'])
    .subscribe({
      next:(resp)=>{
        this.incidencia=resp
      }
    })
  }
  
  volver(){
    this.router.navigateByUrl('/incidencias')
  }
}
