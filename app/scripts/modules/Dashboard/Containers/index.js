/**
 * Created by artem on 11/10/15.
 */
define(
    [
        'moduleManager',
        './controllers/masterController',
        './controllers/listController',
        './services/dataService'
    ],
    function ($moduleManager) {
        'use strict';
        $moduleManager.registerModuleComponents(arguments);
    }
);