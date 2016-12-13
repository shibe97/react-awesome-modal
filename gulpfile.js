var gulp       = require('gulp');
var sass       = require('gulp-sass');

gulp.task('watch', function() {
    gulp.watch('docs/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    gulp.src('docs/assets/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('docs/assets/css'));
});

gulp.task('default',['watch']);
