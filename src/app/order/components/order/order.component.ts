import { Component, OnInit } from '@angular/core';
import { Product} from './../../../product.model'
import { CartService} from './../../../core/service/cart/cart.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
productos$: Observable<Product[]>;
  constructor(
    private  cartService:CartService
  ) { 
    this.productos$ = this.cartService.cart$;
  }

  ngOnInit(): void {
  }

}
