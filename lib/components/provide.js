'use strict';

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$defineProperty = require('babel-runtime/core-js/object/define-property')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

_Object$defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = provide;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Provider = require('./Provider');

var _Provider2 = _interopRequireDefault(_Provider);

var _utilsGetDisplayName = require('../utils/getDisplayName');

var _utilsGetDisplayName2 = _interopRequireDefault(_utilsGetDisplayName);

function provide(store) {
  return function (DecoratedComponent) {
    return (function () {
      function ProviderDecorator() {
        _classCallCheck(this, ProviderDecorator);
      }

      _createClass(ProviderDecorator, [{
        key: 'render',
        value: function render() {
          var _this = this;

          return _react2['default'].createElement(
            _Provider2['default'],
            { store: store },
            function (props) {
              return _react2['default'].createElement(DecoratedComponent, _extends({}, _this.props, props));
            }
          );
        }
      }], [{
        key: 'displayName',
        value: 'Provider(' + (0, _utilsGetDisplayName2['default'])(DecoratedComponent) + ')',
        enumerable: true
      }]);

      return ProviderDecorator;
    })();
  };
}

module.exports = exports['default'];