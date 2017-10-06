var gulp = require("gulp");
var clean = require('gulp-clean');
var ts = require("gulp-typescript");
var browserify = require("browserify");
var source = require('vinyl-source-stream');
var tsify = require("tsify");
var tsProject = ts.createProject('tsconfig.json');
var watchify = require("watchify");
var gutil = require("gulp-util");

gulp.task('clean-scripts', function () {
    return gulp.src('wwwroot/scripts', {read: false})
      .pipe(clean());
  });

// gulp.task("default", ["clean-scripts"],function () {
//     var tsResult = gulp.src("src/*/*.ts")
//         .pipe(tsProject());
//     return tsResult.js
//     .browserify({
//         insertGlobals : true,
//         debug : !gulp.env.production
//       })
//       .pipe(gulp.dest("wwwroot/scripts"));
// });

gulp.task("default", ["clean-scripts"],function () {
    var tsResult = gulp.src("src/*/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("wwwroot/scripts"));
});