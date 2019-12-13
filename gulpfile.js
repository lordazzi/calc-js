const gulp = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const ts = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const jsLibraryBuild = ts.createProject('./tsconfig.js.json');
const tsLibraryBuild = ts.createProject('./tsconfig.json');
const fs = require('fs');
let version = '';
let projectName = '';

//  COLLECT PACKAGE DATA
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json'));
  version = packageJson.version;
  projectName = packageJson.name;
} catch (e) {
  console.error('não foi possível ler a versão contida no package.json');
  throw e;
}

// TRANSPILE AS JAVASCRIPT LIBRARY
gulp.task('transpile-to-javascript', () => jsLibraryBuild.src()
  .pipe(jsLibraryBuild())
  .pipe(gulp.dest('.'))
);

// TRANSPILE AS TYPESCRIPT LIBRARY
gulp.task('transpile-typescript-lib', () => tsLibraryBuild.src()
  .pipe(sourcemaps.init())
  .pipe(tsLibraryBuild())
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./dist'))
);

gulp.task('javascript-minify', ['transpile-to-javascript'], () => gulp.src(['./js-build-head.js', 'build/**'])
  .pipe(concat(`${projectName}.${version}.js`))
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
  'package', 'minified', 'build'
]).pipe(clean()));

gulp.task('generate-package', ['clean']);