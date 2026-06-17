import { Routes } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:categoryCode/:productId', component: ProductDetail },
  { path: '**', redirectTo: '' }
];