import {Category} from "./category.model";
import {ProductDetail} from "./product-detail.model";

export interface Product {
  id: number;
  qty: number;
  name: string;
  price: number;
  providerId: number;
  category: Category[];
  productDetails: ProductDetail[];
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProduct(json: string): Product {
    return JSON.parse(json);
  }

  public static productToJson(value: Product): string {
    return JSON.stringify(value);
  }
}
