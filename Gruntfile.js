/* global module */

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'service-worker.js', 'src/**/*.js', '!src/utils/modernizr.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        copy: {
            dev: {
                src: 'index.html',
                dest: 'index-dev.html',
                options: {
                    process: function (content/*, srcpath*/) {
                        // do not register service worker
                        return content.replace(/<script type="text\/javascript" src="src\/register-sw\.js"><\/script>/g,
                            '<!-- <script type="text/javascript" src="src/register-sw.js"></script> -->');
                    },
                },
            },
        },
        connect: {
            prod: {
                options: {
		    //port: 5000,
		    //hostname: "0.0.0.0",
                    livereload: true
                }
            },
        },
        watch: {
            scripts: {
                files: ['**/*.js', '!**/node_modules/**', '**/node_modules/dwv/**', '*.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task to run tests
    grunt.registerTask('start', ['connect:prod', 'watch']);
};
