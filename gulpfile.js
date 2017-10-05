var gulp = require("gulp");
var clean = require('gulp-clean');
var ts = require("gulp-typescript");
var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean-scripts', function () {
    return gulp.src('wwwroot/scripts', {read: false})
      .pipe(clean());
  });

gulp.task("default", ["clean-scripts"],function () {
    var tsResult = gulp.src("src/*/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("wwwroot/scripts"));
});