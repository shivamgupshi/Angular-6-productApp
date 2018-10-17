import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { GetProductService } from '../core/service/products/get-product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private productService: GetProductService) {
}

  product = {};
  pageTitle = '';
  errorMessage = '';

  ngOnInit() {
    let data = this.route.snapshot.data['data'];
    if(data){
      this.pageTitle = data.productId;
      this.product = this.route.snapshot.data['data'];  
    }
  }

  
  onBack(): void {
    this.router.navigate(['/product'], {queryParamsHandling:"preserve"});
  }

}
