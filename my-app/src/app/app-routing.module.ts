import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SigninGuard} from './guard/signin.guard';
import { AdminSignInComponent } from './pages/admin/sign-in/admin-sign-in.component';
import { UploaderComponent } from './pages/admin/import-data/uploader.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { ProductComponent } from './pages/user/product/product.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';
import { IposComponent } from './pages/user/ipos/ipos.component';
import { CompanyComponent } from './pages/user/company/company.component';
import { SectorComponent } from './pages/user/sector/sector.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { ManageCompanyComponent } from './pages/admin/manage-company/manage-company.component';
import { ManageSectorComponent } from './pages/admin/manage-sector/manage-sector.component';
import { UpdateIpoComponent } from './pages/admin/update-ipo/update-ipo.component';


const routes: Routes = [
  { path: 'sign-in', component: SignInComponent},
  { path: 'products', component: ProductComponent},
  { path: 'product/:id', component: ProductDetailComponent, canActivate: [SigninGuard]},
  { path: 'ipos', component: IposComponent},
  { path: 'company', component: CompanyComponent},
  { path: 'sector', component: SectorComponent},
  { path: 'profile', component: ProfileComponent},

  //admin
  { path: 'admin-sign-in', component: AdminSignInComponent},
  { path: 'upload-data', component: UploaderComponent},
  { path: 'manage-company', component: ManageCompanyComponent},
  { path: 'manage-sector', component: ManageSectorComponent},
  { path: 'update-ipo', component: UpdateIpoComponent},


];

@NgModule({
  // Registering the RouterModule.forRoot() in the AppModule imports makes the Router service available everywhere in the application.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
