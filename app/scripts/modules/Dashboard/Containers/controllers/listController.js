/**
 * Created by artem on 11/10/15.
 */
define(['../module'], function (module) {

    Controller.$name = 'DockerWebUI.Dashboard.Containers.ListController';
    Controller.resolve = function () {
        var MasterController = angular.$moduleManager.getControllerClass('DockerWebUI.Dashboard.Containers.MasterController');
        return MasterController.listControllerResolver;
    };
    Controller.$inject = [
        '$scope',
        'containers'
    ];
    function Controller($scope, containers) {
        var vm = this;
        vm.headerName = 'Containers panel';
        vm.list = containers;
        vm.create = function () {
            alert('created container')
        }
    }

    module.controller(Controller.$name, Controller);
    return Controller;
});