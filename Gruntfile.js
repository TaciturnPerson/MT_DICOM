/* global module */

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task to run tests
    grunt.registerTask('start', ['connect:prod', 'watch']);
};
