import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProviderComponent} from "./components/provider/provider.component";
import {ProductsComponent} from "./components/products/products.component";
import {CategoryComponent} from "./components/products/category/category.component";
import {ProductCreateComponent} from "./components/products/product-create/product-create.component";
import {ProductUpdateComponent} from "./components/products/product-update/product-update.component";
import {ProductIndexComponent} from "./components/products/product-index/product-index.component";
import {ProviderIndexComponent} from "./components/provider/provider-index/provider-index.component";
import {ProviderCreateComponent} from "./components/provider/provider-create/provider-create.component";
import {ProviderUpdateComponent} from "./components/provider/provider-update/provider-update.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'proveedores',
    component: ProviderComponent,
    children: [
      {path: '', component: ProviderIndexComponent},
      {path: 'agregar', component: ProviderCreateComponent},
      {path: 'editar/:id', component: ProviderUpdateComponent},
    ]
  },
  {
    path: 'productos',
    component: ProductsComponent,
    children: [
      {path: '', component: ProductIndexComponent},
      {path: 'editar/:id', component: ProductUpdateComponent},
      {path: 'agregar', component: ProductCreateComponent},
    ]
  },
  {path: 'categorias', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
