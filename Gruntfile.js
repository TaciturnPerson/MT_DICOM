/* global module */

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
		        port: process.env.PORT || 5000,
                    keepalive: true,
                    base: {
                        path: './',
                        options: {
                            index: 'index.html'
                        },
                    },
                    open: true
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
    grunt.registerTask('start', ['connect']);
};
