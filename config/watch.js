/**
 * Created by artem on 11/9/15.
 */
module.exports = {
    bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
    },
    js: {
        files: ['<%= appConfig.app %>/scripts/{,*/}*.js'],
        tasks: ['requirejs:server'],
        options: {
            livereload: '<%= connect.options.livereload %>'
        }
    },
    styles: {
        files: ['<%= appConfig.app %>/styles/{,*/}*.less'],
        tasks: ['autoprefixer', 'less'],
        options: {
            livereload: true
        }
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: ['<%= appConfig.app %>/{,*/}*.html',
            '<%= appConfig.app %>/views/**/*.html',
            '.tmp/styles/{,*/}*.css',
            '<%= appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: [
            'copy:server'
        ]
    }
};
