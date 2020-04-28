const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const javascriptLibraryBuild = ts.createProject('./tsconfig.javascript.json');
const typescriptLibraryBuild = ts.createProject('./tsconfig.typescript.json');
const fs = require('fs');
let version = '';

//  COLLECT PACKAGE DATA
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json'));
  version = packageJson.version;
} catch (e) {
  console.error('não foi possível ler a versão contida no package.json');
  throw e;
}

// TRANSPILE TO A SINGLE FILE
gulp.task('javascript-build', () => javascriptLibraryBuild.src()
  .pipe(javascriptLibraryBuild())
  .pipe(gulp.dest('.'))
);

//  TRANSPILE MULTIPLE FILES
gulp.task('typescript-build', () => typescriptLibraryBuild.src()
  .pipe(typescriptLibraryBuild())
  .pipe(gulp.dest('./build'))
);

//  MINIFY JAVASCRIPT SINGLE FILE
gulp.task('javascript-minify', ['javascript-build'], () => gulp.src([
  './build-head.js', './build/calc.latest.js', './build-footer.js'
])
  .pipe(concat(`calc.latest.js`))
  .pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    }
  }))
  .pipe(gulp.dest('./build'))
);

//  RENAME MINIFIED JAVASCRIPT FILE
gulp.task('javascript-minified-rename', ['javascript-minify'], () => gulp.src([
  'build/calc.latest.min.js'
])
  .pipe(rename(`calc.${version}.min.js`))
  .pipe(gulp.dest('./build')));

//  COPY DOCUMENTATION
gulp.task('copy-documentation', () => gulp.src([
  'package.json', 'package-lock.json', '**.md', 'tsconfig.json', 'LICENSE'
]).pipe(gulp.dest('./build')));

gulp.task('build', ['javascript-minified-rename', 'copy-documentation', 'typescript-build'], () => gulp.src([
  'docs/**'
]).pipe(gulp.dest('./build/docs')));