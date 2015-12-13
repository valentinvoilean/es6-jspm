var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassJspm = require('sass-jspm-importer');

// Static server
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    return gulp.src("./src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            functions: sassJspm.resolve_function('/src/jspm_packages/'),
            importer: sassJspm.importer
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("./src/css"))
        .pipe(browserSync.stream());
});

// outputs changes to files to the console
function reportChange(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html', './src/**/*.js'], browserSync.reload).on('change', reportChange);
    gulp.watch('./src/**/*.scss', ['sass']).on('change', reportChange);
});

gulp.task('default', ['browser-sync', 'sass', 'watch']);
