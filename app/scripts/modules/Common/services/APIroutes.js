/**
 * Created by artem on 11/9/15.
 */
define(['../module'], function (module) {
    module.factory('DockerWebUI.Common.APIRoutes', [
        function () {
            var METHODS = {
                GET: 'GET',
                POST: 'POST',
                PUT: 'PUT',
                DELETE: 'DELETE',
                PATCH: 'PATCH'
            };

            function API(cfg) {
                cfg.url = '/v2/' + cfg.url;
                cfg.apiName = 'DockerWebUI';
                return cfg;
            }

            var routes = {
                docker: {
                    version: function () {
                        return API({
                            method: METHODS.GET,
                            url: ''  //default is '/v2'
                        })
                    }
                },
                repo: {
                    list: function () {
                        /**
                         * Pagination here is needed
                         */
                        return API({
                            method: METHODS.GET,
                            url: '_catalog'
                        });
                    }
                },
                tags: {
                    list: function (repo) {
                        return API({
                            method: METHODS.GET,
                            url: repo + '/tags/list'
                        })
                    },
                    delete: function (repo, tag) {
                        return API({
                            method: METHODS.DELETE,
                            url: repo + '/manifest/' + tag
                        })
                    },
                    getManifest: function (repo, tag) {
                        return API({
                            method: METHODS.GET,
                            url: repo + '/manifests/' + tag
                        })
                    }
                }
            };
            return routes;
        }
    ]);
});