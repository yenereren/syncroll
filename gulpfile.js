const gulp = require('gulp');
const qunit = require('gulp-qunit');
const coveralls = require('gulp-coveralls');

gulp.task('coveralls', function() {
    return gulp.src('./specs/test-runner.html')
        .pipe(coveralls());
});

gulp.task('test', function() {
    return gulp.src('./specs/test-runner.html')
        .pipe(qunit());
});

gulp.task('default', ['test', 'coveralls']);
