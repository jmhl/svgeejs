'use strict';

var gulp    = require('gulp');
var concat  = require('gulp-concat');
var webpack = require('gulp-webpack');

gulp.task('webpack', function() {
  return gulp.src('svgee.js')
    .pipe(webpack({
      output: {
        filename: 'svgee.js'
      }
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('./lib/*.js', ['webpack']);
  gulp.watch('./lib/helpers/*.js', ['webpack']);
});
