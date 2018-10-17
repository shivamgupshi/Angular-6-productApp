import { Injectable } from '@angular/core';
import { Resolve,ActivatedRouteSnapshot, RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';



import { Product } from '../model/product.model';
import { GetProductService } from '../core/service/products/get-product.service';


@Injectable()
export class ProductDetailResolver implements Resolve<Product> {
  constructor(private product: GetProductService,private router:Router){}

  resolve(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): Observable<Product> {
      let id = route.params['id'];
      return this.product.getProduct(+id);

  }



}