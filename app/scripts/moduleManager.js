/**
 * Created by artem on 11/11/15.
 */
define(
    ['lodash', 'angular'],
    function (_, angular) {
        function ModuleManager() {
            var controllerClasses = {};
            this.registerController = function (controllerCls) {
                controllerCls._type = 'controller';
                controllerCls.alias = controllerCls.alias || 'controller';
                controllerClasses[controllerCls.$name] = controllerCls;
            };
            this.getControllerClass = function (controllerName) {
                return controllerClasses[controllerName];
            };
            this.isControllerClass = function (cls) {
                return typeof(cls) == 'function' && cls.$name;
            };
            this.registerModuleComponents = function (classes) {
                var self = this;
                _.forEach(classes, function (cls) {
                    if (self.isControllerClass(cls)) {
                        self.registerController(cls);
                    }
                });
            };
            this.stateForController = function (controllerName, conf) {
                var controllerCls = this.getControllerClass(controllerName);
                if (!controllerCls) {
                    throw Error('Controller \"' + controllerName + '\" is not registered in ModuleManager');
                }
                var controllerRelated = {
                    controller: controllerCls,
                    controllerAs: controllerCls.alias,
                    resolve: (typeof(controllerCls.resolve) == 'function' ? controllerCls.resolve() : controllerCls.resolve)
                };
                if (typeof conf.resolve === 'object') {
                    controllerRelated.resolve = _.extend(controllerRelated.resolve, conf.resolve);
                    delete conf.resolve;
                }
                return _.extend(controllerRelated, conf);
            }
        }

        angular.$moduleManager = new ModuleManager();
        return angular.$moduleManager;
    }
);