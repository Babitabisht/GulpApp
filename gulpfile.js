const gulp= require('gulp');
const imagemin =require('gulp-imagemin');
const uglify=require('gulp-uglify')
const sass =require('gulp-sass');
const concat=require('gulp-concat');
/*

gulp.task = define the task
gulp.src = points to folder to output
gulp.watch  = watch files and folders for changes

gulp.dest = watch files and fo;ders for changes



*/


// Logs message

gulp.task('message',()=>{
    return console.log('Gulp is running.......');
})





//optimize images
gulp.task('imageMin' ,()=>{

    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/images') );
    
    });
    



// gulp.task( 'default' ,()=>{

//     return console.log('Gulp is running');

// } );

//copy all html files

gulp.task('copyhtml',function(){

    gulp.src('src/*html')
    .pipe(gulp.dest('dest'));

});

//Minify js

// gulp.task('uglify',()=>{

//     gulp.src('src/js/*.js')
//     .pipe(uglify())
//     .pipe(gulp.dest('dest/js'));
// })

//Compile sass

gulp.task('sass', ()=>{

gulp.src('src/sass/*.scss')
.pipe(sass().on('error',sass.logError))
.pipe(gulp.dest('dest/css'));

});


//Do all the things at once

gulp.task('default',['message','copyhtml','imageMin','sass','script']);


//script

gulp.task('script',function(){

    gulp.src('src/js/*.js')
    .pipe(concat('main.js '))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
});


//watch

gulp.task('watch',()=>{
    gulp.watch('src/js/*.js',['script']);
    gulp.watch('src/images/*',['imageMin']);
    gulp.watch('src/sass/*.scss',['sass']);
    gulp.watch('src/*.html',['copyhtml']);

})


