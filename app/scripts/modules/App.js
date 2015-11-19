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
        'json-formatter',
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
            'jsonFormatter',
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
                '$uibModalStack',
                'growl',
                'DockerWebUI.Common.APIRoutes',
                'DockerWebUI.Common.HttpService',
                function ($rootScope, $state, $stateParams, $uibModalStack, growl, apiRoutes, httpService) {
                    //get docker version
                    httpService.request(apiRoutes.docker.version())
                        .then(function (response) {
                            $rootScope.$docker = response;
                        })
                        .catch(function (response) {
                            growl.error(response);
                        });
                    $rootScope.$on('$stateChangeStart', function (event, nextState, nextStateParams, curState, curStateParams) {
                        $uibModalStack.dismissAll();
                        $rootScope.currentState = nextState;
                        //Redirect handling
                        if (nextState.data && nextState.data.redirect) {
                            event.preventDefault();
                            $state.go(nextState.data.redirect);
                            return false;
                        }
                        return true;
                    });
                    $rootScope.stateMatch = function (inState) {
                        if ($rootScope.currentState && $rootScope.currentState.name && $rootScope.currentState.name.indexOf(inState) >= 0) {
                            return true;
                        }
                        return false;
                    };
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