/**
 * Created by artem on 11/9/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.controller('DockerWebUI.Dashboard.MasterController', [
            '$scope',
            'DockerWebUI.Auth.Authentication',
            function ($scope, authService) {
                var vm = this;

                vm.headerLabel = 'Logicify docker';
                vm.createRepo = function () {
                    //create an image here
                };
                vm.createBuild = function () {
                };
                vm.logIn = function () {
                    authService.logIn();
                };
                vm.signIn = function () {
                    authService.signUp();
                };
                return vm;
            }
        ]);
    }
);