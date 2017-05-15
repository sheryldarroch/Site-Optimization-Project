'use strict';

var gulp = 	require('gulp'),
  uglify =	require('gulp-uglify'),
  rename = 	require('gulp-rename'),
	sass = 	require('gulp-sass'),
	maps = 	require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css'),
	 del = require('del'),
  useref = require('gulp-useref'),
  gulpIf = require('gulp-if');

var options = {
	src: 'src',
	dist: 'dist'
};

gulp.task("compileSass", function() {
	return gulp.src(options.src + "/scss/application.scss")
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest(options.src + "/css"));
});

gulp.task("watchFiles", function() {
	gulp.watch(options.src + '/scss/**/*.scss', ['compileSass'])
});

gulp.task('clean', function() {
	del(['dist', 'css/application*.css*', 'js/app*.js*']);
});

gulp.task('html', ['compileSass'], function() {
	return gulp.src(options.src + '/index.html')
		.pipe(useref())
		.pipe(gulpIf('*.js', uglify()))
		.pipe(gulpIf('*.css', cleanCSS()))
		.pipe(gulp.dest(options.dist));
});

gulp.task("build", ['html'], function () {
return gulp.src([options.src + '/img/**'])
	.pipe(gulp.dest(options.dist + '/img'));
});

gulp.task('serve', ['watchFiles']);

gulp.task('default', ['clean'], function() {
	gulp.start('build');
});