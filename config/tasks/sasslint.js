'use strict'

const gulp        = require('gulp');
const sassLint    = require('gulp-sass-lint');

gulp.task('lint', function() {
  return gulp.src([
    'source/**/*.s+(a|c)ss'
  ])
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
