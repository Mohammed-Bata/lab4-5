import { Component } from '@angular/core';
import { IProduct } from '../Models/IProduct';
import { FormsModule } from '@angular/forms';
import { CardBorder } from '../directives/card-border';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

import { ProductDetailComponent } from '../product-detail/product-detail';
import { ProductsService } from '../services/productsService';
import { ICartItem } from '../Models/ICartItem';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart';

@Component({
  selector: 'app-products',
  imports: [
    FormsModule,
    CardBorder,
    CurrencyPipe,

    // ProductDetailComponent,
    // ShoppingCartComponent,
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  constructor(private productService: ProductsService) {}
  searchName: string = '1';
  categoryName: string = ' ';
  showDetails = false;
  productsList: IProduct[] = [];
  //filteredProducts: IProduct[] = [];
  selectedProduct!: IProduct;
  cartItem = {
    id: 4,
    name: 'sd',
    quantity: 0,
    price: 40,
  };
  cartItems!: ICartItem[];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe({
      next: (data: any) => {
        this.productsList = data.products;
      },
      error: (err) => {
        console.error('Error loading products, ', err);
      },
    });
  }

  buy(product: IProduct) {
    // const product = this.productService.getProductById(id);

    if (product && product.stock > 0) {
      product.stock -= 2;

      const item = {
        id: product.id,
        name: product.title,
        quantity: 2,
        price: product.price,
        img: product.thumbnail,
      };

      // this.cartItem.id = product.id;
      // this.cartItem.name = product.name;
      // this.cartItem.price = this.cartItem.price;

      this.productService.addToCart(item);
      console.log(this.productService.getCartItems);
    } else {
      alert('Product is out of stock');
    }
  }

  // show() {
  //   this.cartItems = this.productService.getCartItems();
  //   console.log(this.cartItems);
  // }

  // search() {
  //   console.log('before1');
  //   this.productsList = this.productService.getProductsByName(this.searchName);
  //   console.log(this.productsList[0]);
  // }
  filterProducts() {
    if (this.categoryName != ' ') {
      this.productService.getProductsByCatId(this.categoryName).subscribe({
        next: (data) => {
          this.productsList = data;
        },
        error: (err) => {
          console.error('Error loading products, ', err);
        },
      });
    }
  }
}
