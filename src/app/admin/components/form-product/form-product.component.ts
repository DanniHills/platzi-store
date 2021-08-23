import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ProductsService } from './../../../core/service/products/products.service'
import { MyValidators } from './../../../utils/validators';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss']
})
export class FormProductComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.buildForm();
  }
  ngOnInit(): void {
  }
  saveProduct(event: Event) {
    event.preventDefault();
    if (this.form.value) {
      const producto = this.form.value
      this.productsService.createproduct(producto)
        .subscribe((productoCreado) => {
          console.log(productoCreado);
          this.router.navigate(['./admin/products']);
        })
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', [Validators.required]],
    });
  }

 get priceField() {
   return this.form.get('price');
 }
}