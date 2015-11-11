/**
 * Created by artem on 11/9/15.
 */
define(
    ['./modules/App', 'lodash', './globalConfig', './fakeDataSource'],
    function (App, _, appConfig, fakeDataSource) {
        'use strict';

        //if there is no reason to use fake backend then cancel
        if (!appConfig.useFakeAPIService) {
            return;
        }
        App.run([
            '$httpBackend',
            function ($httpBackend) {
                $httpBackend.whenGET(/\/containers\/json/).respond(function (method, url, data) {
                    return [200, fakeDataSource.getContainers()];
                });

                $httpBackend.whenGET(/\/images\/json/).respond(function (method, url, data) {
                    return [200, fakeDataSource.getImages()];
                });
                $httpBackend.whenGET(/\/volumes/).respond(function (method, url, data) {
                    return [200, fakeDataSource.getVolumes()];
                });
                $httpBackend.whenGET(/\/version/).respond(function (method, url, data) {
                    return [200, fakeDataSource.getVersion()];
                });
                // Pass through everything else
                $httpBackend.whenGET(/.*/).passThrough();
                $httpBackend.whenPOST(/.*/).passThrough();

            }])
    });