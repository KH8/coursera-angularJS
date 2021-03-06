var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync').create(),
    del = require('del');

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});

gulp.task('usemin', ['jshint'], function () {
    return gulp.src('app/menu.html')
        .pipe(usemin({
                css: [minifycss(), rev()],
                js: [uglify(), rev()]
            }))
        .pipe(gulp.dest('dist'));
});

gulp.task('usemin-full', ['usemin'], function () {
    return gulp.src('app/dishdetail.html')
        .pipe(usemin({
                css: [minifycss(), rev()],
                js: [uglify(), rev()]
            }))
        .pipe(gulp.dest('dist'));
});

gulp.task('imagemin', function () {
    return del(['dist/images']),
        gulp.src('app/images/**/*')
            .pipe(cache(imagemin({ 
                optimizationLevel: 3, 
                progressive: true, 
                interlaced: true})))
            .pipe(gulp.dest('dist/images'))
            .pipe(notify({
                message: "All images minified.", onLast: true
            }));
});

gulp.task('copyfonts', function () {
    gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
    gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
        .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('clean', function () {
    return del(['dist']);
});

gulp.task('default', ['clean'], function () {
    gulp.start('usemin-full', 'imagemin', 'copyfonts');
});

gulp.task('browser-sync', ['watch'], function () {
    var files = [
        'app/**/*.html',
        'app/styles/**/*.css',
        'app/images/**/*.png',
        'app/scripts/**/*.js',
        'dist/**/*'
    ];

    browserSync.init(files, {
        server: {
            baseDir: "dist",
            index: "menu.html"
        }
    });

    gulp.watch(['dist/**']).on('change', browserSync.reload);
});

gulp.task('watch', ['default'], function () {
    gulp.watch('{app/scripts/**/*.js,app/styles/**/*.css,app/**/*.html}', ['usemin-full']);
    gulp.watch('app/images/**/*', ['imagemin']);
});