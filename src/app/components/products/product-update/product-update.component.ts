import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute} from "@angular/router";
import {Provider} from "../../../models/provider/provider.model";

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {

  productFormUpdate = {
    name: '',
    price: '',
    providerId: '',
  }

  providers: Provider[] = [];

  constructor(private apiService:ApiService, private activatedRoute: ActivatedRoute) {
    this.getProviders();
    this.getInfoProduct();
  }

  ngOnInit(): void {
  }

  getInfoProduct() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.apiService.getData(`products/${id}`).subscribe((data: any) => {
        console.log(data);
        this.productFormUpdate = data;
      });
    })
  }

  updateProduct() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      this.apiService.putData(this.productFormUpdate,`products/${id}`).subscribe((data: any) => {
        console.log(data);
      });
    })
  }

  getProviders() {
    this.apiService.getData('providers').subscribe((data: any) => {
      console.log(data);
      this.providers = data;
    });
  }

}
