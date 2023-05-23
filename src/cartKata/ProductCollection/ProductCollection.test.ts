import { givenTaxableProducts } from '../testHelpers/givenTaxableProducts';
import { ProductCollection } from './ProductCollection';

describe('Given a ProductCollection', () => {
  test('When it is defined, then it should be a function', () => {
    expect(typeof ProductCollection).toBe('function');
  });

  describe('When it is instantiated', () => {
    test('Then it should be an object', () => {
      const productCollection = new ProductCollection();

      expect(typeof productCollection).toBe('object');
    });
  });

  describe('And it is not passed a list of products', () => {
    test('Then its size should be 0', () => {
      const productCollection = new ProductCollection();

      expect(productCollection.size()).toBe(0);
    });
  });

  describe('And it is passed 5 products', () => {
    test('Then its size should be 5', () => {
      const numberOfProducts = 5;

      const productCollection = new ProductCollection(
        givenTaxableProducts(numberOfProducts),
      );

      expect(productCollection.size()).toBe(numberOfProducts);
    });
  });

  describe('And one product is added', () => {
    test('Then its size should be 1', () => {
      const productCollection = new ProductCollection();

      productCollection.add(givenTaxableProducts(1)[0]);

      expect(productCollection.size()).toBe(1);
    });
  });

  describe('And it is passed 5 products and one is removed', () => {
    test('Then its size should be 4', () => {
      const numberOfProducts = 5;
      const products = givenTaxableProducts(numberOfProducts);

      const productCollection = new ProductCollection(products);

      productCollection.remove(products[0].getId());

      expect(productCollection.size()).toBe(numberOfProducts - 1);
    });
  });

  describe('And it is passed 5 products and it is emptied', () => {
    test('Then its size should be 0', () => {
      const numberOfProducts = 5;

      const productCollection = new ProductCollection(
        givenTaxableProducts(numberOfProducts),
      );

      productCollection.empty();

      expect(productCollection.size()).toBe(0);
    });
  });
});
