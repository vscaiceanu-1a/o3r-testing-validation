const getJestConfig = require('../../jest.config').getJestConfig;

/** @type {import('ts-jest/dist/types').JestConfigWithTsJest} */
module.exports = {
  ...getJestConfig(__dirname, false),
  displayName: require('./package.json').name,
  testPathIgnorePatterns: [
    '<rootDir>/dist',
    '<rootDir>/.*/templates/.*',
    '\\.it\\.spec\\.ts$'
  ]
};

