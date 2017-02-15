const gulp = require('gulp');
const jasmine = require('gulp-jasmine');

gulp.task('default', () =>
gulp.src('spec/test.js')
    .pipe(jasmine())
);