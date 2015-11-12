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
        vm.list = images;
        vm.create = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: 'views/Dashboard/Images/createModal.html',
                controller: 'DockerWebUI.Dashboard.Images.ModalController',
                controllerAs: 'controller',
                size: 'xs'
            });

            modalInstance.result.then(function (createdItem) {
                vm.list.push(createdItem);
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        };
    }

    module.controller(Controller.$name, Controller);
    return Controller;
});