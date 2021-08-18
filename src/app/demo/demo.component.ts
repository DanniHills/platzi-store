import { Component, OnInit } from '@angular/core';
import {} from  './../shared/shared.module'
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';
  items =['Danixa', 'Javier','Cristian'];
  power=10;
 
  addItems() {
    this.items.push('nuevo item');

  };
  deleteItems(index: number){
    this.items.splice(index,1)
  };
}
