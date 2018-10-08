import { Component, OnInit } from '@angular/core';

import { GetProductService } from '../core/service/products/get-product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage: string;
  query = '';
  products: Product[];
  _listFilter:string = '';
  constructor(private getProducts: GetProductService) {

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }


  ngOnInit(): void {
    this.getProducts.getProducts().subscribe(
      product => {
        this.products = product;
      },
      error => this.errorMessage = <any> error
    );
  }




}
