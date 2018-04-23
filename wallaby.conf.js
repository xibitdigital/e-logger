module.exports = function (wallaby) {
  return {
    files: ['src/**/*.js'],
    tests: ['tests/**/*.spec.js'],
    compilers: {
      '**/*.js': wallaby.compilers.babel(),
    },
    env: {
      type: 'node',
      runner: 'node',
    },
    testFramework: 'ava',
    workers: {
      recycle: true,
    },
  };
};
