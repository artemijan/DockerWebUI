/**
 * Created by artem on 11/10/15.
 */
define(['angular'],
    function (angular) {
        'use strict';
        return angular.module('DockerWebUI.Dashboard.Containers', [])
            .config([
                '$stateProvider',
                function ($stateProvider) {
                    var $moduleManager = angular.$moduleManager;
                    $stateProvider
                        .state('dashboard.containers', {
                            url: '/dashboard/containers',
                            abstract: true,
                            templateUrl: 'views/Dashboard/Containers/master.html',
                            controller: 'DockerWebUI.Dashboard.Containers.MasterController'
                        })
                        .state('dashboard.containers.list', $moduleManager.stateForController('DockerWebUI.Dashboard.Containers.ListController', {
                            controllerAs: 'controller',
                            url: '/list',
                            templateUrl: 'views/Dashboard/Containers/activities/list.html'
                        }))
                }
            ]);
    }
);