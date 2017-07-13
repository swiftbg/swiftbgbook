var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require("gulp-babel");
// var compass = require('gulp-compass');


//// SassとCssの保存先を指定
gulp.task('sass', function(){
  gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./css/'));
});

// CompassとCssの保存先を指定
//gulp.task('sass', function(){
//  gulp.src('./sass/*.scss')
//    .pipe(compass({outputStyle: 'expanded'}))
//    .pipe(gulp.dest('./css/'));
//});


gulp.task('babel', function() {
  gulp.src('./jsbabel/*.es6')
    .pipe(babel())
    .pipe(gulp.dest('./js/'))
});

//自動監視のタスクを作成
gulp.task('watch', function(){
  gulp.watch('./sass/*.scss', ['sass']);
  gulp.watch('./jsbabel/*.es6', ['babel']);
});

// タスク"watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', ['watch']);