'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/rishi/repos/conchain-payment/pages/campaigns/requests/new.js?entry';


var RequestNew = function (_Component) {
  (0, _inherits3.default)(RequestNew, _Component);

  function RequestNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, RequestNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      value: '',
      description: '',
      recipient: '',
      loading: false,
      errorMessage: ''
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var campaign, _this$state, description, value, recipient, accounts;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();

                campaign = (0, _campaign2.default)(_this.props.address);
                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                _this.setState({ loading: true, errorMessage: '' });

                _context.prev = 4;
                _context.next = 7;
                return _web2.default.eth.getAccounts();

              case 7:
                accounts = _context.sent;
                _context.next = 10;
                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, 'ether'), recipient).send({ from: accounts[0] });

              case 10:

                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/requests');
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](4);

                _this.setState({ errorMessage: _context.t0.message });

              case 16:

                _this.setState({ loading: false });

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[4, 13]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(RequestNew, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, 'Back')), _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, 'Create a Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, 'Description'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.description,
        onChange: function onChange(event) {
          return _this3.setState({ description: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, 'Value in Ether'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.value,
        onChange: function onChange(event) {
          return _this3.setState({ value: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      })), _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, 'Recipient'), _react2.default.createElement(_semanticUiReact.Input, {
        value: this.state.recipient,
        onChange: function onChange(event) {
          return _this3.setState({ recipient: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, 'Create!')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var address;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                address = props.query.address;
                return _context2.abrupt('return', { address: address });

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdE5ldyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsIl9yZWYyIiwibWFyayIsIl9jYWxsZWUiLCJldmVudCIsImNhbXBhaWduIiwiX3RoaXMkc3RhdGUiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImVycm9yIiwiRmllbGQiLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5IiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInF1ZXJ5IiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIiwiX3gyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFD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VCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUIsZUFBT1AsTUFBTXRELEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT21FLGVBQVA7QUFDRCxLQXZCTTtBQUZKLEdBQUQsQ0F4Sko7O0FBb0xBLFNBQU8zRSxVQUFQO0FBQ0QsQ0FqUWdCLGtCQUFqQjs7a0JBbVFlQSxVIiwiZmlsZSI6InVua25vd24iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgX3JlZ2VuZXJhdG9yUnVudGltZSBmcm9tICdiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yJztcbmltcG9ydCBfYXN5bmNUb0dlbmVyYXRvciBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvcic7XG5pbXBvcnQgX09iamVjdCRnZXRQcm90b3R5cGVPZiBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2dldC1wcm90b3R5cGUtb2YnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbnZhciBfanN4RmlsZU5hbWUgPSAnL1VzZXJzL3Jpc2hpL3JlcG9zL2NvbmNoYWluLXBheW1lbnQvcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL25ldy5qcz9lbnRyeSc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBNZXNzYWdlLCBJbnB1dCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBDYW1wYWlnbiBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS9jYW1wYWlnbic7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi8uLi9ldGhlcmV1bS93ZWIzJztcbmltcG9ydCB7IExpbmssIFJvdXRlciB9IGZyb20gJy4uLy4uLy4uL3JvdXRlcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxudmFyIFJlcXVlc3ROZXcgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoUmVxdWVzdE5ldywgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUmVxdWVzdE5ldygpIHtcbiAgICB2YXIgX3JlZixcbiAgICAgICAgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUmVxdWVzdE5ldyk7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JldCA9IChfdGVtcCA9IChfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChfcmVmID0gUmVxdWVzdE5ldy5fX3Byb3RvX18gfHwgX09iamVjdCRnZXRQcm90b3R5cGVPZihSZXF1ZXN0TmV3KSkuY2FsbC5hcHBseShfcmVmLCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogJycsXG4gICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICByZWNpcGllbnQ6ICcnLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBlcnJvck1lc3NhZ2U6ICcnXG4gICAgfSwgX3RoaXMub25TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3JlZjIgPSBfYXN5bmNUb0dlbmVyYXRvciggLyojX19QVVJFX18qL19yZWdlbmVyYXRvclJ1bnRpbWUubWFyayhmdW5jdGlvbiBfY2FsbGVlKGV2ZW50KSB7XG4gICAgICAgIHZhciBjYW1wYWlnbiwgX3RoaXMkc3RhdGUsIGRlc2NyaXB0aW9uLCB2YWx1ZSwgcmVjaXBpZW50LCBhY2NvdW50cztcblxuICAgICAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjYW1wYWlnbiA9IENhbXBhaWduKF90aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIF90aGlzJHN0YXRlID0gX3RoaXMuc3RhdGUsIGRlc2NyaXB0aW9uID0gX3RoaXMkc3RhdGUuZGVzY3JpcHRpb24sIHZhbHVlID0gX3RoaXMkc3RhdGUudmFsdWUsIHJlY2lwaWVudCA9IF90aGlzJHN0YXRlLnJlY2lwaWVudDtcblxuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuXG4gICAgICAgICAgICAgICAgX2NvbnRleHQucHJldiA9IDQ7XG4gICAgICAgICAgICAgICAgX2NvbnRleHQubmV4dCA9IDc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG5cbiAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGFjY291bnRzID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICAgICAgICBfY29udGV4dC5uZXh0ID0gMTA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMuY3JlYXRlUmVxdWVzdChkZXNjcmlwdGlvbiwgd2ViMy51dGlscy50b1dlaSh2YWx1ZSwgJ2V0aGVyJyksIHJlY2lwaWVudCkuc2VuZCh7IGZyb206IGFjY291bnRzWzBdIH0pO1xuXG4gICAgICAgICAgICAgIGNhc2UgMTA6XG5cbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaFJvdXRlKCcvY2FtcGFpZ25zLycgKyBfdGhpcy5wcm9wcy5hZGRyZXNzICsgJy9yZXF1ZXN0cycpO1xuICAgICAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxNjtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlIDEzOlxuICAgICAgICAgICAgICAgIF9jb250ZXh0LnByZXYgPSAxMztcbiAgICAgICAgICAgICAgICBfY29udGV4dC50MCA9IF9jb250ZXh0WydjYXRjaCddKDQpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0U3RhdGUoeyBlcnJvck1lc3NhZ2U6IF9jb250ZXh0LnQwLm1lc3NhZ2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNjpcblxuICAgICAgICAgICAgICAgIF90aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAxNzpcbiAgICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZSwgX3RoaXMyLCBbWzQsIDEzXV0pO1xuICAgICAgfSkpO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKF94KSB7XG4gICAgICAgIHJldHVybiBfcmVmMi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICB9KCksIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFJlcXVlc3ROZXcsIFt7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBMYXlvdXQsXG4gICAgICAgIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ3XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIExpbmssXG4gICAgICAgICAgeyByb3V0ZTogJy9jYW1wYWlnbnMvJyArIHRoaXMucHJvcHMuYWRkcmVzcyArICcvcmVxdWVzdHMnLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA0OFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdhJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ5XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnQmFjaydcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2gzJyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1MVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0NyZWF0ZSBhIFJlcXVlc3QnXG4gICAgICAgICksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgRm9ybSxcbiAgICAgICAgICB7IG9uU3VibWl0OiB0aGlzLm9uU3VibWl0LCBlcnJvcjogISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNTJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBGb3JtLkZpZWxkLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNTNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdsYWJlbCcsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAnRGVzY3JpcHRpb24nXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChJbnB1dCwge1xuICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdGF0ZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA1NVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEZvcm0uRmllbGQsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA2MlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNjNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdWYWx1ZSBpbiBFdGhlcidcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnZhbHVlLFxuICAgICAgICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDY0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgRm9ybS5GaWVsZCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDcwXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3MVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ1JlY2lwaWVudCdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KElucHV0LCB7XG4gICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLnJlY2lwaWVudCxcbiAgICAgICAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5zZXRTdGF0ZSh7IHJlY2lwaWVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZSwgeyBlcnJvcjogdHJ1ZSwgaGVhZGVyOiAnT29wcyEnLCBjb250ZW50OiB0aGlzLnN0YXRlLmVycm9yTWVzc2FnZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNzlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgICAgeyBwcmltYXJ5OiB0cnVlLCBsb2FkaW5nOiB0aGlzLnN0YXRlLmxvYWRpbmcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4MFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ0NyZWF0ZSEnXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAnZ2V0SW5pdGlhbFByb3BzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIF9yZWYzID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIocHJvcHMpIHtcbiAgICAgICAgdmFyIGFkZHJlc3M7XG4gICAgICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jb250ZXh0Mi5wcmV2ID0gX2NvbnRleHQyLm5leHQpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIGFkZHJlc3MgPSBwcm9wcy5xdWVyeS5hZGRyZXNzO1xuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuYWJydXB0KCdyZXR1cm4nLCB7IGFkZHJlc3M6IGFkZHJlc3MgfSk7XG5cbiAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgX2NhbGxlZTIsIHRoaXMpO1xuICAgICAgfSkpO1xuXG4gICAgICBmdW5jdGlvbiBnZXRJbml0aWFsUHJvcHMoX3gyKSB7XG4gICAgICAgIHJldHVybiBfcmVmMy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZ2V0SW5pdGlhbFByb3BzO1xuICAgIH0oKVxuICB9XSk7XG5cbiAgcmV0dXJuIFJlcXVlc3ROZXc7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3ROZXc7Il19
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVua25vd24iXSwibmFtZXMiOlsiX2pzeEZpbGVOYW1lIiwiUmVxdWVzdE5ldyIsIl9Db21wb25lbnQiLCJfcmVmIiwiX3RoaXMyIiwiX3RlbXAiLCJfdGhpcyIsIl9yZXQiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9fcHJvdG9fXyIsImNhbGwiLCJhcHBseSIsImNvbmNhdCIsInN0YXRlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsInJlY2lwaWVudCIsImxvYWRpbmciLCJlcnJvck1lc3NhZ2UiLCJvblN1Ym1pdCIsIl9yZWYyIiwibWFyayIsIl9jYWxsZWUiLCJldmVudCIsImNhbXBhaWduIiwiX3RoaXMkc3RhdGUiLCJhY2NvdW50cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJzZW50IiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJ0MCIsIm1lc3NhZ2UiLCJzdG9wIiwiX3giLCJrZXkiLCJyZW5kZXIiLCJfdGhpczMiLCJjcmVhdGVFbGVtZW50IiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJyb3V0ZSIsImVycm9yIiwiRmllbGQiLCJvbkNoYW5nZSIsInRhcmdldCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5IiwiX3JlZjMiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInF1ZXJ5IiwiYWJydXB0IiwiZ2V0SW5pdGlhbFByb3BzIiwiX3gyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFD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RSxnQkFBTUgsYUFBTiwyQkFBNkIsRUFBRUssT0FBTyxJQUFULEVBQWVJLFFBQVEsT0FBdkIsRUFBZ0NDLFNBQVMsS0FBS2xELEtBQUwsQ0FBV0ssWUFBcEQsRUFBa0VvQyxVQUFVO0FBQ3JHQyxvQkFBVTVELFlBRDJGO0FBRXJHNkQsc0JBQVk7QUFGeUY7QUFBNUUsT0FBN0IsQ0E5RkYsRUFtR0UsZ0JBQU1ILGFBQU4sMEJBRUUsRUFBRVcsU0FBUyxJQUFYLEVBQWlCL0MsU0FBUyxLQUFLSixLQUFMLENBQVdJLE9BQXJDLEVBQThDcUMsVUFBVTtBQUNwREMsb0JBQVU1RCxZQUQwQztBQUVwRDZELHNCQUFZO0FBRndDO0FBQXhELE9BRkYsRUFPRSxTQVBGLENBbkdGLENBcENLLENBQVA7QUFrSkQ7QUF2SnVCLEdBQUQsQ0FBekIsRUF3SkksQ0FBQztBQUNITixTQUFLLGlCQURGO0FBRUhwQyxXQUFPLFlBQVk7QUFDakIsVUFBSW1ELFFBQVEsaUNBQW1CLGFBQWEsc0JBQW9CNUMsSUFBcEIsQ0FBeUIsU0FBUzZDLFFBQVQsQ0FBa0JqQyxLQUFsQixFQUF5QjtBQUM1RixZQUFJQyxPQUFKO0FBQ0EsZUFBTyxzQkFBb0JQLElBQXBCLENBQXlCLFNBQVN3QyxTQUFULENBQW1CQyxTQUFuQixFQUE4QjtBQUM1RCxpQkFBTyxDQUFQLEVBQVU7QUFDUixvQkFBUUEsVUFBVXRDLElBQVYsR0FBaUJzQyxVQUFVckMsSUFBbkM7QUFDRSxtQkFBSyxDQUFMO0FBQ0VHLDBCQUFVRCxNQUFNb0MsS0FBTixDQUFZbkMsT0FBdEI7QUFDQSx1QkFBT2tDLFVBQVVFLE1BQVYsQ0FBaUIsUUFBakIsRUFBMkIsRUFBRXBDLFNBQVNBLE9BQVgsRUFBM0IsQ0FBUDs7QUFFRixtQkFBSyxDQUFMO0FBQ0EsbUJBQUssS0FBTDtBQUNFLHVCQUFPa0MsVUFBVXBCLElBQVYsRUFBUDtBQVBKO0FBU0Q7QUFDRixTQVpNLEVBWUprQixRQVpJLEVBWU0sSUFaTixDQUFQO0FBYUQsT0FmMkMsQ0FBaEMsQ0FBWjs7QUFpQkEsZUFBU0ssZUFBVCxDQUF5QkMsR0FBekIsRUFBOEI7QUFDNUIsZUFBT1AsTUFBTXRELEtBQU4sQ0FBWSxJQUFaLEVBQWtCUCxTQUFsQixDQUFQO0FBQ0Q7O0FBRUQsYUFBT21FLGVBQVA7QUFDRCxLQXZCTTtBQUZKLEdBQUQsQ0F4Sko7O0FBb0xBLFNBQU8zRSxVQUFQO0FBQ0QsQ0FqUWdCLGtCQUFqQjs7a0JBbVFlQSxVIiwiZmlsZSI6InVua25vd24ifQ==