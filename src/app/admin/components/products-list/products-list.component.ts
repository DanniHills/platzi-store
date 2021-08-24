import { Component, OnInit } from '@angular/core';
import { ProductsService} from './../../../core/service/products/products.service'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
products=[];
displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
    
  }
  
  fetchProducts(){
    this.productsService.getAllProducts()
    .subscribe(productos =>{
      this.products = productos;
      console.log(productos)

    })
  }
  deleteProduct(id:string){
    this.productsService.deleteProducto(id)
    .subscribe(res =>{
      console.log(res);
      alert("producto eliminado")
      this.fetchProducts();
    })
  }
}
