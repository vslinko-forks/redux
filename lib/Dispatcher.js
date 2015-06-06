'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

function _dispatch(store, atom, action) {
  return store(atom, action);
}

var Dispatcher = (function () {
  function Dispatcher(store) {
    _classCallCheck(this, Dispatcher);

    this.perform = this.perform.bind(this);
    this.store = store;
    this.hydrate();
  }

  _createClass(Dispatcher, [{
    key: 'hydrate',
    value: function hydrate() {
      var _ref = arguments[0] === undefined ? {} : arguments[0];

      var atom = _ref.atom;
      var _ref$subscriptions = _ref.subscriptions;
      var subscriptions = _ref$subscriptions === undefined ? [] : _ref$subscriptions;

      this.atom = atom;
      this.subscriptions = subscriptions;
      this.dispatch({});
    }
  }, {
    key: 'dehydrate',
    value: function dehydrate() {
      var atom = this.atom;
      var subscriptions = this.subscriptions;

      delete this.atom;
      this.subscriptions = [];
      return { atom: atom, subscriptions: subscriptions };
    }
  }, {
    key: 'dispatch',
    value: function dispatch(action) {
      var nextAtom = _dispatch(this.store, this.atom, action);
      this.setAtom(nextAtom);
    }
  }, {
    key: 'perform',
    value: function perform(action) {
      return typeof action === 'function' ? action(this.perform, this.atom) : this.dispatch(action);
    }
  }, {
    key: 'setAtom',
    value: function setAtom(atom) {
      this.atom = atom;
      this.emitChange();
    }
  }, {
    key: 'subscribe',
    value: function subscribe(listener) {
      var _this = this;

      this.subscriptions.push(listener);
      listener(this.atom);

      return function () {
        var index = _this.subscriptions.indexOf(listener);
        _this.subscriptions.splice(index, 1);
      };
    }
  }, {
    key: 'emitChange',
    value: function emitChange() {
      var atom = this.atom;
      var subscriptions = this.subscriptions;

      subscriptions.forEach(function (listener) {
        return listener(atom);
      });
    }
  }]);

  return Dispatcher;
})();

exports['default'] = Dispatcher;
module.exports = exports['default'];