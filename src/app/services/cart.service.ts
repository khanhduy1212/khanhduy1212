import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Products[] = [];
  constructor() { }

  AddToCart(product: Products) {
    this.items.push(product);
  }

  ClearCart() {
    this.items = [];
    return this.items;
  }

  GetCart() {
    return this.items;
  }
}
