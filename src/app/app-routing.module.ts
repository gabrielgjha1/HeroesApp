import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErorpageComponent } from './shared/erorpage/erorpage.component';


const routes: Routes = [

  {
    path:'auth',
    loadChildren:()=>import('./auth/auth.module').then(m =>m.AuthModule)
  },
  {
    path:'404',
    component:ErorpageComponent
  },
  {

    path:'heroes',
    loadChildren:()=>import('./heroes/heroes.module').then(m=>m.HeroesModule)

  },
  {
    path:'**',
    redirectTo:'404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
