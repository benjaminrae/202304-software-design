import { ValidationResult } from './ValidationResult';

describe('Given a ValidationResult', () => {
  describe('When it is defined', () => {
    test('Then it should be a class', () => {
      expect(typeof ValidationResult).toBe('function');
    });
  });

  describe('When it is instantiated', () => {
    test('Then it should return an instance of ValidationResult', () => {
      const validationResult = new ValidationResult();

      expect(validationResult).toBeInstanceOf(ValidationResult);
    });
  });

  describe('When it is instantiated and its method buildValidationResult is invoked', () => {
    test('Then it should return result true and messages ""', () => {
      const expectedResult = {
        result: true,
        messages: '',
      };

      const validationResult = new ValidationResult().buildValidationResult();

      expect(validationResult).toStrictEqual(expectedResult);
    });
  });

  describe('When it is invoked with "A message" and its method buildValidationResult is invoked', () => {
    test('Then it should return result false and messages "A message"', () => {
      const expectedMessage = 'A message';
      const expectedResult = {
        result: false,
        messages: expectedMessage,
      };

      const validationResult = new ValidationResult([
        expectedMessage,
      ]).buildValidationResult();

      expect(validationResult).toStrictEqual(expectedResult);
    });
  });

  describe('When it is invoked with multiple messages and buildValidationResult is invoked', () => {
    test('Then it should return result false and the received messages separated by line breaks', () => {
      const expectedMessage = 'A message';
      const expectedMessage2 = 'Another message';
      const expectedMessage3 = 'Yet another message';
      const expectedMessages = `${expectedMessage}\n${expectedMessage2}\n${expectedMessage3}`;
      const expectedResult = {
        result: false,
        messages: expectedMessages,
      };

      const validationResult = new ValidationResult([
        expectedMessage,
        expectedMessage2,
        expectedMessage3,
      ]).buildValidationResult();

      expect(validationResult).toStrictEqual(expectedResult);
    });
  });
});
