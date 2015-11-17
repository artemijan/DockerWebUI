/**
 * Created by artem on 11/16/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';

        MasterController.$name = 'DockerWebUI.Dashboard.Tags.MasterController';
        function MasterController() {
            var self = this;
            return self;
        }

        tags.$inject = ['$q', '$log', '$stateParams', 'DockerWebUI.Dashboard.Tags.DataService'];
        function tags($q, $log, $stateParams, dataService) {
            var deferred = $q.defer();
            var repoName = $stateParams.repo;
            if (!repoName) {
                deferred.reject(null);
                $log.error('No repository name');
                return deferred.promise;
            }
            dataService.list(repoName)
                .then(function (response) {
                    deferred.resolve(response);
                })
                .catch(function (error) {
                    deferred.resolve(null);
                    $log.error(error);
                });
            return deferred.promise;
        }

        firstManifest.$inject = ['$q', '$log', '$stateParams', 'tags', 'DockerWebUI.Dashboard.Tags.DataService'];
        function firstManifest($q, $log, $stateParams, tags, dataService) {
            var deferred = $q.defer();
            var repoName = $stateParams.repo;
            if (!repoName) {
                deferred.reject(null);
                $log.error('No repository name');
                return deferred.promise;
            }
            dataService.getManifest(repoName, tags.tags[0])
                .then(function (response) {
                    deferred.resolve(response);
                })
                .catch(function (error) {
                    deferred.resolve(null);
                    $log.error(error);
                });
            return deferred.promise;
        }


        MasterController.listControllerResolver = {
            tags: tags,
            firstManifest: firstManifest
        };
        module.controller(MasterController.$name, MasterController);
        return MasterController;
    });
