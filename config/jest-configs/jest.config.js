module.exports = {
  collectCoverageFrom: [
    'app/**/*.{js}',
    '!app/**/*.test.{js}',
    '!app/*/RbGenerated*/*.{js}',
    '!app/index.js',
    '!app/*/*/Loadable.{js}'
  ],
  coverageThreshold: {
    global: {
      statements: 6,
      branches: 0,
      functions: 6,
      lines: 5
    }
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  moduleDirectories: ['node_modules', 'app'],
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$':
    '<rootDir>/config/jest-configs/jest-mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/config/jest-configs/jest-mocks/image.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/config/jest-configs/test-setup.js',
  testRegex: 'tests/.*\\.test\\.js$'
};
