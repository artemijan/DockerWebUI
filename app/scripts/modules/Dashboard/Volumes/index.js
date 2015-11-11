/**
 * Created by artem on 11/10/15.
 */
define(
    [
        'moduleManager',
        './controllers/listController'
    ],
    function ($moduleManager) {
        'use strict';
        $moduleManager.registerModuleComponents(arguments);
    }
);