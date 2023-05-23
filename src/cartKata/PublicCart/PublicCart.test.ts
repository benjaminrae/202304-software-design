import { Currency } from '../Currency/Currency';
import { ProductCollection } from '../ProductCollection/ProductCollection';
import { TaxableProduct } from '../TaxableProduct/TaxableProduct';
import { PublicCart } from './PublicCart';

describe('Given a PublicCart', () => {
  test('When it is defined, then it should be a function', () => {
    expect(typeof PublicCart).toBe('function');
  });

  describe('When it is instantiated', () => {
    test('Then it should be an object', () => {
      const publicCart = new PublicCart(new ProductCollection());

      expect(typeof publicCart).toBe('object');
    });
  });

  describe('And it has one product with a base price of 900 and tax 10', () => {
    const name = 'name';
    const description = 'description';
    const basePrice = new Currency(900);
    const tax = 10;

    test('Then its total base price should be 900', () => {
      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, description, basePrice, tax);
      productCollection.add(product);

      const publicCart = new PublicCart(productCollection);

      expect(publicCart.calculateTotalBase().getValue()).toBe(900);
    });

    test('Then its total tax should be 90', () => {
      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, description, basePrice, tax);
      productCollection.add(product);

      const publicCart = new PublicCart(productCollection);

      expect(publicCart.calculateTotalTax().getValue()).toBe(90);
    });

    test('Then its total price should be 990', () => {
      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, description, basePrice, tax);
      productCollection.add(product);

      const publicCart = new PublicCart(productCollection);

      expect(publicCart.calculateTotal()).toBe(990);
    });
  });
});
