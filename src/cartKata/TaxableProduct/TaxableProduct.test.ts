import { Currency } from '../Currency/Currency';
import { TaxableProduct } from './TaxableProduct';

describe('Given a TaxableProduct', () => {
  test('When it is defined, then it should be a function', () => {
    expect(typeof TaxableProduct).toBe('function');
  });

  describe('When it is instantiated', () => {
    test('Then it should be an object', () => {
      const taxableProduct = new TaxableProduct(
        'name',
        '',
        new Currency(100),
        1,
      );

      expect(typeof taxableProduct).toBe('object');
    });

    describe('And it is passed name: "Product 1", basePrice: 100, tax: 10', () => {
      const name = 'Product 1';
      const description = 'Product 1 description';
      const basePrice = new Currency(100);
      const tax = 10;

      test('Then its name should be "Product 1"', () => {
        const taxableProduct = new TaxableProduct(
          name,
          description,
          basePrice,
          tax,
        );

        expect(taxableProduct.getName()).toBe(name);
      });

      test('Then its base price should be 100', () => {
        const taxableProduct = new TaxableProduct(
          name,
          description,
          basePrice,
          tax,
        );

        expect(taxableProduct.getBasePrice()).toBe(basePrice);
      });

      test('Then its tax should be 10', () => {
        const expectedTax = 10;

        const taxableProduct = new TaxableProduct(
          name,
          description,
          basePrice,
          tax,
        );

        expect(taxableProduct.getTax().getValue()).toBe(expectedTax);
      });

      test('Then its total price should be 110', () => {
        const expectedTotalPrice = 110;

        const taxableProduct = new TaxableProduct(
          name,
          description,
          basePrice,
          tax,
        );

        expect(taxableProduct.getTotalPrice().getValue()).toBe(
          expectedTotalPrice,
        );
      });
    });
  });
});
