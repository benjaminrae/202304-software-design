import { Cart } from '../Cart/Cart';
import { ProductCollection } from '../ProductCollection/ProductCollection';
import { TaxableProduct } from '../TaxableProduct/TaxableProduct';

export class PublicCart extends Cart {
  calculateTotalBase(): number {
    return this.products
      .getList()
      .reduce((total, product) => total + product.getBasePrice(), 0);
  }

  calculateTotalTax(): number {
    return this.products
      .getList()
      .reduce((total, product) => total + product.getTax(), 0);
  }
}

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

  describe('And it has one product with a base price of 9 and tax 10', () => {
    const name = 'name';
    const basePrice = 9;
    const tax = 10;

    test('Then its total base price should be 9', () => {
      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, basePrice, tax);
      productCollection.add(product);

      const publicCart = new PublicCart(productCollection);

      expect(publicCart.calculateTotalBase()).toBe(9);
    });

    test('Then its total tax should be 0.9', () => {
      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, basePrice, tax);
      productCollection.add(product);

      const publicCart = new PublicCart(productCollection);

      expect(publicCart.calculateTotalTax()).toBe(0.9);
    });

    test('Then its total price should be 9.9', () => {
      const productCollection = new ProductCollection();
      const product = new TaxableProduct(name, basePrice, tax);
      productCollection.add(product);

      const publicCart = new PublicCart(productCollection);

      expect(publicCart.calculateTotal()).toBe(9.9);
    });
  });
});
