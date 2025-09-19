import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCardBorder]',
})
export class CardBorder {
  private element;
  constructor(element: ElementRef) {
    this.element = element;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.boxShadow =
      '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
    (this.element.nativeElement.style.border = '2px solid #5cb85c'), '6px solid #5cb85c';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.element.nativeElement.style.boxShadow = 'none';
    this.element.nativeElement.style.border = 'none';
  }
}
