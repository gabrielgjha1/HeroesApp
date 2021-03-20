import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroe!:Heroes;

  constructor(private activateroute:ActivatedRoute,private _HeroesService:HeroesService,private route:Router) { }

  ngOnInit(): void {

    this.activateroute.params.subscribe(({id})=>{


      this._HeroesService.getOneHero(id).subscribe((resp:Heroes)=>this.heroe=resp);

      console.log(id)
    });


  }

  regresar(){

    this.route.navigateByUrl('/heroes/listado')

  }

}
