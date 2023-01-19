import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/productService';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: any;
  constructor(
    private ProductService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const productObservable = this.ProductService.getProductById(
        params.get('productId')!
      );
      productObservable.subscribe(
        (data) => {
          this.product = data;
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
