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
        'growl',
        '$log',
        'images'
    ];
    function Controller($scope, growl,$log, images) {
        var vm = this;
        vm.headerName = 'Images panel';
        vm.searchFor = '';
        $scope.delete = function(){
            growl.info('Deletion is not supported yet by v2 registry.');
        };
        vm.searchPlaceHolder = 'Search for images';
        vm.list = images;
    }

    module.controller(Controller.$name, Controller);
    return Controller;
});