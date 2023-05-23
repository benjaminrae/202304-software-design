import { Currency } from '../Currency/Currency';
import { ProductCollection } from '../ProductCollection/ProductCollection';
import { TaxableProduct } from '../TaxableProduct/TaxableProduct';
import { BusinessCart } from './BusinessCart';

describe('Given a BusinessCart class', () => {
  test('When it is defined, then it should be a function', () => {
    expect(typeof BusinessCart).toBe('function');
  });

  describe('When it is instantiated', () => {
    test('Then it should be an object', () => {
      const businessCart = new BusinessCart(new ProductCollection(), 15);
      expect(typeof businessCart).toBe('object');
    });
  });

  describe('When is has discount 15 and one product with basePrice 900 and tax 10', () => {
    test('Then its total base price should be 765', () => {
      const name = 'name';
      const description = 'description';
      const basePrice = new Currency(900);
      const tax = 10;
      const discount = 15;

      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, description, basePrice, tax);
      productCollection.add(product);

      const businessCart = new BusinessCart(productCollection, discount);

      expect(businessCart.calculateTotalBase().getValue()).toBe(765);
    });

    test('Then its total tax should be 76.5', () => {
      const name = 'name';
      const description = 'description';
      const basePrice = new Currency(900);
      const tax = 10;
      const discount = 15;

      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, description, basePrice, tax);
      productCollection.add(product);

      const businessCart = new BusinessCart(productCollection, discount);

      expect(businessCart.calculateTotalTax().getValue()).toBe(76.5);
    });

    test('Then its total price should be 841.5', () => {
      const name = 'name';
      const description = 'description';
      const basePrice = new Currency(900);
      const tax = 10;
      const discount = 15;

      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, description, basePrice, tax);
      productCollection.add(product);

      const businessCart = new BusinessCart(productCollection, discount);

      expect(businessCart.calculateTotal()).toBe(841.5);
    });
  });
});
