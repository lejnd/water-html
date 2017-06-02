var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var autoprefix = new LessPluginAutoPrefix({
    browsers: ["last 5 versions"],
    cascade: true
});
var plumber = require('gulp-plumber');

gulp.task('styles', function() {
    gulp.src(['./less/*.less', './less/**/*.less'])
        .pipe(plumber())
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./css/'));
});

gulp.task('default', function(){
    gulp.start('styles');
});

gulp.task('watch', function(){
    gulp.watch(['./less/*.less', './less/**/*.less'], ['styles']);
});
