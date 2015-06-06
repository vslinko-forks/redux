'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = connect;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Connector = require('./Connector');

var _Connector2 = _interopRequireDefault(_Connector);

var _utilsGetDisplayName = require('../utils/getDisplayName');

var _utilsGetDisplayName2 = _interopRequireDefault(_utilsGetDisplayName);

var _utilsShallowEqualScalar = require('../utils/shallowEqualScalar');

var _utilsShallowEqualScalar2 = _interopRequireDefault(_utilsShallowEqualScalar);

function connect(select) {
  return function (DecoratedComponent) {
    return (function () {
      function ConnectorDecorator() {
        _classCallCheck(this, ConnectorDecorator);

        this.renderChild = this.renderChild.bind(this);
      }

      _createClass(ConnectorDecorator, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
          return !(0, _utilsShallowEqualScalar2['default'])(this.props, nextProps);
        }
      }, {
        key: 'render',
        value: function render() {
          var _this = this;

          return _react2['default'].createElement(
            _Connector2['default'],
            { select: function (state) {
                return select(state, _this.props);
              } },
            this.renderChild
          );
        }
      }, {
        key: 'renderChild',
        value: function renderChild(state) {
          var props = this.props;

          return _react2['default'].createElement(DecoratedComponent, _extends({}, props, state));
        }
      }], [{
        key: 'displayName',
        value: 'Connector(' + (0, _utilsGetDisplayName2['default'])(DecoratedComponent) + ')',
        enumerable: true
      }]);

      return ConnectorDecorator;
    })();
  };
}

module.exports = exports['default'];