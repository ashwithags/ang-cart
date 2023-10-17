import { Component, OnInit } from '@angular/core';
import { CartService } from '../Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartDetails:any = [];
  public errorMessage:String ='';

  constructor(private cart:CartService) { }

  ngOnInit(): void {

    this.cart.getCartdetails().subscribe(
      data=>{this.cartDetails = data.carts[0].products;
             console.log(this.cartDetails);      
      },
      error=>{
          this.errorMessage = error;
          console.log(this.errorMessage);
      }

    )
  }

}
