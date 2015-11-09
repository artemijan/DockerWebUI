/**
 * Created by artem on 11/9/15.
 */
module.exports = function (grunt, appConfig) {
    return {
        dist: {
            options: {
                modifyVars: {
                    NO_CACHE: '"' + appConfig.env.build.noCache + '"'
                },
                report: 'min',
                strictMath: false,
                compress: appConfig.env.minimizeCss,
                cleancss: true,
                paths: ['<%= appConfig.server %>/styles/',
                    '<%= appConfig.app %>/styles/'
                ]
            },
            files: {
                '<%= appConfig.dist %>/styles/main.min.css': '<%= appConfig.app %>/styles/main.less'
            }
        },
        server: {
            options: {
                modifyVars: {
                    NO_CACHE: '"' + appConfig.env.build.noCache + '"'
                },
                report: 'min',
                strictMath: false,
                compress: appConfig.env.minimizeCss,
                cleancss: false,
                sourceMap: appConfig.env.generateSourceMaps,
                sourceMapFilename: '<%= appConfig.server %>/styles/main.css.map',
                sourceMapURL: '/styles/main.css.map',
                sourceMapBasepath: '<%= appConfig.server %>/styles',
                sourceMapRootpath: '/',
                paths: ['<%= appConfig.server %>/styles/',
                    '<%= appConfig.app %>/styles/'
                ]
            },
            files: {
                '<%= appConfig.server %>/styles/main.css': '<%= appConfig.app %>/styles/main.less'
            }
        }
    }
};
