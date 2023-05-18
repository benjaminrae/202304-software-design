import { TaxableProduct } from './TaxableProduct';

describe('Given a TaxableProduct', () => {
  test('When it is defined, then it should be a function', () => {
    expect(typeof TaxableProduct).toBe('function');
  });

  describe('When it is instantiated', () => {
    test('Then it should be an object', () => {
      const taxableProduct = new TaxableProduct('name', 1, 1);

      expect(typeof taxableProduct).toBe('object');
    });

    describe('And it is passed name: "Product 1", basePrice: 1, tax: 10', () => {
      const name = 'Product 1';
      const basePrice = 1;
      const tax = 10;

      test('Then its name should be "Product 1"', () => {
        const taxableProduct = new TaxableProduct(name, basePrice, tax);

        expect(taxableProduct.getName()).toBe(name);
      });

      test('Then its base price should be 1', () => {
        const taxableProduct = new TaxableProduct(name, basePrice, tax);

        expect(taxableProduct.getBasePrice()).toBe(basePrice);
      });

      test('Then its tax should be 0.10', () => {
        const expectedTax = 0.1;

        const taxableProduct = new TaxableProduct(name, basePrice, tax);

        expect(taxableProduct.getTax()).toBe(expectedTax);
      });

      test('Then its total price should be 1.10', () => {
        const expectedTotalPrice = 1.1;

        const taxableProduct = new TaxableProduct(name, basePrice, tax);

        expect(taxableProduct.getTotalPrice()).toBe(expectedTotalPrice);
      });
    });
  });
});
