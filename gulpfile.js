var gulp = require('gulp');
var sass = require('gulp-sass');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');

gulp.task('sass', function(){
    gulp.src('assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'));
});

gulp.task('watch', function(){
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch('assets/css/**/*.css', ['webpack']);
    gulp.watch('examples/**/*.js', ['webpack']);
});

gulp.task('webpack', function(){
    return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(''));
});

gulp.task('default',['watch']);
