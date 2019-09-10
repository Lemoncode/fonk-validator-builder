import { InputQuestion } from 'inquirer';
export const questions: InputQuestion = [
  {
    name: 'validatorName',
    type: 'input',
    message:
      'Write the validator name. For example: is-number. This tool will add the "-validator" sufix.',
  },
];
