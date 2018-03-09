'use strict'

const gulp        = require('gulp');
const iconfontCss = require('gulp-iconfont-css');
const iconfont    = require('gulp-iconfont');
const plumber     = require('gulp-plumber');
const svgmin      = require('gulp-svgmin');
const config      = require('../config');

gulp.task('icon',['iconfont'], function () {
  const outputPath = (process.env.NODE_ENV === 'production')?config.buildPath:config.distPath;
  gulp.src('./source/fonts/*')
    .pipe(gulp.dest(outputPath+'fonts'));  // release配下にフォントファイルをコピー
});

gulp.task('iconfont', function (callback) {
  var svgminData = gulp.src('source/svg/*.svg')
    .pipe(svgmin());  // svgファイルを圧縮

  svgminData.pipe(plumber())
    .pipe(iconfontCss({  // アイコンフォントのscssを生成する
        fontName: 'iconfont',
        path: './node_modules/gulp-iconfont-css/templates/_icons.scss',  // icons.scssのテンプレート
        targetPath: '../sass/icons/_icons.scss',  // 生成するscssのパス
        fontPath: '/fonts/'  //scssからfontファイルへのパス。最終的にrelease配下に置かれた際に読み込めるパスにする
    }))
    .pipe(iconfont({  // アイコンフォントを生成する
        fontName: 'iconfont',
        formats: ['ttf', 'eot', 'woff2', 'woff', 'svg'],
        appendCodepoints:false
    }))
    .pipe(gulp.dest('source/fonts')) //develop配下にscssとiconfontを生成
    .on('end', function(){  // iconfontが完了してからiconfontを実行
        callback();
    });
});

