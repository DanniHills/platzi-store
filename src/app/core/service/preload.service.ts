import { Injectable } from '@angular/core';
import {PreloadingStrategy,Route, Router} from '@angular/router'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PreloadService implements PreloadingStrategy {

  preload(route:Route, load: ()=> Observable<any>): Observable<any> {
    if(route.data && route.data['preload']){
      return load();
    } else{
      return of()
    }
<<<<<<< HEAD
=======
    

>>>>>>> fc5d4d85693bd0d8ce1132201f8a4dae7b45ce72
   }
}
