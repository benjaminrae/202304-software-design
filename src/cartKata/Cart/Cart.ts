import { Collection, Product } from '../types';

export abstract class Cart {
  protected products: Collection<Product>;

  constructor(products: Collection<Product>) {
    this.products = products;
  }

  abstract calculateTotalBase(): number;

  abstract calculateTotalTax(): number;

  calculateTotal(): number {
    return this.calculateTotalBase() + this.calculateTotalTax();
  }

  addToCart(item: Product) {
    this.products.add(item);
  }

  removeFromCart(itemId: string) {
    this.products.remove(itemId);
  }

  clearCart() {
    this.products.empty();
  }
}
