import { Cart } from '../Cart/Cart';
import { Currency } from '../Currency/Currency';
import { TaxableProduct } from '../TaxableProduct/TaxableProduct';
import { Collection, Product } from '../types';

export class BusinessCart extends Cart {
  #discount: number;

  constructor(products: Collection<Product>, discount: number) {
    super(products);
    this.#discount = discount;
  }

  calculateTotalBase(): Currency {
    return this.products
      .getList()
      .reduce(
        (total, product) =>
          product
            .getBasePrice()
            .multiplyBy(this.getDiscountMultiplier())
            .add(total),
        new Currency(0),
      );
  }

  calculateTotalTax(): Currency {
    return this.products.getList().reduce((total, product) => {
      const discountedBasePrice = new Currency(
        product
          .getBasePrice()
          .multiplyBy(this.getDiscountMultiplier())
          .getValue(),
      );

      const discountedProduct = new TaxableProduct(
        '',
        '',
        discountedBasePrice,
        product.getTaxRate(),
      );

      return discountedProduct.getTax().add(total);
    }, new Currency(0));
  }

  private getDiscountMultiplier() {
    return (100 - this.#discount) / 100;
  }
}
