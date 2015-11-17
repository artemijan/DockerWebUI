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
        '$uibModal',
        '$log',
        'images'
    ];
    function Controller($scope, $uibModal, $log, images) {
        var vm = this;
        vm.headerName = 'Images panel';
        vm.searchFor = '';
        vm.searchPlaceHolder = 'Search for images';
        vm.list = images;
    }

    module.controller(Controller.$name, Controller);
    return Controller;
});