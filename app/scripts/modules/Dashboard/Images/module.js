/**
 * Created by artem on 11/10/15.
 */
define(['angular'],
    function (angular) {
        'use strict';
        return angular.module('DockerWebUI.Dashboard.Images', [])
            .config([
                '$stateProvider',
                function ($stateProvider) {
                    var $moduleManager = angular.$moduleManager;
                    $stateProvider
                        .state('dashboard.images', {
                            url: '/images',
                            abstract: true,
                            templateUrl: 'views/Dashboard/Images/master.html',
                            controller: 'DockerWebUI.Dashboard.Images.MasterController'
                        })
                        .state('dashboard.images.list', $moduleManager.stateForController('DockerWebUI.Dashboard.Images.ListController', {
                            controllerAs: 'controller',
                            url: '/list',
                            templateUrl: 'views/Dashboard/Images/activities/list.html',
                            data: {
                                breadcrumbs: [
                                    {
                                        name: 'Home',
                                        state: 'dashboard.home'
                                    },
                                    'Images'
                                ]
                            }
                        }))
                }
            ])
    }
);