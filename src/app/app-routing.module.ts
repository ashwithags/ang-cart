import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './products/product/product.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:'products',component:ProductsComponent},
  {path:'product/:id', component:ProductComponent},
  {path:'category',component:CategoryComponent},
  {path:'cart', component:CartComponent},
  {path:'',component:HomeComponent},
  {path:'employee', component:EmployeeComponent},
  {path:'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
