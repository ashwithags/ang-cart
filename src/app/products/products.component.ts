import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsList:any =[];
  public error:any = "";
  

  constructor(
    private prod:ProductService,
    private router:Router) {
   }

  ngOnInit(): void {

    this.prod.getProductList().subscribe(
      data=>{
        this.productsList = data;
        console.log(this.productsList);  
      },
      error=>{
        this.error = error;
        console.log(this.error);
      }

    )

  }

  viewProduct(prodId:number){
    this.router.navigate(['\product',prodId])
    console.log(prodId);
  }


}
