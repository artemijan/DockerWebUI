/**
 * Created by artem on 11/17/15.
 */
define(
    ['../module'],
    function (module) {
        'use strict';
        module.directive('breadcrumbs',
            ['$state', '$compile',
                function ($state, $compile) {
                    var directiveHandler = {
                        //if string then just add text to element
                        'string': function (element, text, delimiter, isLast) {
                            var span = angular.element('<span/>');
                            span.addClass('label label-default');
                            text = text;
                            if (isLast) {
                                span.text(text);
                            } else {
                                span.text(text + ' ' + delimiter + ' ');
                            }
                            element.append(span);
                        },
                        //if it is a link then setup it
                        'object': function (element, obj, delimiter, isLast) {
                            var a = angular.element('<a/>'),
                                span = angular.element('<span/>'),
                                text = obj.name;
                            a.addClass('label label-info');
                            a.attr('ui-sref', obj.state || 'dashboard.home');
                            a.text(text);
                            if (!isLast) {
                                span.text(' ' + delimiter + ' ');
                                element.append(a);
                                element.append(span);
                            } else {
                                element.append(a);
                            }
                        }
                    };

                    return {
                        restrict: 'E',
                        replace: true,
                        template: '<div></div>',
                        link: function (scope, element, attrs) {
                            var data = $state.current.data.breadcrumbs || null;
                            if (!data) {
                                return false;
                            }
                            var handle;
                            for (var i = 0; i < data.length; i++) {
                                handle = (typeof data[i]).toLowerCase();
                                if (directiveHandler.hasOwnProperty(handle)) {
                                    directiveHandler[handle](element, data[i], attrs.delimiter || '/', i === data.length - 1);
                                } else {
                                    return false;
                                }
                            }
                            //need to compile element, if you want to have works directives in it
                            $compile(element)(scope);
                        }
                    }
                }]);
    });
