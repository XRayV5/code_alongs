var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var eslint = require('gulp-eslint');


gulp.task('hello', function() {
  console.log('hello world');
});




gulp.task('lint', function() {
  return gulp.src('./app.js')
  .pipe( eslint())
  .pipe( eslint.format() )
  // .pipe( eslint.failOnError() );
});


gulp.task('serve', function() {
  connect.server({
    port: 8000
  });
})

gulp.task('sass', function() {

  gulp.src('./style.scss').pipe( sass() )
  .pipe( autoprefixer({
      browsers: ["last 5 version"]
  }) )
  .pipe( gulp.dest('css') )
  .pipe( connect.reload() )

});

gulp.task('watch', function() {

  //1st arg watch file for changes
  //2nd arg list of tasks to run
  gulp.watch('./style.scss', ['sass']);

});

gulp.task('default', ['serve', 'watch']);
