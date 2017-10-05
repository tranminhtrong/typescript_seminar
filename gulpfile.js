var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject('tsconfig.json');


gulp.task("default", function () {
    var tsResult = gulp.src("src/typescripts/*.ts")
        .pipe(tsProject());
    return tsResult.js.pipe(gulp.dest("wwwroot/scripts"));
});