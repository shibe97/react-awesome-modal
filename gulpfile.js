var gulp       = require('gulp');
var sass       = require('gulp-sass');
var browserify = require('browserify');
var babelify   = require('babelify');
var source     = require('vinyl-source-stream');

gulp.task('watch', function() {
    gulp.watch(['docs/**/*.js', '!docs/assets/js/bundle.js'], ['build']);
    gulp.watch('docs/**/*.scss', ['sass']);
});

gulp.task('build', function() {
    browserify('./docs/assets/js/app.js', { debug: true })
        .transform(babelify)
        .bundle()
        .on("error", function (err) {
            console.log("Error : " + err.message);
        })
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./docs/assets/js'));
});

gulp.task('sass', function() {
    gulp.src('./docs/assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./docs/assets/css'));
});

gulp.task('default',['watch']);
