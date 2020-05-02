import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInComponent} from './pages/sign-in/sign-in.component';
import {ProductComponent} from './pages/product/product.component';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {SigninGuard} from './guard/signin.guard';
import { IposComponent } from './pages/ipos/ipos.component';
import { CompanyComponent } from './pages/company/company.component';
import { SectorComponent } from './pages/sector/sector.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: 'products', component: ProductComponent},
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [SigninGuard]},
  { path: 'ipos', component: IposComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'sector', component: SectorComponent},
  { path: 'profile', component: ProfileComponent},


];

@NgModule({
  // Registering the RouterModule.forRoot() in the AppModule imports makes the Router service available everywhere in the application.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
