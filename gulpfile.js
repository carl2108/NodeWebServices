/**
 * Created by carl.oconnor on 31/01/2018.
 */
var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');



gulp.task('default', function() {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 3001
        },
        ignore: ['./node_modules/**']
    })
    .on('restart', function () {
        console.log('Restarting');
    });
});