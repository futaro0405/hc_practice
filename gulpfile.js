const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync');

const sassCompile = () =>
  gulp.src(`src/sass/**/*.scss`)
    .pipe(
      sass({
        outputStyle: "compressed"
      })
      .on("error", sass.logError)
    )
    .pipe(gulp.dest('dist/style'));

const browser = (done) => {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: "index.html",
      directory: true,
      https: true,
    },
    startPath: 'index.html',
    open: 'external',
  });

  done();
};

const build = () => 
  gulp.src('./src/pages/**/*')
    .pipe(gulp.dest('./dist'));

const browserRoad = (done) => {
  browserSync.reload();

  done();
}

const watch = () => {
  gulp.watch(['./src/sass/**/*.scss'], gulp.parallel(sassCompile));
  gulp.watch(['./src/pages/**/*'], gulp.parallel(build, browserRoad));
};

const buildTask = gulp.parallel(sassCompile, build);

exports.default = gulp.series(buildTask, browser, watch);
exports.build = gulp.series(buildTask);