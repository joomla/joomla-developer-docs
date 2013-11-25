'use strict';

/* Filters */

angular.module('JoomlaDevDocs.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]).
  filter('marked', function() {
    return function(input) {
      if (typeof(input) != 'undefined') {
        var out = marked(input);

        return out;
      }
    };
  });
