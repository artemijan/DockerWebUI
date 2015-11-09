/**
 * Created by artem on 11/9/15.
 */
define(
    ['./modules/App', 'lodash', './globalConfig'],
    function (App, _, appConfig, routes) {
        'use strict';

        //if there is no reason to use fake backend then cancel
        if (!appConfig.useFakeAPIService) {
            return;
        }
        App.run([
            '$httpBackend',
            function ($httpBackend) {
                $httpBackend.whenGET('/service/ping').respond(function (method, url, data) {
                    return 'Ping successful!';
                });
                // Pass through everything else
                $httpBackend.whenGET(/.*/).passThrough();
                $httpBackend.whenPOST(/.*/).passThrough();

            }])
    });