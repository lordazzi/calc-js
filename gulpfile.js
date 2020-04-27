const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsLibraryBuild = ts.createProject('./tsconfig.app.json');

// TRANSPILE AS TYPESCRIPT LIBRARY
gulp.task('transpile-typescript-lib', () => tsLibraryBuild.src()
  .pipe(sourcemaps.init())
  .pipe(tsLibraryBuild())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./building'))
);

gulp.task('javascript-minify', () => gulp.src(['./build-head.js', 'building/index.js'])
  .pipe(concat(`calc.js`))
  .pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    }
  }))
  .pipe(gulp.dest('.'))
);

gulp.task('clean', [
  'javascript-minify', 'transpile-typescript-lib'
], () => gulp.src([
  'package', 'minified', 'building'
]).pipe(clean()));

gulp.task('build', ['clean']);