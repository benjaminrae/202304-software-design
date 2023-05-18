import { randomUUID } from 'crypto';
import { Product } from '../types';

export class TaxableProduct implements Product {
  #name: string;
  #basePrice: number;
  #tax: number;
  #id: string;

  constructor(name: string, basePrice: number, tax: number) {
    this.#name = name;
    this.#basePrice = basePrice;
    this.#tax = tax;
    this.#id = randomUUID();
  }

  getBasePrice(): number {
    return this.#basePrice;
  }

  getTotalPrice(): number {
    return this.#basePrice + this.getTax();
  }

  getTax(): number {
    return (this.#basePrice / 100) * this.#tax;
  }

  getName(): string {
    return this.#name;
  }

  getId(): string {
    return this.#id;
  }
}
