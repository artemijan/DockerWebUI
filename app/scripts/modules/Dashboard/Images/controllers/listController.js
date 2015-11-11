/**
 * Created by artem on 11/10/15.
 */
define(['../module'], function (module) {
    Controller.$name = 'DockerWebUI.Dashboard.Images.ListController';
    Controller.resolve = function () {
        var MasterController = angular.$moduleManager.getControllerClass('DockerWebUI.Dashboard.Images.MasterController');
        return MasterController.listControllerResolver;
    };
    Controller.$inject = [
        '$scope',
        'images'
    ];
    function Controller($scope, images) {
        var vm = this;
        vm.headerName = 'Images panel';
        vm.list = images;
        vm.create = function () {
            alert('created image')
        }
    }

    module.controller(Controller.$name, Controller);
    return Controller;
});