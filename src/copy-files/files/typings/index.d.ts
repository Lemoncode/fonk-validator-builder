import { FieldValidationFunctionSync } from '@lemoncode/form-validation';

export namespace %VALIDATOR_CAMEL_CASE_NAME% {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
