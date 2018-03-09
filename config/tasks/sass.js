'use strict'

const gulp        = require('gulp');
const sass        = require('gulp-sass');
const plumber     = require('gulp-plumber');
const autoprefixer= require("gulp-autoprefixer");
const config      = require('../config');

gulp.task('sass',['icon'],function(){
  const outputPath = (process.env.NODE_ENV === 'production')?config.buildPath:config.distPath;
  gulp.src([
    './source/sass/**/*.sass',
    '!./source/sass/**/_*.sass',
    './source/sass/**/*.scss',
    '!./source/sass/**/_*.scss'
  ])
  .pipe(plumber())
  .pipe(sass({
    outputStyle:'expanded',
    includePaths: config.sassIncludePaths
  }))
  .pipe(autoprefixer({
    browsers: ["last 4 versions", "ie >= 9", "Android >= 4","ios_saf >= 8"],
    cascade: false
  }))
  .pipe(gulp.dest(outputPath+'stylesheets/'));
});


