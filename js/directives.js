'use strict';

/* Directives */


angular.module('JoomlaDevDocs.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
