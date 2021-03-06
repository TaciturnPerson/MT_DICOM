/* global module */



module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
		            port: process.env.PORT || 5000,
                    livereload: true,
                    base: {
                        path: './',
                        options: {
                            index: 'index.html'
                        },
                    },
                }
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js', '!**/node_modules/**', '**/node_modules/dwv/**', '*.html'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task to run tests
    grunt.registerTask('default', ['connect', 'watch']);
};
