import { Currency } from '../Currency/Currency';
import { Collection, Product } from '../types';

export abstract class Cart {
  protected products: Collection<Product>;

  constructor(products: Collection<Product>) {
    this.products = products;
  }

  abstract calculateTotalBase(): Currency;

  abstract calculateTotalTax(): Currency;

  calculateTotal(): number {
    return this.calculateTotalBase().add(this.calculateTotalTax()).getValue();
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
