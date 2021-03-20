import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-tarjeta-heroes',
  templateUrl: './tarjeta-heroes.component.html',
  styleUrls: ['./tarjeta-heroes.component.css']
})
export class TarjetaHeroesComponent implements OnInit {

  @Input() item!: Heroes;

  constructor() { }

  ngOnInit(): void {
  }

}
