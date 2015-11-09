/**
 * Created by artem on 11/6/15.
 */
define([
    'require',
    'domReady',
    'angular',
    './modules/App'
], function (require,domReady, angular) {
    'use strict';

    /*
     * place operations that need to initialize prior to app start here
     * using the `run` function on the top-level module
     */
    domReady( function () {
            angular.bootstrap(document, ['DockerWebUI']);
        }
    );
});