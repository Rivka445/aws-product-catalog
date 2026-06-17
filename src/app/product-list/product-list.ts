import { Component } from '@angular/core';
import { ProductService } from '../services/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [],

  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {
  categories = [
    { code: 'CAT_CLOTHES', name: 'בגדים ואופנה' },
    { code: 'CAT_ELEC', name: 'אלקטרוניקה וחשמל' }
  ];

  products: any[] = [];
  selectedCategoryName: string = '';

  constructor(private productService: ProductService, private router: Router) {}

  selectCategory(category: any) {
    this.selectedCategoryName = category.name;
    this.productService.getProductsByCategory(category.code).subscribe(data => {
      this.products = data;
    });
  }

  viewProduct(product: any) {
    this.router.navigate(['/product', product.CategoryCode, product.ProductId]);
  }
}
