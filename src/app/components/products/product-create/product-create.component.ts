import { Component, OnInit } from '@angular/core';
import {Provider} from "../../../models/provider/provider.model";
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";
import {Product} from "../../../models/product/product.model";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  providers: Provider[] = [];
  productForm ={
    name: '',
    price: 0,
    qty: 0,
    providerId: 0,
  }
  constructor(private apiService:ApiService, private router: Router) {
    this.getProviders();
  }

  ngOnInit(): void {
  }

  getProviders() {
    this.apiService.getData('providers').subscribe((data: any) => {
      this.providers = data;
    });
  }

  createProduct() {
    this.apiService.postData(this.productForm,'products').subscribe((data: any) => {
      this.router.navigate(['./productos']);
    });

  }
}
