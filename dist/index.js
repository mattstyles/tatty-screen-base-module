"format register";

System.register("index", [], function($__export) {
  "use strict";
  var __moduleName = "index";
  return {
    setters: [],
    execute: function() {
      $__export('default', (function() {
        var screenBaseModule = function screenBaseModule() {
          var name = arguments[0] !== (void 0) ? arguments[0] : 'BaseModule';
          this.name = name;
        };
        return ($traceurRuntime.createClass)(screenBaseModule, {
          init: function() {},
          expose: function() {
            return {};
          }
        }, {});
      }()));
    }
  };
});
