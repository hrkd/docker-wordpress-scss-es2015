'use strict'

const gulp        = require('gulp');
//const argv        = require('yargs').argv;
const requireDir = require('require-dir');

requireDir('./config/tasks', {recurse: true});

gulp.task('default',['set-dev-node-env', 'lib','font','img','sass','webpack','watch']);
gulp.task('build',  ['set-prod-node-env','font','img','sass:build','webpack']);
