const gulp = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const tsLibraryBuild = ts.createProject('./tsconfig.app.json');
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

// TRANSPILE AS TYPESCRIPT LIBRARY
gulp.task('typescript-build', () => tsLibraryBuild.src()
  .pipe(tsLibraryBuild())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('.'))
);

gulp.task('javascript-minify', ['typescript-build'], () => gulp.src([
  './build-head.js', './build/index.js', './build-footer.js'
])
  .pipe(concat(`index.js`))
  .pipe(minify({
    ext: {
      src: '.js',
      min: '.min.js'
    }
  }))
  .pipe(gulp.dest('./build'))
);

gulp.task('javascript-rename', ['javascript-minify'], () => gulp.src([
  'build/index.min.js'
])
  .pipe(rename(`calc.${version}.min.js`))
  .pipe(rename(`calc.latest.min.js`))
  .pipe(gulp.dest('./build')));

gulp.task('documentation', () => gulp.src([
  'package.json', 'package-lock.json', '**.md', 'tsconfig.json', 'LICENSE'
]).pipe(gulp.dest('./build')));

gulp.task('build', ['javascript-rename', 'documentation'], () => gulp.src([
  'docs/**'
]).pipe(gulp.dest('./build/docs')));