import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { GetProductService } from '../core/service/products/get-product.service';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productEdit: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  errorMessage='';
  editId:number;
  id=0;
  product = { 
    productName: '',
    productCode: '',
    description: '',
    
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private addproduct: GetProductService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      this.id = +param['id'];
      if(this.id !== 0){
        this.addproduct.getProduct(this.id).subscribe(product => {
            this.product = product,
            this.editId = product.id
            error => this.errorMessage = <any>error 
        })
      }
      else{
        this.product = { productName: '',
        productCode: '',
        description: ''};
      }
    })

    this.productEdit = this.formBuilder.group({
      productId: Math.floor(Math.random()*100) + 1,
      productName: ['', Validators.required],
      productCode: ['', Validators.required],
      releaseDate: "March 19, 2016",
      description: ['', Validators.required],
      price: 19.95,
      starRating: 4.6,
      imageUrl: "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"

  });

  }
  get f() { return this.productEdit.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.productEdit.invalid) {
      
      return;
    }

    this.loading = true;

    if(this.id == 0){
      this.addproduct.addProducts(this.productEdit.value)
      .subscribe(
        data => {
          console.log(data)
          this.loading = false;
          alert('Added product Succesfully');
          this.router.navigate(['/product'])   
        },
        error => {
        console.log(error);
  
        });  

    }else{
      console.log(this.productEdit.value)
      this.addproduct.updateProduct(this.productEdit.value , this.editId)
      .subscribe(
        data => {
          console.log(data)
          this.loading = false;
          alert('Updated product Succesfully');  
          this.router.navigate(['/product']) 
        },
        error => {
        console.log(error);
  
        });  

      
    }





  }  

}
