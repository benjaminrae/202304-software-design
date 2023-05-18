export interface Collection<T> {
  add(element: T): void;
  remove(elementId: string): void;
  empty(): void;
  size(): number;
  getList(): T[];
}

export interface Product {
  getBasePrice(): number;
  getTotalPrice(): number;
  getTax(): number;
  getName(): string;
  getId(): string;
}

export interface Cart<T> {
  calculateTotalBase(): number;
  calculateTotalTax(): number;
  calculateTotal(): number;
  addToCart(item: T): void;
  removeFromCart(item: T): void;
  clearCart(): void;
}
