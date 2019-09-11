import chalk from 'chalk';
import { Config } from '../model';
import { replaceValueOnFiles, renameFile } from './copy-helpers';
import { getProcessBasePath, overwritingCopy } from '../helpers';
import {
  ORIGINAL_PACKAGE_JSON_NAME,
  NEW_PACKAGE_JSON_NAME,
} from '../constants';

const sourcePath = `${__dirname}/files`;
const destinationPath = getProcessBasePath();

export const copyFiles = async (config: Config) => {
  console.log(chalk.greenBright(`Copying files...`));
  overwritingCopy(sourcePath, destinationPath);
  console.log(chalk.greenBright(`Done!`));

  console.log(chalk.greenBright(`Replacing validator name...`));
  await replaceValueOnFiles(destinationPath, config);
  console.log(chalk.greenBright(`Done!`));

  console.log(chalk.greenBright(`Renaming package.json...`));
  const originalPath = `${destinationPath}/${ORIGINAL_PACKAGE_JSON_NAME}`;
  const newPath = `${destinationPath}/${NEW_PACKAGE_JSON_NAME}`;
  await renameFile(originalPath, newPath);
  console.log(chalk.greenBright(`Done!`));
};
