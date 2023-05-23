import { randomUUID } from 'crypto';
import { Currency } from '../Currency/Currency';
import { Product } from '../types';

export class TaxableProduct implements Product {
  #name: string;
  #description: string;
  #basePrice: Currency;
  #taxes: number;
  #id: string;

  constructor(
    name: string,
    description: string,
    basePrice: Currency,
    taxes: number,
  ) {
    this.#name = name;
    this.#basePrice = basePrice;
    this.#taxes = taxes;
    this.#description = description;
    this.#id = randomUUID();
  }

  getBasePrice(): Currency {
    return this.#basePrice;
  }

  getTotalPrice(): Currency {
    return this.#basePrice.add(this.getTax());
  }

  getTax(): Currency {
    return this.#basePrice.multiplyBy(this.#taxes / 100);
  }

  getName(): string {
    return this.#name;
  }

  getId(): string {
    return this.#id;
  }

  getTaxRate(): number {
    return this.#taxes;
  }
}
