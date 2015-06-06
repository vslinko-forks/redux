'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

var _react = require('react');

var _lodashUtilityIdentity = require('lodash/utility/identity');

var _lodashUtilityIdentity2 = _interopRequireDefault(_lodashUtilityIdentity);

var _utilsShallowEqual = require('../utils/shallowEqual');

var _utilsShallowEqual2 = _interopRequireDefault(_utilsShallowEqual);

var Connector = (function (_Component) {
  function Connector(props, context) {
    _classCallCheck(this, Connector);

    _get(Object.getPrototypeOf(Connector.prototype), 'constructor', this).call(this, props, context);

    this.handleChange = this.handleChange.bind(this);
    this.unsubscribe = context.redux.subscribe(this.handleChange);
  }

  _inherits(Connector, _Component);

  _createClass(Connector, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !this.isSliceEqual(this.state.slice, nextState.slice) || !(0, _utilsShallowEqual2['default'])(this.props, nextProps);
    }
  }, {
    key: 'isSliceEqual',
    value: function isSliceEqual(slice, nextSlice) {
      var isRefEqual = slice === nextSlice;
      if (isRefEqual) {
        return true;
      } else if (typeof slice !== 'object' || typeof nextSlice !== 'object') {
        return isRefEqual;
      } else {
        return (0, _utilsShallowEqual2['default'])(slice, nextSlice);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(atom) {
      var slice = this.props.select(atom);
      if (this.state) {
        this.setState({ slice: slice });
      } else {
        this.state = { slice: slice };
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var slice = this.state.slice;
      var redux = this.context.redux;

      return children(_extends({
        dispatcher: redux }, slice));
    }
  }], [{
    key: 'contextTypes',
    value: {
      redux: _react.PropTypes.object.isRequired
    },
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      children: _react.PropTypes.func.isRequired,
      select: _react.PropTypes.func.isRequired
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      select: _lodashUtilityIdentity2['default']
    },
    enumerable: true
  }]);

  return Connector;
})(_react.Component);

exports['default'] = Connector;
module.exports = exports['default'];