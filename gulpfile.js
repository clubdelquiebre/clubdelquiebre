var gulp  = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();

gulp.task('htmlmin', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('./src/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: true
  });
  gulp.watch('./src/*.html', ['htmlmin'])
  gulp.watch('./src/*.sass', ['sass'])
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['htmlmin', 'sass', 'browserSync']);
