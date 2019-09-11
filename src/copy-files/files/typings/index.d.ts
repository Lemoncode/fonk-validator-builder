import { FieldValidationFunctionSync } from '@lemoncode/fonk';

export namespace %VALIDATOR_CAMEL_CASE_NAME% {
  export const validator: FieldValidationFunctionSync;
  export function setErrorMessage(message: string | string[]): void;
}
