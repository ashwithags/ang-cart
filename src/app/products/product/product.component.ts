import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId:any = 0;
  productDetails:any= 0;
  productCategory:String='';
  productListOfCategory:any = [];

  constructor(
    private route:ActivatedRoute,
    private productService:ProductService,
    private router:Router
    ) {
    this.productId = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit(): void {
    console.log(this.productId);

      this.getProductDetail();

  }

  getProductDetail(){
    this.productService.fetchSingleProduct(this.productId).subscribe(
      data=>{
          this.productDetails = data;
          this.productCategory = data.category;
          this.getProductCategory();
       },
      error=>{
        console.log(error)
      }
    )
  }

  getProductCategory(){
    this.productService.getProductCategory(this.productCategory).subscribe(
      data=>{
        this.productListOfCategory = data.products;
        console.log(data);
      }
    )
  }

  viewProduct(prodId:number){
    this.router.navigate(['\product',prodId])
    console.log(prodId);
    this.productId = prodId;
    this.getProductDetail();

  }

}
