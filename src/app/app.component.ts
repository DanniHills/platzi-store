import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'platzi-store';
  items =['Danixa', 'Javier','Cristian'];
  addItems() {
    this.items.push('nuevo item');

  }
  deleteItems(index: number){
    this.items.splice(index,1)
  }
}
