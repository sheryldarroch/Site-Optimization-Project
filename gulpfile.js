'use strict';

var gulp = 	require('gulp'),
  concat =	require('gulp-concat'),
  uglify =	require('gulp-uglify'),
  rename = 	require('gulp-rename'),
	sass = 	require('gulp-sass'),
	maps = 	require('gulp-sourcemaps'),
  cleanCSS = require('gulp-clean-css');

gulp.task("concatScripts", function() {
	return gulp.src([
		'js/foundation.js', 
		'js/foundation.reveal.js', 
		'js/scripts.js'
		])
	.pipe(maps.init())
	.pipe(concat("app.js"))
	.pipe(maps.write("./"))
	.pipe(gulp.dest("js"));
});

gulp.task("minifyScripts", ['concatScripts'], function() {
	return gulp.src("js/app.js")
	.pipe(uglify())
	.pipe(rename("app.min.js"))
	.pipe(gulp.dest("js"));
});

gulp.task("compileSass", function() {
	return gulp.src("scss/application.scss")
	.pipe(maps.init())
	.pipe(sass())
	.pipe(maps.write('./'))
	.pipe(gulp.dest("css"));
});

gulp.task("minifyCss", ['compileSass'], function() {
	return gulp.src("css/application.css")
	.pipe(cleanCSS())
	.pipe(rename("application.min.css"))
	.pipe(gulp.dest("css"));
});

gulp.task("build", ['minifyScripts', 'minifyCss']);

gulp.task('default', ['build']);