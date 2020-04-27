const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsLibraryBuild = ts.createProject('./tsconfig.app.json');

// TRANSPILE AS TYPESCRIPT LIBRARY
gulp.task('transpile-typescript-lib', () => tsLibraryBuild.src()
  .pipe(tsLibraryBuild())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('.'))
);

gulp.task('javascript-minify', ['transpile-typescript-lib'], () => gulp.src([
  './build-head.js', './build/index.js', './build-footer.js'
])
  .pipe(concat(`calc.js`))
  .pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    }
  }))
  .pipe(gulp.dest('./build'))
);

gulp.task('build', ['javascript-minify'], () => gulp.src([
  'package.json', 'package-lock.json', '**.md', 'docs', 'tsconfig.json', 'LICENSE'
]).pipe(gulp.dest('./build')));