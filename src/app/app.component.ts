import { Component } from '@angular/core';
import{ Product} from "./product.model"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'platzi-store';
  items =['Danixa', 'Javier','Cristian'];
  power=10;
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
  addItems() {
    this.items.push('nuevo item');

  };
  deleteItems(index: number){
    this.items.splice(index,1)
  };

  clickProduct(id: number){
    console.log('product');
    console.log( id);
  }
}
