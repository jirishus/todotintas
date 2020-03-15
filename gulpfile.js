var gulp            =   require("gulp"),
    connect         =   require("gulp-connect"),
    compass         =   require("gulp-compass"),
    browserSync     =   require("browser-sync");


/* start local server */
gulp.task("local-server", function() {
    connect.server({
        port:9000
    });
});

/* Compile Compass */
gulp.task("styles", function() {
    return gulp.src("styles/sass/*.scss")
        .pipe(compass({
            css:"./styles/stylesheets",
            sass:"./styles/sass"
        }))
        .pipe(gulp.dest("./styles/stylesheets"));
});

/* default task */
gulp.task("default", ['local-server'], function() {
    console.log('server started');
    gulp.watch("styles/sass/*.scss",["styles"]);
});
