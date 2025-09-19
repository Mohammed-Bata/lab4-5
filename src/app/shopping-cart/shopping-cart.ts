import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../services/productsService';
import { ICartItem } from '../Models/ICartItem';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail';
import { IProduct } from '../Models/IProduct';

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCartComponent {
  cartItems!: ICartItem[];
  private productsService = inject(ProductsService);
  showDetails: any;
  selectedProduct: IProduct | undefined;

  ngOnInit(): void {
    this.cartItems = this.productsService.getCartItems();
  }

  // show() {
  //   this.cartItems = this.productsService.getCartItems();
  // }

  clear() {
    this.productsService.clearCart();
    console.log('clear cart');
    this.cartItems = this.productsService.getCartItems();
  }
  id!: number;
  Details(id: number) {
    this.showDetails = true;
    this.selectedProduct = this.productsService.getProductById(id);
  }
  closeDetails() {
    this.showDetails = false;
  }
}
