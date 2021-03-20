import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './pages/listar/listar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { EditComponent } from './pages/edit/edit.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';

const rutas:Routes = [


  {

    path:'',
    component:HomeComponent,
    children:[

      {
        path:'listado',
        component:ListarComponent,
      },
      {
        path:'agregar',
        component:AgregarComponent,
      },
      {
        path:'editar/:id',
        component:AgregarComponent,
      },
      {
        path:'buscar',
        component:BuscarComponent,
      },
      {
        path:':id',
        component:HeroesComponent,
      },

      {
        path:'**',
        redirectTo:'listado',
      },


    ]

  }
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(rutas)
  ],
  exports:[
    RouterModule
  ]
})
export class HeroesRoutingModule { }
