/**
 * Created by artem on 11/9/15.
 */
define(['angular'],
    function (angular) {
        'use strict';
        return angular.module('DockerWebUI.Dashboard', [
            'ui.router',
            'DockerWebUI.Dashboard.Containers',
            'DockerWebUI.Dashboard.Images',
            'DockerWebUI.Dashboard.Volumes'
        ]).config([
            '$stateProvider',
            function ($stateProvider) {

                $stateProvider
                    .state('dashboard', {
                        url: '/dashboard',
                        abstract: true,
                        templateUrl: 'views/Dashboard/master.html',
                        controller: 'DockerWebUI.Dashboard.MasterController as controller'
                    })
                    .state('dashboard.home', {
                        url: '/',
                        templateUrl: 'views/Dashboard/activities/home.html'
                    })
                    .state('dashboard.explore', {
                        url: '/explore',
                        templateUrl: 'views/Dashboard/activities/explore.html'
                    })

            }
        ])
    }
);