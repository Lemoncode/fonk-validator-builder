import chalk from 'chalk';
import { copySync, readFile, writeFile } from 'fs-extra';
import klaw from 'klaw';
import { Config } from './config';
import { VALIDATOR_NAME_KEY, VALIDATOR_CAMELCASE_NAME_KEY } from './constants';

export const getProcessBasePath = () => process.cwd();

export const overwritingCopy = (srcPath, outputPath) => {
  copySync(srcPath, outputPath, {
    overwrite: true,
    recursive: true,
  });
};

export const getPackageJsonPath = () => {
  const basePath = getProcessBasePath();
  return `${basePath}/package.json`;
};

const replaceValueOnFile = async (
  file: klaw.Item,
  key: string,
  value: string
) => {
  try {
    const data = await readFile(file.path, {
      encoding: 'utf8',
      flag: 'r',
    });
    const result = data.replace(new RegExp(key, 'gi'), value);
    await writeFile(file.path, result, {
      encoding: 'utf8',
      flag: 'w',
    });
  } catch (error) {
    console.log(chalk.red(error));
  }
};

const isNodeModules = (path: string) => path.includes('node_modules');

export const replaceValueOnFiles = async (path: string, config: Config) => {
  try {
    const stream = await klaw(path);
    stream.on('data', async file => {
      if (file.stats.isFile() && !isNodeModules(file.path)) {
        await replaceValueOnFile(
          file,
          VALIDATOR_NAME_KEY,
          config.validatorName
        );
        await replaceValueOnFile(
          file,
          VALIDATOR_CAMELCASE_NAME_KEY,
          config.validatorCamelCaseName
        );
      }
    });
  } catch (error) {
    console.log(chalk.red(error));
  }
};

export const toCamelCase = (value: string) =>
  value.replace(/([-][a-z])/gi, item => item.toUpperCase().replace('-', ''));
