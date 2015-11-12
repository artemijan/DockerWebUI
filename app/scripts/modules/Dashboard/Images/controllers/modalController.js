/**
 * Created by artem on 11/12/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.controller(
            "DockerWebUI.Dashboard.Images.ModalController",
            [
                '$scope',
                '$uibModalInstance',
                function ($scope, $uibModalInstance) {
                    var vm = this;
                    vm.image = {file:null};
                    $scope.fileName = '';
                    vm.setFile = function () {
                        //console.log($scope.image);
                    };
                    $scope.flip = function () {
                        $scope.isFlipped = !$scope.isFlipped;
                    };
                    $scope.create = function () {
                        $uibModalInstance.close('closed');
                    };
                    $scope.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                }
            ]
        );
    }
);