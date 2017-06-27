'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
	console.log('sass')
  return gulp.src('./scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('scss', function () {
  gulp.watch('./scss/*.scss', ['sass']);
});