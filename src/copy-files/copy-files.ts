import chalk from 'chalk';
import { Config } from '../config';
import {
  getProcessBasePath,
  replaceValueOnFiles,
  overwritingCopy,
} from '../helpers';

const sourcePath = `${__dirname}/files`;
const destinationPath = getProcessBasePath();

export const copyFiles = async (config: Config) => {
  console.log(chalk.greenBright(`Copying files...`));
  overwritingCopy(sourcePath, destinationPath);
  console.log(chalk.greenBright(`Done!`));

  console.log(chalk.greenBright(`Replacing validator name...`));
  await replaceValueOnFiles(destinationPath, config);
  console.log(chalk.greenBright(`Done!`));
};
