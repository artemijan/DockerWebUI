/**
 * Created by artem on 11/16/15.
 */
define(['../module'], function (module) {
    module.service('DockerWebUI.Dashboard.Tags.DataService',
        [
            'growl',
            'DockerWebUI.Common.APIRoutes',
            'DockerWebUI.Common.HttpService',
            function (growl, apiRoutes, httpService) {
                var service = {};
                service.list = function (repo) {
                    return httpService.request(apiRoutes.tags.list(repo))
                        .then(function (response) {
                            return response;
                        })
                        .catch(function (response) {
                            growl.error(response);
                        });
                };
                /**
                 * Unsupported yet. This method is in design stage (registry v2)
                 * @param repo
                 * @param tag
                 * @return {*}
                 */
                service.delete = function (repo, tag) {
                    return httpService.request(apiRoutes.tags.delete(repo, tag))
                        .then(function (response) {
                            return response;
                        })
                        .catch(function (error) {
                            growl.error(error);
                        })
                };
                service.getManifest = function (repo, tag) {
                    return httpService.request(apiRoutes.tags.getManifest(repo, tag))
                        .then(function (response) {
                            return response;
                        })
                        .catch(function (error) {
                            growl.error(error);
                        })
                };
                return service;
            }
        ]);
});