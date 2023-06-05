import { Component } from '@angular/core';
import { FormBuilder,FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IncidenciasService } from 'src/app/services/incidencias.service';

@Component({
  selector: 'app-crear-incidencia',
  templateUrl: './crear-incidencia.component.html',
  styleUrls: ['./crear-incidencia.component.css']
})
export class CrearIncidenciaComponent {


  constructor(private fb: FormBuilder, private servicio:IncidenciasService, private router:Router){}

  myForm: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    descripcion: [null, [Validators.required]]
})

  volver(){
    this.router.navigateByUrl('/incidencias')
  }

  crearIncidencia(){
    this.servicio.crearIncidencia(this.myForm.value.titulo, this.myForm.value.descripcion)
    .subscribe({
      next:(resp)=>{
        this.router.navigateByUrl('/incidencias')
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
