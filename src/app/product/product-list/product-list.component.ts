import { Component } from '@angular/core';
import { ProductService } from '../shared/productService';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: any;
  constructor(private ProductService: ProductService) {}
  ngOnInit() {
    const productsObservable = this.ProductService.getProducts();
    productsObservable.subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.log('err');
      },
      () => {
        console.log('complete');
      }
    );
  }
}
