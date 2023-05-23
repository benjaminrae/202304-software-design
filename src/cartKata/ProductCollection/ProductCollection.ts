import { Collection, Product } from '../types';

export class ProductCollection implements Collection<Product> {
  #products: Map<string, Product>;

  constructor(products: Product[] = []) {
    this.#products = new Map();

    products.forEach(product => {
      this.#products.set(product.getId(), product);
    });
  }

  add(product: Product): void {
    this.#products.set(product.getId(), product);
  }

  remove(productId: string): void {
    this.#products.delete(productId);
  }

  empty(): void {
    return this.#products.clear();
  }

  size(): number {
    return this.#products.size;
  }

  getList(): Product[] {
    return Array.from(this.#products, ([id]) =>
      this.#products.get(id),
    ) as Product[];
  }
}
