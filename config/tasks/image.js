'use strict'

const gulp   = require('gulp');
const fse    = require('node-fs-extra');
const config = require('../config');

gulp.task('img', function(){
  const outputPath = (process.env.NODE_ENV === 'production')?config.buildPath:config.distPath;
  fse.copySync('./source/images/', outputPath+'images/');
});
