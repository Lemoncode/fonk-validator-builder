import inquirer from 'inquirer';
import { questions } from './questions';
import { VALIDATOR_SUFFIX } from '../constants';
import { Config } from '../config';
import { toCamelCase } from '../helpers';

export const ask = async (): Promise<Config> => {
  const response: Config = (await inquirer.prompt(questions)) as Config;
  return {
    ...response,
    validatorName: `${response.validatorName}${VALIDATOR_SUFFIX}`,
    validatorCamelCaseName: toCamelCase(response.validatorName),
  };
};
