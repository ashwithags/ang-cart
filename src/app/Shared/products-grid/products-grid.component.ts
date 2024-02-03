import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.css']
})
export class ProductsGridComponent implements OnInit {

@Input() productData:any  ;

constructor(
  private router:Router) {
 }

ngOnInit(): void {
  console.log(this.productData);


}
viewProduct(prodId:number){
  this.router.navigate(['\product',prodId])
  console.log(prodId);
}
}
