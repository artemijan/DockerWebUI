/**
 * Created by artem on 11/11/15.
 */
define(['../module'], function (module) {
    module.service('DockerWebUI.Common.HttpService',
        [
            '$http',
            '$q',
            function ($http, $q) {
                var service = {};

                service.request = function (requestData) {
                    var defer = $q.defer();
                    $http(requestData)
                        .success(function (responseData) {
                            /**
                             * Handle some common things here
                             */
                            defer.resolve(responseData);
                        })
                        .error(function (responseData, responseCode) {
                            /**
                             * Handle common errors here
                             */
                            return defer.reject(responseData);
                        });
                    return defer.promise;
                };
                return service;
            }
        ]);
});