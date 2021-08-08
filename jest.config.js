module.exports = {
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/webpack/**', '!**/coverage/**'],
  coveragePathIgnorePatterns: ['<rootDir>/client/assets/', '<rootDir>/node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/__mocks__/',
    '<rootDir>/client/assets/',
    '<rootDir>/cypress/',
    '<rootDir>/server/views/',
  ],
  moduleNameMapper: {
    '@root(.*)$': '<rootDir>/$1',
    '@client(.*)$': '<rootDir>/client/$1',
    '@server(.*)$': '<rootDir>/server/$1',
    '@__mocks__(.*)$': '<rootDir>/__mocks__/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(s?css|less)$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost:8080/',
};
