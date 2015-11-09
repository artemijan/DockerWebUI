/**
 * Created by artem on 11/9/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.controller('DockerWebUI.Dashboard.MasterController', [
            '$scope',
            function ($scope) {
                var vm = this;
                vm.headerLabel = 'Logicify docker';
                vm.createImage = function () {
                    //create an image here
                };
                vm.createBuild = function () {
                };
                vm.logIn = function () {
                };
                vm.signIn = function () {
                };
                return vm;
            }
        ]);
    }
);