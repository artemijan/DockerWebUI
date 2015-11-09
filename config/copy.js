/**
 * Created by artem on 11/9/15.
 */
module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= appConfig.app %>',
            dest: '<%= appConfig.dist %>',
            src: ['*.{ico,png,txt}',
                '*.html',
                'views/**/*.html',
                'images/**/*',
                'fonts/**/.*'
            ]
        }, {
            expand: true,
            cwd: 'bower_components/bootstrap/dist',
            src: 'fonts/*',
            dest: '<%= appConfig.dist %>'
        }, {
            expand: true,
            dot: true,
            cwd: 'bower_components',
            src: 'requirejs/*.js',
            dest: '<%= appConfig.dist %>/vendor/'
        }]
    },
    server: {
        files: [{
            expand: true,
            cwd: 'bower_components/bootstrap/dist',
            src: 'fonts/*',
            dest: '<%= appConfig.server %>'
        }, {
            expand: true,
            cwd: '<%= appConfig.app %>',
            dest: '<%= appConfig.server %>',
            src: ['*.{ico,png,txt}',
                '*.html',
                'views/**/*.html',
                'images/**/*',
                'fonts/**/.*'
            ]
        }, {
            expand: true,
            dot: true,
            cwd: 'bower_components',
            src: 'requirejs/*.js',
            dest: '<%= appConfig.server %>/vendor/'
        }
        ]
    }
};
