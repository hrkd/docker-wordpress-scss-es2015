'use strict'

const gulp   = require('gulp');
const fs     = require('fs');
const fse    = require('node-fs-extra');
const config = require('../config');

gulp.task('lib', function(){
  const outputPath = (process.env.NODE_ENV === 'production')?config.buildPath:config.distPath;
  fse.copy('./node_modules/font-awesome/fonts/',  outputPath+'fonts/');
});
