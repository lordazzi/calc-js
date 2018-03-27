module.exports = function (config) {
    config.set({

        basePath: '',

        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher'),
            require('karma-typescript-preprocessor'),
            require('karma-systemjs')
        ],

        frameworks: [
            'systemjs',
            'jasmine'
        ],

        files: [
            'src/*.spec.ts'
        ],

        preprocessors: {
            '*.ts': ['typescript']
        },

        systemjs: {
            configFile: 'systemjs.config.js',
            serveFiles: [
                'src/**/*.ts'
            ]
        },

        coverageIstanbulReporter: {
            reports: ['html', 'lcovonly'],
            fixWebpackSourcePaths: true
        },

        customLaunchers: {
            PhantomJS: {
                base: 'PhantomJS',
                flags: ['--load-images=true'],
                debug: true
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'kjhtml'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
