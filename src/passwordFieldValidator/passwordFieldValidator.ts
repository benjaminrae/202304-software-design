import { ValidationResult } from '../ValidationResult/ValidationResult';

const MINIMUM_NUMBERS = 2;
const MINIMUM_LENGTH = 8;
const MINIMUM_CAPITALS = 1;
const MINIMUM_SPECIAL_CHARACTERS = 1;

/* eslint-disable no-unused-vars */
export enum PasswordErrorMessages {
  MISSING_PASSWORD = 'Must provide a password',
  TOO_SHORT = `Password must be at least ${MINIMUM_LENGTH} characters`,
  TOO_FEW_NUMBERS = `The password must contain at least ${MINIMUM_NUMBERS} numbers`,
  TOO_FEW_CAPITALS = `The password must contain at least ${MINIMUM_CAPITALS} capital letter`,
  TOO_FEW_SPECIAL_CHARACTERS = `The password must contain at least ${MINIMUM_SPECIAL_CHARACTERS} special character`,
}
/* eslint-enable no-unused-vars */

const passwordPatterns = {
  minimumNumbers: new RegExp(`(\\D*\\d){${MINIMUM_NUMBERS},}`),
  minimumCapitals: new RegExp(`([A-Z]){${MINIMUM_CAPITALS},}`),
  minimumSpecialCharacters: new RegExp(
    `([!@#$%^&*()_+\\-=\\[\\]{};':"\\|,.<>\\/?]){${MINIMUM_SPECIAL_CHARACTERS},}`,
  ),
};

const validatePasswordGiven = (
  password: string,
  validationResult: ValidationResult,
) => {
  if (!password) {
    validationResult.addMessage(PasswordErrorMessages.MISSING_PASSWORD);
  }
};

const validatePasswordLength = (
  password: string,
  validationResult: ValidationResult,
) => {
  if (password.length < MINIMUM_LENGTH) {
    validationResult.addMessage(PasswordErrorMessages.TOO_SHORT);
  }
};

const validateMinimumNumbers = (
  password: string,
  validationResult: ValidationResult,
) => {
  const hasEnoughNumbers = passwordPatterns.minimumNumbers.test(password);

  if (!hasEnoughNumbers) {
    validationResult.addMessage(PasswordErrorMessages.TOO_FEW_NUMBERS);
  }
};

const validateMinimumCapitals = (
  password: string,
  validationResult: ValidationResult,
) => {
  const hasEnoughCapitals = passwordPatterns.minimumCapitals.test(password);

  if (!hasEnoughCapitals) {
    validationResult.addMessage(PasswordErrorMessages.TOO_FEW_CAPITALS);
  }
};

const validateMinimumSpecialCharacters = (
  password: string,
  validationResult: ValidationResult,
) => {
  const hasEnoughSpecialCharacters =
    passwordPatterns.minimumSpecialCharacters.test(password);

  if (!hasEnoughSpecialCharacters) {
    validationResult.addMessage(
      PasswordErrorMessages.TOO_FEW_SPECIAL_CHARACTERS,
    );
  }
};

const passwordFieldValidator = (password: string = '') => {
  const validationResult = new ValidationResult();

  validatePasswordGiven(password, validationResult);
  validatePasswordLength(password, validationResult);
  validateMinimumNumbers(password, validationResult);
  validateMinimumCapitals(password, validationResult);
  validateMinimumSpecialCharacters(password, validationResult);

  return validationResult.buildValidationResult();
};

export default passwordFieldValidator;
