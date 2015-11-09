/**
 * Created by artem on 11/9/15.
 */
module.exports = function (grunt, config) {
    return {
        options: {
            port: 9000,
            hostname: '0.0.0.0',
            livereload: 35729
        },
        livereload: {
            options: {
                open: false,
                middleware: function (connect) {
                    return [
                        //connect.static('.tmp'),
                        connect().use(
                            '/bower_components',
                            connect.static('./bower_components')
                        ),
                        connect().use(
                            '/vendor',
                            connect.static(config.appConfig.server + '/vendor')
                        ),
                        connect().use(
                            '/.tmp',
                            connect.static('.tmp')
                        ),
                        connect().use(
                            '/scripts',
                            connect.static(config.appConfig.app + '/scripts')
                        ),
                        //connect.static(appConfig.dist),
                        connect.static(config.appConfig.server)
                    ];
                }
            }
        },
        dist: {
            options: {
                open: false,
                base: '<%= appConfig.dist %>'
            }
        }
    }
};
