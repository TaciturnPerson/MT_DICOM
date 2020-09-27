/* global module */
var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
var port = app.get('port');
app = express();
console.log('App is running, server is listening on port ', app.get('port'));

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
		        port: port,
		        hostname: "0.0.0.0",
                    livereload: 35729,
                    base: {
                        path: './',
                        options: {
                            index: 'index.html'
                        }
                    }
                }
            },
        },
        watch: {
            scripts: {
                options: {
                    livereload: 35729
                },
                files: ['**/*.js', '!**/node_modules/**', '**/node_modules/dwv/**', '*.html'],
                tasks: []
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task to run tests
    grunt.registerTask('start', ['connect', 'watch']);
};
