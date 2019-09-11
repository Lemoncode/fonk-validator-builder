import chalk from 'chalk';
import { Config } from '../model';
import { replaceValueOnFiles, renameFile } from './copy-helpers';
import { getProcessBasePath, overwritingCopy } from '../helpers';
import { filesToRename } from '../constants';

const sourcePath = `${__dirname}/files`;
const destinationPath = getProcessBasePath();

export const copyFiles = async (config: Config) => {
  console.log(chalk.greenBright(`Copying files...`));
  overwritingCopy(sourcePath, destinationPath);
  console.log(chalk.greenBright(`Done!`));

  console.log(chalk.greenBright(`Replacing validator name...`));
  await replaceValueOnFiles(destinationPath, config);
  console.log(chalk.greenBright(`Done!`));

  console.log(chalk.greenBright(`Renaming files...`));
  filesToRename.forEach(async file => {
    const originalPath = `${destinationPath}/${file.original}`;
    const newPath = `${destinationPath}/${file.new}`;
    await renameFile(originalPath, newPath);
  });
  console.log(chalk.greenBright(`Done!`));
};
