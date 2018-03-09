'use strict'

const gulp   = require('gulp');
const fse    = require('node-fs-extra');
const config = require('../config');

gulp.task('font', function(){
  const outputPath = (process.env.NODE_ENV === 'production')?config.buildPath:config.distPath;
  fse.copySync('./source/fonts/',  outputPath+'fonts/');
  fse.copySync('./node_modules/materialize-css/dist/fonts/roboto/',  outputPath+'fonts/roboto/');
});
