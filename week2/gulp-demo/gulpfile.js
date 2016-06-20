var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// static server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    //sanity check
    console.log(">>> sanity present but unstable <<<");

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/scss/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

// compile sass into css & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
