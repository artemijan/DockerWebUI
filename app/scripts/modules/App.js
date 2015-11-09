/**
 * Created by artem on 11/6/15.
 */
define([
        'angular',
        'twitter-bootstrap',
        'angular-ui-router',
        'angular-sanitize',
        'angular-animate',
        'ui.bootstrap',
        'ui.bootstrap.tpls',
        'modules/Common/index',
        'modules/Auth/index',
        'modules/Dashboard/index'
    ],
    function (angular, objectpath, tv4) {
        window.tv4 = tv4;
        window.ObjectPath = objectpath;
        var app = angular.module('DockerWebUI', [
            'ui.router',
            'ngAnimate',
            'ngSanitize',
            'ui.bootstrap',
            'ui.bootstrap.tpls',
            'DockerWebUI.Common',
            'DockerWebUI.Auth',
            'DockerWebUI.Dashboard'
        ]);
        app.run([
            '$rootScope',
            '$state',
            '$stateParams',
            '$modalStack',
            function ($rootScope, $state, $stateParams, $modalStack) {
                $rootScope.$on('$stateChangeStart', function (event, nextState, nextStateParams, curState, curStateParams) {
                    $modalStack.dismissAll();
                    //Redirect handling
                    if (nextState.data && nextState.data.redirect) {
                        event.preventDefault();
                        $state.go(nextState.data.redirect);
                        return false;
                    }
                    return true;
                });
            }
        ]).config([
            '$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $stateProvider
                    .state('root', {
                        url: '',
                        data: {
                            redirect: 'dashboard.home'
                        }
                    })
                    .state('rootEnter', {
                        url: '/',
                        data: {
                            redirect: 'dashboard.home'
                        }
                    })
                    .state('404', {
                        templateUrl: '404.html'
                    })
                    .state('accessDenied', {
                        templateUrl: 'accessDenied.html'
                    });
                $urlRouterProvider.otherwise(function ($injector) {
                    var state = $injector.get('$state');
                    state.go('404', null, {location: false});
                });
            }
        ]);
        return app;
    }
);