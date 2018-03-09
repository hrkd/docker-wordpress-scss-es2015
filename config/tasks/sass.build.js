'use strict'

const gulp        = require('gulp');
const sass        = require('gulp-sass');
const autoprefixer= require("gulp-autoprefixer");
const config      = require('../config');
const rename      = require("gulp-rename");

gulp.task('sass:build',['icon'],function(){
  gulp.src([
    './source/sass/**/*.sass',
    '!./source/sass/**/_*.sass',
    './source/sass/**/*.scss',
    '!./source/sass/**/_*.scss'
  ])
  .pipe(sass({
    outputStyle:'compressed',
    includePaths: config.sassIncludePaths
  }
  ))
  .pipe(autoprefixer({
    browsers: ["last 4 versions", "ie >= 9", "Android >= 4","ios_saf >= 8"],
    cascade: false
  }))
  .pipe(rename({
    extname: '.min.css'
  }))
  .pipe(gulp.dest(config.buildPath+'/stylesheets'));
});
