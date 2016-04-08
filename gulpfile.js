var gulp = require('gulp');
var browserify   = require('browserify');
var babelify     = require('babelify');
var source       = require('vinyl-source-stream');

gulp.task('watch', function(){
    gulp.watch('examples/**/*.js', ['webpack']);
});

gulp.task('build', function() {
    browserify('./examples/app.js', { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) {
            console.log("Error : " + err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./examples'));
});

gulp.task('default',['watch']);
