/**
 * Created by artem on 11/11/15.
 */
define(['../module'], function (module) {
    module.service('DockerWebUI.Dashboard.Containers.ContainersDataService',
        [
            'growl',
            'DockerWebUI.Common.APIRoutes',
            'DockerWebUI.Common.HttpService',
            function (growl, apiRoutes, httpService) {
                var service = {};
                service.list = function (all) {
                    return httpService.request(apiRoutes.containers.list(all))
                        .then(function (response) {
                            return response;
                        })
                        .catch(function (response) {
                            growl.error(response);
                        });
                };
                return service;
            }
        ]);
});