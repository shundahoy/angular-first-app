import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  product: any;
  products = [
    {
      id: 0,
      name: 'Phone XL',
      price: 799,
      cover: './assets/img/phone-cover.jpg',
      description: 'A large phone with one of the best screens',
      head1: 'head1',
      head2: 'head2',
      head3: 'head3',
      headText1: 'headText1',
      headText2: 'headText2',
      headText3: 'headText3',
    },
    {
      id: 1,
      name: 'Phone Mini',
      price: 699,
      cover: './assets/img/phone-cover.jpg',
      description: 'A great phone with one of the best cameras',
      head1: 'head1',
      head2: 'head2',
      head3: 'head3',
      headText1: 'headText1',
      headText2: 'headText2',
      headText3: 'headText3',
    },
    {
      id: 2,
      name: 'Phone Standard',
      price: 299,
      cover: './assets/img/phone-cover.jpg',
      description: 'description',
      head1: 'head1',
      head2: 'head2',
      head3: 'head3',
      headText1: 'headText1',
      headText2: 'headText2',
      headText3: 'headText3',
    },
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = this.products[+params.get('productId')!];
    });
  }
}
