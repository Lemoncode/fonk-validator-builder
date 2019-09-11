import inquirer from 'inquirer';
import { questions } from './questions';
import { VALIDATOR_SUFFIX, VALIDATOR_PREFIX } from '../constants';
import { Config } from '../config';
import { toCamelCase } from '../helpers';

export const ask = async (): Promise<Config> => {
  const response: Config = (await inquirer.prompt(questions)) as Config;
  return {
    ...response,
    validatorName: `${VALIDATOR_PREFIX}${response.validatorName}${VALIDATOR_SUFFIX}`,
    validatorCamelCaseName: toCamelCase(response.validatorName),
  };
};
