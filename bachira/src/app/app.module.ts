import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeroPannelComponent } from './hero-pannel/hero-pannel.component';
import { BrandsComponent } from './brands/brands.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { Products1Component } from './products1/products1.component';
import { Products2Component } from './products2/products2.component';
import { Products3Component } from './products3/products3.component';
import { BrandsPageComponent } from './brands-page/brands-page.component';
import { BrandsAdidasComponent } from './brands-adidas/brands-adidas.component';
import { BrandsBalenciagaComponent } from './brands-balenciaga/brands-balenciaga.component';
import { BrandsGucciComponent } from './brands-gucci/brands-gucci.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeroPannelComponent,
    BrandsComponent,
    CategoriesComponent,
    ProductsComponent,
    LoginComponent,
    FirstPageComponent,
    NotFoundComponent,
    RegisterComponent,
    ProductsPageComponent,
    Products1Component,
    Products2Component,
    Products3Component,
    BrandsPageComponent,
    BrandsAdidasComponent,
    BrandsBalenciagaComponent,
    BrandsGucciComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
