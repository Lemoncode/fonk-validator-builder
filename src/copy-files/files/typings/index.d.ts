import { FieldValidationFunctionSync } from '@lemoncode/form-validation';

export namespace isTrue {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
