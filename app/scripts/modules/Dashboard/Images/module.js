/**
 * Created by artem on 11/10/15.
 */
define(['angular'],
    function (angular) {
        'use strict';
        return angular.module('DockerWebUI.Dashboard.Images',[])
            .config([
                '$stateProvider',
                function ($stateProvider) {

                    $stateProvider
                        .state('dashboard.images', {
                            url: '/images',
                            templateUrl: 'views/Dashboard/Images/master.html',
                            controller: 'DockerWebUI.Dashboard.Images.ListController as controller'
                        })
                }
            ])
    }
);