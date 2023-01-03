import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path:"product",
    component:ProductComponent,
    children:[
      {
        path:"create",
        component:AddproductComponent
      },
      {
        path:"edit/:id",
        component:AddproductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
