import { Currency } from './Currency/Currency';

/* eslint-disable no-unused-vars */
export interface Collection<T> {
  add(element: T): void;
  remove(elementId: string): void;
  empty(): void;
  size(): number;
  getList(): T[];
}

export interface Product {
  getBasePrice(): Currency;
  getTotalPrice(): Currency;
  getTax(): Currency;
  getTaxRate(): number;
  getName(): string;
  getId(): string;
}

export interface Cart<T> {
  calculateTotalBase(): Currency;
  calculateTotalTax(): Currency;
  calculateTotal(): Currency;
  addToCart(item: T): void;
  removeFromCart(item: T): void;
  clearCart(): void;
}
