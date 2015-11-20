/**
 * Created by artem on 11/20/15.
 */
module.exports = function (grunt, appConfig) {
    return {
        options: {
            data:{
                requireJsBaseUrl: appConfig.env.minimizeJs ? './' : './scripts',
                mainJsUrl: appConfig.env.minimizeJs
                    ? 'scripts/main.min.js?_no_cache=' + appConfig.env.build.noCache
                    : 'scripts/entrypoint.js?_no_cache=' + appConfig.env.build.noCache,
                mainCssUrl: appConfig.env.minimizeCss
                    ? 'styles/main.min.css?_no_cache=' + appConfig.env.build.noCache
                    : 'styles/main.css?_no_cache=' + appConfig.env.build.noCache
            }
        },
        dist: {
            files: {
                '<%= appConfig.dist %>/index.html': ['<%= appConfig.app %>/index.html']
            }
        },
        dev: {
            files: {
                '<%= appConfig.server %>/index.html': ['<%= appConfig.app %>/index.html']
            }
        }
    }
};