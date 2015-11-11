/**
 * Created by artem on 11/11/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';

        MasterController.$name = 'DockerWebUI.Dashboard.Images.MasterController';
        function MasterController() {
            var self = this;
            return self;
        }

        images.$inject = ['$q', '$log', 'DockerWebUI.Dashboard.Images.DataService'];
        function images($q, $log, dataService) {
            var deferred = $q.defer();
            dataService.list()
                .then(function (containers) {
                    deferred.resolve(containers);
                })
                .catch(function (error) {
                    deferred.resolve(null);
                    $log.error(error);
                });
            return deferred.promise;
        }


        MasterController.listControllerResolver = {
            images: images
        };
        module.controller(MasterController.$name, MasterController);
        return MasterController;
    });
