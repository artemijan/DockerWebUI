/**
 * Created by artem on 11/6/15.
 */
/*global module,require*/
module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    var config = {
        appConfig: {
            app: require('./bower.json').appPath || 'app',
            dist: 'dist',
            server: '.tmp'
        },
        buildMeta: {
            appVersion: grunt.file.readJSON("package.json").version,
            environment: grunt.option('env') || 'dev',
            releaseTag: grunt.option('release-tag') || grunt.option('release') || 'DEV'
        }
    };
    require('./config/env')(grunt, config);
    config = require('load-grunt-configs')(grunt, config);
    grunt.initConfig(config);
    grunt.registerTask('serve', function () {
        grunt.task.run([
            'autoprefixer',
            'connect:livereload',
            //'requirejs:server',
            'less:server',
            'copy:server',
            'watch'
        ]);
    });
    grunt.registerTask('dist', function () {
        grunt.task.run([
            'less:all',
            'copy:scripts',
            'copy:html',
            'copy:fonts'
        ]);
    });
};