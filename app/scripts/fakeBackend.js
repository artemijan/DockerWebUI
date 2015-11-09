/**
 * Created by artem on 11/9/15.
 */
define(
    ['./modules/App', 'lodash', './globalConfig'],
    function (App, _, appConfig, routes) {
        'use strict';
        App.run([
            '$httpBackend',
            function ($httpBackend) {
                if (appConfig.useFakeAPIService) {
                    $httpBackend.whenGET('/service/ping').respond(function (method, url, data) {
                        return 'Ping successful!';
                    });
                    // Pass through everything else
                    $httpBackend.whenGET(/.*/).passThrough();
                    $httpBackend.whenPOST(/.*/).passThrough();
                }
            }])
    });