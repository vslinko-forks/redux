'use strict';

var _bind = require('babel-runtime/helpers/bind')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = createDispatcher;

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

function createDispatcher() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var dispatcher = new (_bind.apply(_Dispatcher2['default'], [null].concat(args)))();

  return {
    subscribe: dispatcher.subscribe.bind(dispatcher),
    perform: dispatcher.perform.bind(dispatcher),
    hydrate: dispatcher.hydrate.bind(dispatcher),
    dehydrate: dispatcher.dehydrate.bind(dispatcher) };
}

module.exports = exports['default'];