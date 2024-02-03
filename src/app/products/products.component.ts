import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product.model';
import { ProductService } from '../Service/product.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsList:any =[];
  public error:any = "";
  public prodLimitOptions:Number[]=[0,5,10,15];
  public ProductLimit:Number = 0;
  public prodLength:Number = 0; 
  public sortProductOptions:String[] = ["None","Price low to High", "Price High to Low", "Ratings","Discounts"];
  public sortProductSelected:String = "None";
  public priceRange:Number = 1500;

  constructor(
    private prod:ProductService,
    private router:Router) {
   }

  ngOnInit(): void {

    this.prod.getProductList().subscribe(
      data=>{
        this.productsList = data;
        this.prodLength = data.products.length;
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

  UpdateLimit(e:any){
    this.prod.getLimitedProduct(e.target.value).subscribe(
      data=>{
        this.productsList = data;
      }
    )
  }

  sortProduct(e:any){
    console.log(e.target.value);
  }


}
