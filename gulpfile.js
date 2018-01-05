var gulp        = require('gulp'); // Require gulp

// Sass dependencies
var sass        = require('gulp-sass'); // Compile Sass into CSS

// Minification dependencies
var minifyCSS   = require('gulp-minify-css'); // Minify the CSS
var concat      = require('gulp-concat'); // Join all JS files together to save space
var stripDebug  = require('gulp-strip-debug'); // Remove debugging stuffs
var uglify      = require('gulp-uglify'); // Minify JavaScript
var minifyHTML  = require('gulp-minify-html'); // Minify HTML
var imagemin    = require('gulp-imagemin'); // Minify images

// Other dependencies
var browserSync = require('browser-sync').create(); // Reload the browser on file changes
var size        = require('gulp-size'); // Get the size of the project
var jshint      = require('gulp-jshint'); // Debug JS files
var stylish     = require('jshint-stylish'); // More stylish debugging



// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
   return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss','node_modules/bootstrap/scss/_custom.scss','src/scss/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('style.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./src/build/styles/'))
        .pipe(browserSync.reload({
            stream: true,
        }));
});

// Customize bootstrap 4's Sass files


// Move the javascript files into our /src/js folder
gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js',
    'js/holder.min.js',
    'js/popper.min.js'])
        .pipe(concat('script.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest("./src/build/scripts/"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./src"  
    });

    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'node_modules/bootstrap/scss/_custom.scss', 'src/scss/*.scss'], ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// Task to get the size of the app project
gulp.task('size', function() {
    gulp.src('./src/**')
        .pipe(size({
            showFiles: true,
        }));
});

// Task to run JS hint
//gulp.task('jshint', function() {
//    gulp.src(['js/*.js','./build/scripts/*.js'])
//        .pipe(jshint())
//        .pipe(jshint.reporter('jshint-stylish'));
//});

// Task to minify new or changed HTML pages
//gulp.task('html', function() {
//    gulp.src('./src/*.html')
//        .pipe(minifyHTML())
//        .pipe(gulp.dest('./build/'));
//});

// Task to minify images into build
//gulp.task('images', function() {
//    gulp.src('./src/asets/img/*')
//        .pipe(imagemin({
//        progressive: true,
//    }))
//        .pipe(gulp.dest('./build/images'));
//});

gulp.task('default', ['js','serve','size']);