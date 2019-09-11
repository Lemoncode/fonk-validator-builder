import { copySync } from 'fs-extra';

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

export const toCamelCase = (value: string) =>
  value.replace(/([-][a-z])/gi, item => item.toUpperCase().replace('-', ''));
