import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, DoCheck, OnDestroy } from "@angular/core";
import { Product } from '../../../product.model'


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck {
    @Input() producto: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor() {
        console.log('1.constructor');
    }

    /* ngOnChanges(changes: SimpleChanges){
         console.log('2.onchangeon');
         console.log(changes)
 
     }*/
    ngOnInit() { //Solo ejecuta una vez cuando el componente esta en pantalla
        console.log('3.ngOnInit');
    }
    ngDoCheck() {
        console.log('4. ngDoCheck')
    }
    ngOnDestroy() {
        console.log('5. ngDestroy')
    }
    addCart() {
        console.log('añadir al carrito')
        this.productClicked.emit(this.producto.id);
    }
    today= new Date();
}