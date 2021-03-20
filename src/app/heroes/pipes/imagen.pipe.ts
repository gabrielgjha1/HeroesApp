import { Pipe, PipeTransform } from '@angular/core';
import { Heroes } from '../interfaces/heroes.interfaces';
import { HeroesComponent } from '../pages/heroes/heroes.component';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  //assets/heroes/{{item.id}}.jpg
  transform(item: Heroes):string {

    if (!item.id){

      return 'assets/no-image.png'

    }else if (item.alt_img){

      return item.alt_img;

    }else{
      let ruta:string = 'assets/heroes/'+item.id+'.jpg'
      return ruta;

    }




  }

}
