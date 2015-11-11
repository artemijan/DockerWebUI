/**
 * Created by artem on 11/10/15.
 */
define(['angular'],
    function (angular) {
        'use strict';
        return angular.module('DockerWebUI.Dashboard.Volumes',[])
            .config([
                '$stateProvider',
                function ($stateProvider) {
                    var $moduleManager = angular.$moduleManager;
                    $stateProvider
                        .state('dashboard.volumes', {
                            url: '/volumes',
                            abstract: true,
                            templateUrl: 'views/Dashboard/Volumes/master.html',
                            controller: 'DockerWebUI.Dashboard.Volumes.MasterController'
                        })
                        .state('dashboard.volumes.list', $moduleManager.stateForController('DockerWebUI.Dashboard.Volumes.ListController', {
                            controllerAs: 'controller',
                            url: '/list',
                            templateUrl: 'views/Dashboard/Volumes/activities/list.html'
                        }))
                }
            ]);;
    }
);