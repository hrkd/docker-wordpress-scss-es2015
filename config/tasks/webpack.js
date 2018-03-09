'use strict'

const gulp    = require('gulp');
const webpack = require('webpack-stream');
const config  = require('../config');

gulp.task('webpack', ()=>{
  const webpackconfig = (process.env.NODE_ENV === 'production')?'../../webpack.production.config.js':'../../webpack.config.js';
  const outputPath = (process.env.NODE_ENV === 'production')?config.buildPath:config.distPath;
  gulp.src('')
    .pipe(webpack(require(webpackconfig)))
    .pipe(gulp.dest(outputPath + 'javascripts/'));
});
