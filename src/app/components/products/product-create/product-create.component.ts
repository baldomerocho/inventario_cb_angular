import { Component, OnInit } from '@angular/core';
import {Provider} from "../../../models/provider/provider.model";
import {ApiService} from "../../../services/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  providers: Provider[] = [];
  productForm = {
    name: '',
    price: '',
    providerId: '',
  }
  constructor(private apiService:ApiService) {
    this.getProviders();
  }

  ngOnInit(): void {
  }

  getProviders() {
    this.apiService.getData('providers').subscribe((data: any) => {
      console.log(data);
      this.providers = data;
    });
  }

  createProduct() {
    this.apiService.postData(this.productForm,'products').subscribe((data: any) => {
      console.log(data);
    });

  }
}
