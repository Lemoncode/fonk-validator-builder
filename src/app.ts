#!/usr/bin/env node

import 'regenerator-runtime/runtime';
import chalk from 'chalk';
import { ask } from './ask';
import { copyFiles } from './copy-files';

const run = async () => {
  const config = await ask();
  try {
    console.log(chalk.greenBright('VALIDATOR NAMES: '));
    console.log(chalk.greenBright(JSON.stringify(config, null, 2)));
    await copyFiles(config);
  } catch (error) {
    console.log(chalk.red(error));
  }
};

run();
