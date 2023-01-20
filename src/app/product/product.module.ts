import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/productService';

const routes: Routes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':productId', component: ProductDetailComponent },
    ],
  },
];

@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, RouterModule.forChild(routes), CommonModule],
  providers: [ProductService],
  bootstrap: [],
})
export class ProductModule {}
