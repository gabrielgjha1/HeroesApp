import { Component, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(private _HeroesService:HeroesService) { }


  public heroes:Heroes[]=[];


  ngOnInit(): void {


    this.traerHeroes();

  }

  traerHeroes() {

    this._HeroesService.getHeroes().subscribe((resp:Heroes[])=>{

      this.heroes=resp;

    });
  }


}
