import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/* bootstrap 按需导入，可以使我们最终的打包文件更小 */
import { NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { NgxFileUploadCoreModule } from "@ngx-file-upload/core";
import { NgxFileUploadUiCommonModule } from "@ngx-file-upload/ui";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//admin
import { AdminSignInComponent } from './pages/admin/sign-in/admin-sign-in.component';
import { UploaderComponent } from './pages/admin/import-data/uploader.component';
import { MessageService } from './services/admin/message.service';
import { ProductComponent } from './pages/user/product/product.component';
import { ProductDetailComponent } from './pages/user/product-detail/product-detail.component';
import { IposComponent } from './pages/user/ipos/ipos.component';
import { CompanyComponent } from './pages/user/company/company.component';
import { SectorComponent } from './pages/user/sector/sector.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { SignInComponent } from './pages/user/sign-in/sign-in.component';
import { MoneyPipe } from './pipe/money.pipe';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './interceptor/jwt.interceptor';
import { ManageCompanyComponent } from './pages/admin/manage-company/manage-company.component';
import { ManageSectorComponent } from './pages/admin/manage-sector/manage-sector.component';
import { UpdateIpoComponent } from './pages/admin/update-ipo/update-ipo.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { DetailCompanyComponent } from './pages/admin/detail-company/detail-company.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    IposComponent,
    CompanyComponent,
    SectorComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    MoneyPipe,
    //admin
    AdminSignInComponent,
    UploaderComponent,
    ManageCompanyComponent,
    ManageSectorComponent,
    UpdateIpoComponent,
    DetailCompanyComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbAlertModule,
    ReactiveFormsModule,
    NgxFileUploadCoreModule,
    NgxFileUploadUiCommonModule,
    
  ],
  providers: [MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
