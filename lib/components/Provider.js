'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var dispatcherShape = _react.PropTypes.shape({
  subscribe: _react.PropTypes.func.isRequired,
  perform: _react.PropTypes.func.isRequired
});

var Provider = (function () {
  function Provider() {
    _classCallCheck(this, Provider);

    this.dispatch = this.dispatch.bind(this);
  }

  _createClass(Provider, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { redux: this };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      nextProps.dispatcher.hydrate(this.props.dispatcher.dehydrate());
    }
  }, {
    key: 'subscribe',
    value: function subscribe(listener) {
      return this.props.dispatcher.subscribe(listener);
    }
  }, {
    key: 'dispatch',
    value: function dispatch(action) {
      return this.props.dispatcher.dispatch(action);
    }
  }, {
    key: 'perform',
    value: function perform(actionCreator) {
      var _props$dispatcher;

      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_props$dispatcher = this.props.dispatcher).perform.apply(_props$dispatcher, [actionCreator].concat(args));
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;

      return children();
    }
  }], [{
    key: 'propTypes',
    value: {
      dispatcher: dispatcherShape.isRequired,
      children: _react.PropTypes.func.isRequired
    },
    enumerable: true
  }, {
    key: 'childContextTypes',
    value: {
      redux: dispatcherShape.isRequired
    },
    enumerable: true
  }]);

  return Provider;
})();

exports['default'] = Provider;
module.exports = exports['default'];