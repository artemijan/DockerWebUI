/**
 * Created by artem on 11/9/15.
 */
define(['../module'], function (module) {
    module.service('DockerWebUI.Common.APIRoutes', [
        function () {
            var METHODS = {
                GET: 'GET',
                POST: 'POST',
                PUT: 'PUT',
                DELETE: 'DELETE',
                PATCH: 'PATCH'
            };
            var routes = {
                containers: {
                    list: function () {
                        return {
                            method: METHODS.GET,
                            url: '/containers/json?'
                        }
                    }
                }
            };
            return routes
        }
    ]);
});