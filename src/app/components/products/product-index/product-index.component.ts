import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Product} from "../../../models/product/product.model";

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.scss']
})
export class ProductIndexComponent implements OnInit {
  products: Product[] = [];

  constructor(private apiService: ApiService) {
    this.getProducts();
  }

  ngOnInit(): void {

  }

  getProducts() {
    this.apiService.getData('products').subscribe((data: any) => {
      this.products = data;
    });
  }

  deleteProduct(id: number) {
    this.apiService.deleteData(`products/${id}`).subscribe((data: any) => {
      this.getProducts();
    });
  }

}
