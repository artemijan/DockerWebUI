/**
 * Created by artem on 11/10/15.
 */
define(['../module'], function (module) {
    Controller.$name = 'DockerWebUI.Dashboard.Volumes.ListController';
    Controller.resolve = function () {
        var MasterController = angular.$moduleManager.getControllerClass('DockerWebUI.Dashboard.Volumes.MasterController');
        return MasterController.listControllerResolver;
    };
    Controller.$inject = [
        '$scope',
        'volumes'
    ];
    function Controller($scope, volumes) {
        var vm = this;
        vm.headerName = 'Volumes panel';
        vm.list = volumes.Volumes;
        vm.create = function () {
            alert('created volume')
        }
    }

    module.controller(Controller.$name, Controller);
    return Controller;
});