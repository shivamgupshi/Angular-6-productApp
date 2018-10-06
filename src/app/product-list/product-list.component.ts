import { Component, OnInit } from '@angular/core';
import { GetProductService } from '../core/service/products/get-product.service';

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
  errorMessage = '';
  query: string = '';
  products: any[] = [];
  _listFilter = '';
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
        this.products = product
      },
      error => this.errorMessage = <any>error
    );
  }




}