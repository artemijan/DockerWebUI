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
            var containerUrl = '/containers';
            var imagesUrl = '/images';
            var volumesUrl = '/volumes';
            var routes = {
                docker: {
                    version: function () {
                        return {
                            method: METHODS.GET,
                            url: '/version'
                        }
                    }
                },
                containers: {
                    list: function (all) {
                        var url = containerUrl + '/json';
                        if (all === true) {
                            url += '?all=1';
                        }
                        return {
                            method: METHODS.GET,
                            url: url
                        }
                    },
                    create: function (data) {
                        return {
                            method: METHODS.POST,
                            url: containerUrl + '/create',
                            data: data
                        }
                    },
                    get: function (id) {
                        return {
                            method: METHODS.GET,
                            url: containerUrl + '/' + id + '/json'
                        }
                    },
                    start: function (id) {
                        return {
                            method: METHODS.POST,
                            url: containerUrl + '/' + id + '/start'
                        }
                    },
                    stop: function (id, time) {
                        var t = '';
                        if (time > 0) {
                            t = '?t=' + time;
                        }
                        return {
                            method: METHODS.POST,
                            url: containerUrl + '/' + id + '/stop' + t
                        }
                    },
                    restart: function (id, time) {
                        var t = '';
                        if (time > 0) {
                            t = '?t=' + time;
                        }
                        return {
                            method: METHODS.POST,
                            url: containerUrl + '/' + id + '/restart' + t
                        }
                    },
                    kill: function (id, s) {
                        var signal = '';
                        if (s != null) {
                            s = '?signal=s';
                        }
                        return {
                            method: METHODS.POST,
                            url: containerUrl + '/' + id + '/kill' + s
                        }
                    },
                    rename: function (id, newName) {
                        return {
                            method: METHODS.POST,
                            url: containerUrl + '/' + id + '/rename?new_name=' + newName
                        }
                    },
                    togglePause: function (id, doPause) {
                        var p = 'unpause';
                        if (doPause === true) {
                            p = 'pause';
                        }
                        return {
                            method: METHODS.POST,
                            url: containerUrl + '/' + id + '/' + p
                        }
                    }
                },
                images: {
                    list: function (all, digest) {
                        var url = imagesUrl + '/json';
                        if (all === true) {
                            url += '?all=1';
                        } else {
                            url += '?all=0'
                        }
                        if (digest === true) {
                            url += '&digest=1'
                        }
                        return {
                            method: METHODS.GET,
                            url: url
                        }
                    },
                    build: function (file, authData) {
                        var fd = new FormData();
                        fd.append('file', file);
                        return {
                            method: METHODS.POST,
                            url: imagesUrl + '/build',
                            data: fd,
                            multiPartFormData: true,
                            headers: {
                                'Content-type': 'application/tar',
                                'X-Registry-Config': 'base64 safe encoded data here'
                            }
                        }
                    },
                    create: function (data) {
                        return {
                            method: METHODS.POST,
                            url: imagesUrl + '/create',
                            data: data
                        }
                    }
                },
                misc: {},
                volumes: {
                    list: function () {
                        var url = volumesUrl;
                        return {
                            method: METHODS.GET,
                            url: url
                        }
                    },
                    build: function (file, authData) {
                        var fd = new FormData();
                        fd.append('file', file);
                        return {
                            method: METHODS.POST,
                            url: imagesUrl + '/build',
                            data: fd,
                            multiPartFormData: true,
                            headers: {
                                'Content-type': 'application/tar',
                                'X-Registry-Config': 'base64 safe encoded data here'
                            }
                        }
                    },
                    create: function (name) {
                        return {
                            method: METHODS.POST,
                            url: volumesUrl + '/create',
                            headers: {
                                'Content-type': 'application/json'
                            },
                            data: {"Name": name}
                        }
                    }
                },
                networks: {}
            };
            return routes
        }
    ]);
});