module.exports = function (config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
    ],
    client: {
      clearContext: false,
      jasmine: {
        random: false,
        seed: null
      }
    },
    jasmineHtmlReporter: {
      suppressAll: true,
      random: false
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
