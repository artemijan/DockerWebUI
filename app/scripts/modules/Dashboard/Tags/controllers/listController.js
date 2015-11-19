/**
 * Created by artem on 11/16/15.
 */
define(['../module'], function (module) {
    Controller.$name = 'DockerWebUI.Dashboard.Tags.ListController';
    Controller.resolve = function () {
        var MasterController = angular.$moduleManager.getControllerClass('DockerWebUI.Dashboard.Tags.MasterController');
        return MasterController.listControllerResolver;
    };
    Controller.$inject = [
        '$scope',
        'growl',
        '$log',
        '$stateParams',
        'DockerWebUI.Dashboard.Tags.DataService',
        'tags',
        'firstManifest'
    ];
    function Controller($scope, growl, $log, $stateParams, dataService, tags, manifest) {
        var vm = this;
        var repoName = $stateParams.repo;
        vm.headerName = 'Image: ' + repoName;
        vm.searchPlaceHolder = 'Search for tags';
        vm.searchFor = '';
        vm.list = tags.tags;
        vm.delete = function (tag) {
            growl.info('Deletion is not supported yet by v2 registry.');
        };
        vm.toggleView = function () {
            if (vm.view != 'default') {
                vm.view = 'default';
            } else {
                vm.view = 'json';
            }
        };
        vm.toggleView();
        $scope.toggleCollapse = function () {
            $scope.showDetails = !$scope.showDetails;
        };
        vm.manifests = {};
        function parseHistory(manifest) {
            if (manifest) {
                if (manifest.tag) {
                    vm.manifests[manifest.tag] = manifest;
                }
                if (Array.isArray(manifest.history)) {
                    vm.manifests[manifest.tag].parsedHistory = JSON.parse(manifest.history[0]['v1Compatibility']);
                    if (vm.manifests[manifest.tag].parsedHistory.created) {
                        vm.manifests[manifest.tag].parsedHistory.created = new Date(vm.manifests[manifest.tag].parsedHistory.created).toString();
                    }
                    return vm.manifests[manifest.tag].parsedHistory;
                }
            }
            return null;
        }

        parseHistory(manifest);
        vm.currentTag = tags.tags[0];
        vm.inspect = function (tag) {
            if (tag == vm.currentTag) {
                return;
            }

            vm.currentTag = tag;
            if (vm.manifests[tag]) {
                return;
            }
            dataService.getManifest(repoName, tag)
                .then(function (response) {
                    parseHistory(response);
                })
                .catch(function (err) {
                    growl.error(err);
                })
                .finally(function () {

                })
        };
    }

    module.controller(Controller.$name, Controller);
    return Controller;
});