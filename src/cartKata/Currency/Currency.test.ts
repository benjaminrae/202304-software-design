import { Currency } from './Currency';

describe('Given a Currency class', () => {
  test('When it is defined, then it should be a function', () => {
    expect(typeof Currency).toBe('function');
  });

  describe('When it is instantiated', () => {
    test('Then it should be an object', () => {
      const currency = new Currency(1);

      expect(typeof currency).toBe('object');
    });

    describe('And it is passed 100', () => {
      test('Then its value should be 100', () => {
        const value = 100;

        const currency = new Currency(value);

        expect(currency.getValue()).toBe(value);
      });

      test('Then its currency should be "€1.00', () => {
        const value = 100;

        const currency = new Currency(value);

        expect(currency.getCurrency()).toBe('€1.00');
      });
    });

    describe('When it is passed 100 and then 100 is added', () => {
      test('Then its value should be 200', () => {
        const value = 100;
        const currency = new Currency(value);

        const resultCurrency = currency.add(new Currency(value));

        expect(resultCurrency.getValue()).toBe(value + value);
      });
    });
  });
});
