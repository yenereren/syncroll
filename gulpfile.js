const gulp = require('gulp');
const qunit = require('gulp-qunit');

gulp.task('test', function() {
    return gulp.src('./specs/test-runner.html')
        .pipe(qunit());
});
