import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroes } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  public url:string= environment.urlAPi;
  constructor(private http:HttpClient) { }


  getHeroes(): Observable <Heroes[]> {

    return  this.http.get<Heroes[]>(this.url+'heroes');

  }

  getOneHero(id:string): Observable<Heroes>{

    return this.http.get<Heroes>(this.url+'heroes/'+id);

  }

  findHero(termino:string):Observable<Heroes[]>{

    return this.http.get<Heroes[]>(this.url+'heroes?q='+termino+'&_limit=6')

  }


  agregarHeroe(heroe:Heroes){

    return this.http.post<Heroes>(this.url+'heroes',heroe);

  }
  actualizarHeroe(heroe:Heroes){

    return this.http.put<Heroes>(this.url+'heroes/'+heroe.id,heroe);

  }
  eliminarHeroe(id:string){

    return this.http.delete<any>(this.url+'heroes/'+id);

  }



}
