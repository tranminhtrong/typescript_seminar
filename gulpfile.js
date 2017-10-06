var gulp = require("gulp");
var browserify = require("gulp-browserify");
// var uglify = require("gulp-uglify");
// var clean = require('gulp-clean');


// var ts = require("gulp-typescript");
// var tsProject = ts.createProject('tsconfig.json');


// var tsInputFileFolders = tsProject.options.rootDir;
// var jsOutputFileFolders = tsProject.options.outDir;

// gulp.task('clean-scripts', function () {
//   return gulp.src(jsOutputFileFolders, { read: true })
//     .pipe(clean());
// });

// gulp.task("browserify", function () {
//   var tsResult = gulp.src([tsInputFileFolders + "/**/*.ts"]).pipe(tsProject());
//   return tsResult.js
//     .pipe(browserify())
//     .pipe(uglify())
//     .pipe(gulp.dest(jsOutputFileFolders));
// });

// gulp.task("default", ["clean-scripts", "browserify"], function () { });

var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task("default", function () {
    var tsResult = gulp.src("src/**/*.ts")
        .pipe(ts({
              target: "es5",
              module: "system",
              noImplicitAny: true,
              outFile: "output.js"
        }));
    return tsResult.js.pipe(gulp.dest("wwwroot/scripts"));
});