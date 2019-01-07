import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductDetailsComponent } from './product-details.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsGuard } from './product-details.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductsComponent },
      {
        path: 'product/:id',
        canActivate: [ProductDetailsGuard],
        component: ProductDetailsComponent
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
