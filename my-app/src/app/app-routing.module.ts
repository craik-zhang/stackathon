import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {SigninGuard} from './guard/signin.guard';

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'products', component: ProductComponent, canActivate: [SigninGuard]},
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [SigninGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
