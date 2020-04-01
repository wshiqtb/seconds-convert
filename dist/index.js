(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.secondsConvert = factory());
}(this, (function () { 'use strict';

  function index (number, options) {
    var conf = [{
      key: 'milliseconds',
      mod: 1000
    }, {
      key: 'seconds',
      mod: 60
    }, {
      key: 'minutes',
      mod: 60
    }, {
      key: 'hours',
      mod: 24
    }, {
      key: 'days',
      mod: 30
    }];
    var defaultOptions = {
      unit: 'sec',
      tag: 'days'
    };

    if (isNaN(number)) {
      throw new TypeError('Value sent to seconds-converter must be a number.');
    }

    if (!options) {
      options = defaultOptions;
    } else if (typeof options === 'string') {
      var _options = defaultOptions;
      _options.unit = options;
      options = _options;
    } else if (!options.unit) {
      options.unit = defaultOptions.unit;
    } else if (!options.tag) {
      options.tag = defaultOptions.tag;
    }

    var unit = options.unit,
        tag = options.tag,
        ms = 0,
        result = {};

    if (unit === 'sec' || unit === 'seconds') {
      ms = number * 1000;
    } else if (unit === 'ms' || unit === 'milliseconds') {
      ms = number;
    } else {
      throw new TypeError('Unit must be sec or ms');
    }

    for (var i = 0; i < conf.length; i++) {
      var confKey = conf[i].key;
      var mod = conf[i].mod;

      if (confKey === tag) {
        result[confKey] = ms;
        break;
      } else {
        result[confKey] = ms % mod;
      }

      ms = Math.floor(ms / mod);
    }

    return result;
  }

  return index;

})));
