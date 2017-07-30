var gulp = require('gulp')
, less = require("gulp-less")
, jshint = require("gulp-jshint")
,csslint = require('gulp-csslint');
 
// task
gulp.task('compile-less', function () {
    gulp.src('./less/one.less') // path to your file
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('jsLint', function () {
    gulp.src('./javascript/*.js') // path to your files
    .pipe(jshint())
    .pipe(jshint.reporter()); // Dump results
});


gulp.task('css', function() {
  gulp.src('./css/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});