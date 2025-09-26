import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { ICartItem } from '../Models/ICartItem';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrls } from '../Constants/apiUrls';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  cartItems: ICartItem[] = [];

  addToCart(product: ICartItem) {
    const existingProduct = this.cartItems.find((p) => p.id === product.id);
    if (!existingProduct) {
      this.cartItems.push(product);
    } else {
      existingProduct.quantity += 2;
    }
    //this.saveCart();
  }
  getCartItems(): ICartItem[] {
    return this.cartItems;
  }
  clearCart() {
    this.cartItems = [];
    //this.saveCart();
  }

  getProductsByCatId(category: string): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${apiUrls.getCategoriesProducts}/${category}`);
  }
  getProductById(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${apiUrls.getProduct}/${id}`);
  }
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(apiUrls.getAllProducts);
  }
  // filtered!: IProduct[];
  // getProductsByName(name: string) {
  //   console.log('before');
  //   return (this.filtered = this.productsList.filter((p) =>
  //     p.name.toLowerCase().includes(name.toLowerCase())
  //   ));
  // }
}
