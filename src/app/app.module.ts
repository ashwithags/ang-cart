import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SortPipe } from './sort.pipe';
import { FilterOnPricePipe } from './filter-on-price.pipe';
import { ProductsGridComponent } from './Shared/products-grid/products-grid.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './admin/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    HeaderComponent,
    HomeComponent,
    SortPipe,
    FilterOnPricePipe,
    ProductsGridComponent,
    AdminComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
