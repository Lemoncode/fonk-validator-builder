import { InputQuestion } from 'inquirer';
export const questions: InputQuestion = [
  {
    name: 'validatorName',
    type: 'input',
    message: `Write the validator name, for example: is-number.
    This tool will add the "fonk-" prefix and "-validator" sufix.`,
  },
];
