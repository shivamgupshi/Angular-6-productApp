import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

import { GetProductService } from '../../../core/service/products/get-product.service';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnChanges {
  constructor(private getProducts: GetProductService) { }

  @Input() rating = 0;
  starWidth = 0;
  // @Output() ratingClicked: EventEmitter<string> =
  //   new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
    this.getProducts.sendMessage(`The rating ${this.rating} was clicked!`);
  }

}
