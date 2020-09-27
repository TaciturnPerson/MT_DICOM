/* global module */
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function() {
    grunt.registerTask('init', ['connect:init']);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
var port = app.get('port');
app.set('port', (process.env.PORT || 5000));
console.log('App is running, server is listening on port ', app.get('port'));

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            init: {
                options: {
                    port: 5000,
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
    grunt.registerTask('init', ['connect:init']);
    grunt.registerTask('start', ['connect:server', 'watch']);
};
