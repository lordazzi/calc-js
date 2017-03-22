System.config({
    transpiler: 'typescript',
    paths: {
        'typescript': 'node_modules/typescript/lib/typescript.js',
        'systemjs': 'node_modules/systemjs/dist/system.js',
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
    },
    packages: {
        'src': {
            defaultExtension: 'ts'
        }
    }
});