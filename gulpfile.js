var gulp = require("gulp");
var tinypng = require("gulp-tinypng-compress");

gulp.task("tinypng", function (done) {
  gulp
    .src("img/**/*.{png,jpg,jpeg}")
    .pipe(
      tinypng({
        key: "yy9fJ3TWBqzBQPQqmlPSHVNjDrfrnV0r",
      })
    )
    .pipe(gulp.dest("images"));
  done();
});
