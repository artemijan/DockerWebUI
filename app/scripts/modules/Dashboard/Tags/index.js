/**
 * Created by artem on 11/16/15.
 */
define(
    [
        'moduleManager',
        './controllers/listController',
        './controllers/masterController',
        './services/dataService'
    ],
    function ($moduleManager) {
        'use strict';
        $moduleManager.registerModuleComponents(arguments);
    }
);