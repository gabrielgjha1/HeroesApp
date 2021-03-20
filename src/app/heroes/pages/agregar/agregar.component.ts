import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes, Publisher } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import {switchMap} from 'rxjs/operators';
import { pipe } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  durationInSeconds = 5;

  heroe:Heroes = {

    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img:''

  }

  publusher = [
    {
      id:'DC Comics',
      desc:'DC - Comics'
    },
    {
      id:'Marvel Comics',
      desc:'Marvel - Comics'
    },
  ]

  constructor(private heroesService:HeroesService,private activateRoute:ActivatedRoute,private router:Router,private _snackbar:MatSnackBar,public dialog: MatDialog) {


  }

  ngOnInit(): void {


    //verifica si estoy en editar

    if (this.router.url.includes('editar')){

      this.activateRoute.params
      .pipe(
        switchMap(({id})=>this.heroesService.getOneHero(id))
      )
      .subscribe( heroe=>this.heroe = heroe);

    }




    }


    guardar(){
      if (this.heroe.superhero.trim().length === 0){

        return;

      }


      if (this.heroe.id){
        //actualizar
        this.heroesService.actualizarHeroe(this.heroe).subscribe(resp=>{
          this.mostrarSnakbar('Se agrego el heroe: '+resp.superhero);
          console.log(resp)

        });

      }else{
        //guardar

      this.heroesService.agregarHeroe(this.heroe).subscribe(resp=>{
        console.log('respuesta'+resp)
        this.mostrarSnakbar(resp.superhero);

      });



      }




    }

    eliminar(){


      this.heroesService.eliminarHeroe(this.heroe.id).subscribe((resp)=>console.log(resp))


    }

    mostrarSnakbar (mensaje:string){

      this._snackbar.open(mensaje, '!ok', {
        duration: this.durationInSeconds * 1000,
      });

    }

}
