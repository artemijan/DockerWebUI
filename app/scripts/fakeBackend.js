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
                $httpBackend.whenGET(/\/v2\/?$/).respond(function (method, url, data) {
                    return [200, fakeDataSource.getVersion()];
                });
                $httpBackend.whenGET(/\/v2\/_catalog/).respond(function (method, url, data) {
                    return [200, fakeDataSource.getRepositories()];
                });
                $httpBackend.whenGET(/\/v2\/\w*\/tags\/list/).respond(function (method, url, data) {
                    var data = url.split('/');
                    var repo = data[2];
                    return [200, fakeDataSource.getTags(repo)];
                });
                $httpBackend.whenGET(/\/v2\/\w*\/manifests\/\w*/).respond(function (method, url, data) {
                    var data = url.split('/');
                    var repo = data[2];
                    var tag = data[4];
                    return [200, fakeDataSource.getManifest(repo, tag)];
                });
                // Pass through everything else
                $httpBackend.whenGET(/.*/).passThrough();
                $httpBackend.whenPOST(/.*/).passThrough();

            }])
    });