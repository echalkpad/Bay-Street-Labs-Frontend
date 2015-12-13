var gulp    = require('gulp');
var connect = require('gulp-connect');
var ts      = require('gulp-typescript');
var nodemon = require('gulp-nodemon')
var install = require("gulp-install");
var gulpsync = require('gulp-sync')(gulp);

// !!! Should get all files but not from project file
var tsProject = ts.createProject('scripts/tsconfig.json');

gulp.task('angular', function() {
  // place code for your default task here
  return gulp.src(['node_modules/angular2/**/*']).pipe(gulp.dest('bower_components/angular2'));
});

gulp.task('rxjs', function() {
  // place code for your default task here
  return gulp.src(['node_modules/rxjs/**/*']).pipe(gulp.dest('bower_components/rxjs'));
});

gulp.task('connect', function() {
  connect.server({
    livereload: {
      enabled: true,
      port: 35729
    },
    fallback: 'index.html'
  });
});

gulp.task('watch', function () {
  gulp.watch(['scripts/**/*.js', 'styles/**/*.css', 'views/**/*.html', 'scripts/**/*.html', '*.html']).on('change', function (file) {
    console.log('reload');
        gulp.src(file.path).pipe( connect.reload() );
    });

  gulp.watch(['scripts/**/*.ts'], ['typescript']);
});

gulp.task('typescript', function () {
    var tsResult = tsProject.src('scripts/**/*.ts')
        .pipe(ts(tsProject));

    return tsResult.js.pipe(gulp.dest('scripts/'));
});

gulp.task('install', function () {
  gulp.src(['./bower.json', './package.json'])
    .pipe(install());
})

// run angular task only if angular folder in bower is empty
gulp.task('client', gulpsync.sync(
  [
    'install',
    'angular',
    'rxjs',
    'typescript',
    [
      'connect', 'watch'
    ]
  ]
));
