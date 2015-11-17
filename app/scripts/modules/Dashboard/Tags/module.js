/**
 * Created by artem on 11/16/15.
 */
define(['angular'],
    function (angular) {
        'use strict';
        return angular.module('DockerWebUI.Dashboard.Tags', [])
            .config([
                '$stateProvider',
                function ($stateProvider) {
                    var $moduleManager = angular.$moduleManager;
                    $stateProvider
                        .state('dashboard.tags', {
                            url: '/tags',
                            abstract: true,
                            templateUrl: 'views/Dashboard/Tags/master.html',
                            controller: 'DockerWebUI.Dashboard.Tags.MasterController'
                        })
                        .state('dashboard.tags.list', $moduleManager.stateForController('DockerWebUI.Dashboard.Tags.ListController', {
                            controllerAs: 'controller',
                            url: '/list/{repo}',
                            templateUrl: 'views/Dashboard/Tags/activities/list.html',
                            data: {
                                breadcrumbs: [
                                    {
                                        name: 'Home',
                                        state: 'dashboard.home'
                                    },
                                    {
                                        name: 'Images',
                                        state: 'dashboard.images.list'
                                    },
                                    'Tags'
                                ]
                            }
                        }))
                }
            ])
    }
);