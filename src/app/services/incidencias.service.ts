import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Incidencias } from '../interfaces/incidencias.interface';
import { Observable, switchMap, catchError, of } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class IncidenciasService {

    apiUrl: string = 'https://issues-xi.vercel.app/'
    constructor(
        private router: Router,
        private http: HttpClient
    ) { }

    getIncidencias() {
        return this.http.get<Incidencias[]>(this.apiUrl + "api/issues");
    }

    getIncidenciaId(id: string): Observable<Incidencias> {
        return this.http.get<Incidencias>(this.apiUrl + "api/issues/" + id)
    }

    borrarIncidencia(id: string): Observable<boolean> {
        return this.http.delete<any>(this.apiUrl + 'api/issues/' + id)
            .pipe(switchMap(resp => {
                return of(true);
            }), catchError(error => {
                return of(false);
            })
            )
    }

    crearIncidencia(titulo: string, descripcion: string) {
        return this.http.post<any>(this.apiUrl + 'api/issues', {'title':titulo, 'description':descripcion})
            .pipe(switchMap(resp => {
                return of(true);
            }), catchError(error => {
                return of(false);
            })
            )
    }


}