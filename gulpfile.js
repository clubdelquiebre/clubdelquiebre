var gulp  = require('gulp');
var sass = require('gulp-sass');
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var htmlmin = require('gulp-htmlmin');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};

gulp.task('htmlmin', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('./src/*.sass')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
    open: false
  });
  gulp.watch('./src/*.html', ['htmlmin'])
  gulp.watch('./src/*.sass', ['sass'])
  gulp.watch('dist/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['htmlmin', 'sass', 'browserSync']);
