/* global module */
var port = process.env.PORT || 5000;
console.log('port');

module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
		        port: port,
                    keepalive: true,
                    base: {
                        path: './',
                        options: {
                            index: 'index.html'
                        },
                    },
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

    // Task to run tests
    grunt.registerTask('start', ['connect']);
};
