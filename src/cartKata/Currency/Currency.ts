export class Currency {
  #symbol: string;
  #value: number;

  constructor(value: number, symbol: string = '€') {
    this.#symbol = symbol;
    this.#value = value;
  }

  getCurrency(): string {
    return `${this.#symbol}${(this.#value / 100).toFixed(2)}`;
  }

  getValue(): number {
    return this.#value;
  }

  multiplyBy(multiplier: number): Currency {
    return new Currency(this.#value * multiplier, this.#symbol);
  }

  add(currency: Currency): Currency {
    return new Currency(this.#value + currency.getValue(), this.#symbol);
  }
}
