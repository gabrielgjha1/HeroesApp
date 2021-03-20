import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { EditComponent } from './pages/edit/edit.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { TarjetaHeroesComponent } from './components/tarjeta-heroes/tarjeta-heroes.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AgregarComponent, BuscarComponent, HomeComponent, ListarComponent, EditComponent, HeroesComponent, TarjetaHeroesComponent, ImagenPipe],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ]
})
export class HeroesModule { }
