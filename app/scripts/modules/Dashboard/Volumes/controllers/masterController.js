/**
 * Created by artem on 11/11/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';

        MasterController.$name = 'DockerWebUI.Dashboard.Volumes.MasterController';
        function MasterController() {
            var self = this;
            return self;
        }

        volumes.$inject = ['$q', '$log', 'DockerWebUI.Dashboard.Volumes.DataService'];
        function volumes($q, $log, dataService) {
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
            volumes: volumes
        };
        module.controller(MasterController.$name, MasterController);
        return MasterController;
    });
