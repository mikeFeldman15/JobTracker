#!/bin/bash

PRETTIER_STATUS=0
ESLINT_STATUS=0

if [[ $1 == "--fix" ]]; then
  # Warn user that their files may be modified
  echo -e "\u001b[31;1mRunning lint checks in --fix mode. This may modify your files!\n"

  # Run Prettier in fix mode and store status
  echo -e "\033[1;33mRunning Prettier to fix code formatting issues...\033[0m\n"
  prettier --write .
  PRETTIER_STATUS=$?

  # Run ESLint in fix mode and store status
  echo -e "\n\033[1;33mRunning ESLint to fix code quality issues...\033[0m"
  npx eslint . --fix
  ESLINT_STATUS=$?
else
  # Run Prettier in check mode and store status
  echo -e "\033[1;33mRunning Prettier to identify code formatting issues...\033[0m\n"
  prettier --check .
  PRETTIER_STATUS=$?

  # Run ESLint in check mode and store status
  echo -e "\n\033[1;33mRunning ESLint to identify code quality issues...\033[0m"
  npx eslint .
  ESLINT_STATUS=$?
fi

# ESLint is silent after successful checks, so...
if [[ $ESLINT_STATUS == 0 ]]; then
  echo -e "\n\u001b[32;1mESLint checks passed!\n"
fi

# Let user know that checks have passed
if [[ $PRETTIER_STATUS == 0 && $ESLINT_STATUS == 0 ]]; then
  echo -e "\u001b[32;1mAll linting checks passed!\n"
  exit 0
fi

# Let user know that Prettier identified issues
if [[ $PRETTIER_STATUS != 0 ]]; then
  echo -e "\u001b[31mPrettier found code formatting issues. Please address any errors above and try again.\n"
  exit 1
fi

# Let user know that all files are ignored
if [[ $ESLINT_STATUS == 2 ]]; then
  echo -e "\033[1;33mESLint could not find any files to lint. This probably means that .eslintignore is ignoring too many files. Remove some files from .eslintignore and try again.\033[0m\n"
  exit 0
fi

# Let user know that ESLInt has identified issues
if [[ $ESLINT_STATUS != 0 ]]; then
  echo -e "\u001b[31mESLint found code quality issues. Please address any errors above and try again.\n"
  exit 1
fi
