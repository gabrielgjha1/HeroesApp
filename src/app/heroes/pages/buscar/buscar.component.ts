import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  termino:string =" ";
  heroes:Heroes[]=[];
  heroeSeleccionado:Heroes;

  constructor(private heroesService:HeroesService) { }

  ngOnInit(): void {
  }

  buscando(){
    console.log('hola')
    this.heroesService.findHero(this.termino).subscribe((heroes=>{ console.log('aquixd'); return this.heroes = heroes}),(error=>{

        console.log(error);

    }));

  }

  opcionSeleccionada(evento:any) {
    const heroe:Heroes = evento.option.value
    this.termino = heroe.superhero ;

    this.heroesService.getOneHero(heroe.id).subscribe((resp:any)=>this.heroeSeleccionado=resp)



  }

}
