import { ValidationResult } from '../ValidationResult/ValidationResult';
import passwordFieldValidator, {
  PASSWORD_ERROR_MESSAGES,
} from './passwordFieldValidator';

describe('Given a password validator function', () => {
  describe('When it is defined', () => {
    test('Then it should be a function', () => {
      expect(typeof passwordFieldValidator).toBe('function');
    });
  });

  describe('When it is invoked without a password argument', () => {
    test('Then it should return result false and the messages "Must provide a password", "Password must be at least 8 characters", "The password must contain at least 2 numbers", "The password must contain at least 1 capital letter, "The password must contain at least 1 special character"', () => {
      const expectedErrorMessages = [
        PASSWORD_ERROR_MESSAGES.MISSING_PASSWORD,
        PASSWORD_ERROR_MESSAGES.TOO_SHORT,
        PASSWORD_ERROR_MESSAGES.TOO_FEW_NUMBERS,
        PASSWORD_ERROR_MESSAGES.TOO_FEW_CAPITALS,
        PASSWORD_ERROR_MESSAGES.TOO_FEW_SPECIAL_CHARACTERS,
      ];
      const expectedResult = new ValidationResult(
        expectedErrorMessages,
      ).buildValidationResult();
      const expectedValidationResult = false;

      const validationResult = passwordFieldValidator();

      expect(validationResult).toStrictEqual(expectedResult);
      expect(validationResult.result).toBe(expectedValidationResult);
    });
  });

  describe('When it is invoked with a password that is less than 8 characters, contains 1 special character and contains more than 2 numbers', () => {
    test('Then it should return result false and the message "Password must be at least 8 characters"', () => {
      const expectedErrorMessage = PASSWORD_ERROR_MESSAGES.TOO_SHORT;
      const expectedValidationResult = false;
      const expectedResult = new ValidationResult([
        expectedErrorMessage,
      ]).buildValidationResult();

      const validationResult = passwordFieldValidator('A2!4567');

      expect(validationResult).toStrictEqual(expectedResult);
      expect(validationResult.result).toBe(expectedValidationResult);
    });
  });

  describe('When it is invoked with a password that is more than 8 characters, contains 1 special character contains a capital but contains no numbers', () => {
    test('Then it should return result false and the message "The password must contain at least 2 numbers"', () => {
      const expectedErrorMessage = PASSWORD_ERROR_MESSAGES.TOO_FEW_NUMBERS;
      const expectedValidationResult = false;
      const expectedResult = new ValidationResult([
        expectedErrorMessage,
      ]).buildValidationResult();

      const validationResult = passwordFieldValidator('A$cdefgh');

      expect(validationResult).toStrictEqual(expectedResult);
      expect(validationResult.result).toBe(expectedValidationResult);
    });
  });

  describe('When it is invoked with a password that is less than 8 characters, contains capitals, contains special characters but contains only 1 number', () => {
    test('Then it should return result false and the messages "Password must be at least 8 characters" and "he password must contain at least 2 numbers"', () => {
      const expectedErrorMessages = [
        PASSWORD_ERROR_MESSAGES.TOO_SHORT,
        PASSWORD_ERROR_MESSAGES.TOO_FEW_NUMBERS,
      ];
      const expectedValidationResult = false;
      const expectedResult = new ValidationResult(
        expectedErrorMessages,
      ).buildValidationResult();

      const validationResult = passwordFieldValidator('A1]');

      expect(validationResult).toStrictEqual(expectedResult);
      expect(validationResult.result).toBe(expectedValidationResult);
    });
  });

  describe('When it is invoked with a password that is more than 8 characters, contains special characters, contains more than 2 numbers but contains no capitals', () => {
    test('Then it should return result false and the message "The password must contain at least 1 capital"', () => {
      const expectedErrorMessage = PASSWORD_ERROR_MESSAGES.TOO_FEW_CAPITALS;
      const expectedValidationResult = false;
      const expectedResult = new ValidationResult([
        expectedErrorMessage,
      ]).buildValidationResult();

      const validationResult = passwordFieldValidator('123456789!');

      expect(validationResult).toStrictEqual(expectedResult);
      expect(validationResult.result).toBe(expectedValidationResult);
    });
  });

  describe('When it is invoked with a password that is more than 8 characters, contains more than 2 numbers and contains capitals but no special characters', () => {
    test('Then it should return result false and the message "The password must contain at least 1 special character"', () => {
      const expectedErrorMessage =
        PASSWORD_ERROR_MESSAGES.TOO_FEW_SPECIAL_CHARACTERS;
      const expectedValidationResult = false;
      const expectedResult = new ValidationResult([
        expectedErrorMessage,
      ]).buildValidationResult();

      const validationResult = passwordFieldValidator('Abcdefgh12');

      expect(validationResult).toStrictEqual(expectedResult);
      expect(validationResult.result).toBe(expectedValidationResult);
    });
  });

  describe('When it is invoked with a password that is more than 8 characters, contains more than 2 numbers, contains capitals and contains special characters', () => {
    test('Then it should return result true and the message ""', () => {
      const expectedValidationResult = true;
      const expectedResult = new ValidationResult().buildValidationResult();

      const validationResult = passwordFieldValidator('Abcdefgh12!');

      expect(validationResult).toStrictEqual(expectedResult);
      expect(validationResult.result).toBe(expectedValidationResult);
    });
  });
});
