var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('watch', function(){
    gulp.watch('examples/**/*.js', ['webpack']);
});

gulp.task('webpack', function(){
    return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(''));
});

gulp.task('default',['watch']);
