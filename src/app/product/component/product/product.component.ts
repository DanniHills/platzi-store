import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges, DoCheck, OnDestroy } from "@angular/core";
import { Product } from '../../../product.model'
import { CartService} from './../../../core/service/cart/cart.service'


@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck {
    @Input() products: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    constructor(
        private cartService: CartService
    ) {
        
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
        this.cartService.addCart(this.products);
    }
    today= new Date();
  
}