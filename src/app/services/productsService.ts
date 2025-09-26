import { Injectable } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { ICartItem } from '../Models/ICartItem';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productsList: IProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      quantity: 7,
      price: 100,
      date: new Date(),
      img: './assets/download.jpg',
      categoryId: 1,
    },
    {
      id: 2,
      name: 'Product 2',
      quantity: 12,
      price: 80,
      date: new Date(),
      img: './assets/download.jpg',
      categoryId: 2,
    },
    {
      id: 3,
      name: 'Product 3',
      quantity: 10,
      price: 90,
      date: new Date(),
      img: './assets/download.jpg',
      categoryId: 2,
    },
  ];

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

  getProductsByCatId(catId: number): IProduct[] {
    return this.productsList.filter((product) => product.categoryId === catId);
  }
  getProductById(id: number): IProduct | undefined {
    return this.productsList.find((product) => product.id === id);
  }
  getAllProducts() {
    return this.productsList;
  }
  filtered!: IProduct[];
  getProductsByName(name: string) {
    console.log('before');
    return (this.filtered = this.productsList.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    ));
  }
}
