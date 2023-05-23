import { Cart } from '../Cart/Cart';
import { Currency } from '../Currency/Currency';

export class PublicCart extends Cart {
  calculateTotalBase(): Currency {
    return this.products
      .getList()
      .reduce(
        (total, product) => product.getBasePrice().add(total),
        new Currency(0),
      );
  }

  calculateTotalTax(): Currency {
    return this.products
      .getList()
      .reduce((total, product) => product.getTax().add(total), new Currency(0));
  }
}
