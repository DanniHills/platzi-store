import { Injectable } from '@angular/core';
import {Product} from './product.model';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Product[] = [
    {
    id: '1',
    image: 'assets/imagenes/camiseta.png',
    title: 'Camiseta',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '2',
    image: 'assets/imagenes/hoodie.png',
    title: 'Hoodie',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '3',
    image: 'assets/imagenes/mug.png',
    title: 'Mug',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '4',
    image: 'assets/imagenes/pin.png',
    title: 'Pin',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '5',
    image: 'assets/imagenes/stickers1.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
  {
    id: '6',
    image: 'assets/imagenes/stickers2.png',
    title: 'Stickers',
    price: 80000,
    description: 'bla bla bla bla bla'
  },
];
  constructor() { }
  getAllProducts(){
    return this.products
  }
  getProduct( id: string){
    return this.products.find(item =>id === item.id);

  }
}
