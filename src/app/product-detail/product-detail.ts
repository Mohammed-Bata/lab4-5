import { Component, Input, Output, EventEmitter } from '@angular/core';
import { type IProduct } from '../Models/IProduct';
@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetailComponent {
  @Input() product!: IProduct | undefined;
  @Output() close = new EventEmitter();

  onCloseDetails() {
    this.close.emit();
  }
}
