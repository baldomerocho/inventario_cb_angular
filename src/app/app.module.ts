import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProviderComponent } from './components/provider/provider.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/products/category/category.component';
import { ProductCreateComponent } from './components/products/product-create/product-create.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductIndexComponent } from './components/products/product-index/product-index.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { ProviderCreateComponent } from './components/provider/provider-create/provider-create.component';
import { ProviderIndexComponent } from './components/provider/provider-index/provider-index.component';
import { ProviderUpdateComponent } from './components/provider/provider-update/provider-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProviderComponent,
    HomeComponent,
    ProductsComponent,
    CategoryComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductIndexComponent,
    ProviderCreateComponent,
    ProviderIndexComponent,
    ProviderUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
