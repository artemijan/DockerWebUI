/**
 * Created by artem on 11/6/15.
 */
define([
        'angular',
        'Env',
        'twitter-bootstrap',
        'angular-ui-router',
        'angular-sanitize',
        'angular-animate',
        'angular-mocks',
        'ui.bootstrap',
        'ui.bootstrap.tpls',
        'angular-growl',
        'modules/Common/index',
        'modules/Auth/index',
        'modules/Dashboard/index',
        '../moduleManager'
    ],
    function (angular, Env, objectpath, tv4) {
        window.tv4 = tv4;
        window.ObjectPath = objectpath;
        var deps = [
            'ui.router',
            'ngAnimate',
            'ngSanitize',
            'ui.bootstrap',
            'ui.bootstrap.tpls',
            'angular-growl',
            'DockerWebUI.Common',
            'DockerWebUI.Auth',
            'DockerWebUI.Dashboard'
        ];
        if (Env.useFakeAPIService) {
            deps[deps.length] = 'ngMockE2E';
        }
        var app = angular.module('DockerWebUI', deps);
        app.constant("$moduleManager", angular.$moduleManager)
            .run([
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
                'growlProvider',
                function ($stateProvider, $urlRouterProvider, growlProvider) {
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
                    growlProvider.globalPosition('top-center');
                    growlProvider.globalTimeToLive(3000);
                    growlProvider.globalDisableCountDown(true);
                    growlProvider.onlyUniqueMessages(false);
                }
            ]);
        return app;
    }
);