var gulp  = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};
var htmlmin = require('gulp-htmlmin');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
};
var sourcemaps = require('gulp-sourcemaps');

// var uncss = require('gulp-uncss');
// var input = './stylesheets/**/*.scss';
// var output = './public/css';

gulp.task('htmlmin', function () {
  return gulp.src('./src/*.html')
    .pipe(htmlmin({collapseWhitespace: false}))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('sass', function () {
  return gulp.src('./src/*.sass')
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write('./dist/maps'))
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
