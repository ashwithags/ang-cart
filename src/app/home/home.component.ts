import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../Service/category.service';
import { ProductService } from '../Service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ProductCategory: string[] = [];
  public ProductList: any[] = [];
  public page: string = "Categories";

  constructor(
    private Catagory: CategoryService,
    private Product: ProductService
  ) { }

  ngOnInit(): void {

    this.getCategory();
  }

  getCategory() {
    this.Catagory.getCategories().subscribe(
      data => {
        this.ProductCategory = data;
        console.log(this.ProductCategory);
        this.fetchProduct(this.ProductCategory[0]);
      }
    )
  }

  fetchProduct(category: string) {
    this.Product.getProductCategory(category).subscribe(
      data => {
        this.ProductList = data.products;
      }
    )
  }




}
