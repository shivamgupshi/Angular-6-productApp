import { Pipe, PipeTransform } from '@angular/core';

import { Product } from '../../model/product.model';

@Pipe({
  name: 'startsWith'
})
export class StartsWithPipe implements PipeTransform {
  transform(value: Product[] , term: string): any[] {
    return value.filter((x: Product) => x.productName.toLowerCase().startsWith(term.toLowerCase()) || x.productCode.toLowerCase().startsWith(term.toLowerCase()))
  }
}
