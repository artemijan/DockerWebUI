/**
 * Created by artem on 11/6/15.
 */
require.config({
    paths: {
        'angular': '../../bower_components/angular/angular',
        'lodash': '../../bower_components/lodash/lodash',
        'angular-mocks': '../../bower_components/angular-mocks/angular-mocks',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'twitter-bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap',
        'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router',
        'domReady': '../../bower_components/requirejs-domready/domReady',
        'angular-animate': '../../bower_components/angular-animate/angular-animate',
        'angular-sanitize': '../../bower_components/angular-sanitize/angular-sanitize',
        'ui.bootstrap': '../../bower_components/angular-bootstrap/ui-bootstrap',
        'ui.bootstrap.tpls': '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-growl': '../../bower_components/angular-growl-v2/build/angular-growl',
        'json-formatter':'../bower_components/json-formatter/dist/json-formatter'
    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'lodash': {
            deps: []
        },
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'json-formatter':{
            deps:['angular']
        },
        'angular-growl': {
            deps: ['angular', 'twitter-bootstrap']
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'ui.bootstrap': {
            deps: ['angular']
        },
        'ui.bootstrap.tpls': {
            deps: ['ui.bootstrap']
        },
        'twitter-bootstrap': {
            deps: ['jquery']
        }
    }
});
require(['./bootstrap'], function () {
});