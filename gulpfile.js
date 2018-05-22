let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
let autoprefixer = require('gulp-autoprefixer');
let watch = require('gulp-watch');
let browserSync = require('browser-sync');
let reload = browserSync.reload;

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('browser-sync', function(){
  browserSync.init({
    server: './',
    notify: false,
    open: true
  });
});

gulp.task('sass:minify', function(){
  return gulp.src('./css/*.css')
    .pipe(sourcemaps.init())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
});

gulp.task('default', ['sass', 'browser-sync', 'sass:minify'], function () {
  gulp.watch('./sass/**/*.scss', ['sass']).on('change', browserSync.reload);
  gulp.watch("./*.html").on('change', browserSync.reload);
});
