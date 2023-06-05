import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Incidencias } from '../../interfaces/incidencias.interface';
import { IncidenciasService } from '../../services/incidencias.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  issues: Incidencias[]=[]

  constructor(private servicio: IncidenciasService, private route:Router) { }

  ngOnInit(): void {
  }
}
