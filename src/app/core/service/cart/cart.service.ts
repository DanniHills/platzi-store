import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import {Product} from './../../../product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private producto: Product[] =[];
private cart=new BehaviorSubject<Product[]>([]);
cart$ = this.cart.asObservable();
  constructor() { }
  addCart(product:Product){
this.producto =[...this.producto, product];
this.cart.next(this.producto);
  }
}
