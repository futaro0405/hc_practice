import gulp from 'gulp';
import browserSync, { watch } from 'browser-sync';
import imagemin from 'gulp-imagemin';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';

const sass = gulpSass( dartSass );

const browser = () => {
  return browserSync.init({
    server: {
      baseDir: './dist',
      index: "index.html",
      directory: true,
      https: true,
    },
    startPath: 'index.html',
    open: 'external',
  });
};

const browserRoad = () => {
  return browserSync.reload();
}

const ImgImagemin = () => {
  return gulp
  .src("./assets/images/**.{jpg,jpeg,png}")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"))
};

const sassCompile = () => {
  return gulp
    .src(`src/sass/**/*.scss`)
    .pipe(
      sass({
        outputStyle: "compressed"
      })
      .on("error", sass.logError)
    )
    .pipe(gulp.dest('dist/style'));
}

const htmlCompile = () => {
  return gulp
    .src('./src/pages/**/*')
    .pipe(gulp.dest('dist'));
}

const fileWatch = () => {
  gulp.watch(['./src/sass/**/*.scss'], gulp.parallel(sassCompile, browserRoad));
  gulp.watch(['./src/pages/**/*'], gulp.parallel(htmlCompile, browserRoad));
  gulp.watch(['./assets/images/**.{jpg,jpeg,png}'], gulp.parallel(ImgImagemin, browserRoad));
};

const buildTask = () => {
  htmlCompile();
  sassCompile();
  ImgImagemin();
}
export default(done) => {
  browser();
  buildTask();
  fileWatch();
  done();
}

export const build = (done) => {
  buildTask();
  done();
}