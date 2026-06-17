import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product: any = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const categoryCode = this.route.snapshot.paramMap.get('categoryCode');
    const productId = this.route.snapshot.paramMap.get('productId');

    if (categoryCode && productId) {
      this.productService.getProductDetail(categoryCode, productId).subscribe(data => {
        this.product = data;
      });
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
