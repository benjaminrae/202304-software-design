import { Currency } from '../Currency/Currency';
import { TaxableProduct } from '../TaxableProduct/TaxableProduct';
import { Product } from '../types';

export const givenTaxableProducts = (numberOfProducts: number): Product[] => {
  const products: Product[] = [];

  for (let i = 0; i < numberOfProducts; i++) {
    products.push(
      new TaxableProduct(
        `Product ${i}`,
        `Product ${i} description`,
        new Currency(Math.floor(Math.random() * 100 * 100)),
        Math.floor(Math.random() * 100),
      ),
    );
  }

  return products;
};
