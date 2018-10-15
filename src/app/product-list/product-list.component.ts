import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { GetProductService } from '../core/service/products/get-product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  subscription: Subscription;
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  textMessage = false;
  showImage = false;
  errorMessage: string;
  query = '';
  products: Product[];
  _listFilter: string = '';
  constructor(private getProducts: GetProductService, private route: ActivatedRoute) {
    this.subscription = this.getProducts.getMessage().subscribe(message => {
      if (message) {
        this.pageTitle = 'Product List: ' + message.text;
        this.textMessage = true;
      } else {
        this.pageTitle = 'Product List: ' + "";
        this.textMessage = false;
      }
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  clearMessage(): void {
    this.getProducts.clearMessage();
  }

  ngOnInit(): void {
   this.query =  this.route.snapshot.queryParams['filterBy'] || '';
   this.showImage = this.route.snapshot.queryParams['showImage'] === 'true';
    this.getProducts.getProducts().subscribe(
      product => {
        this.products = product;
      },
      error => this.errorMessage = <any>error
    );
  }




}
