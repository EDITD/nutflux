"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var AppDispatcher = require("../AppDispatcher"),
    EventEmitter = require("events").EventEmitter;

var CHANGE_EVENT = "change";

var BaseStore = (function (_EventEmitter) {
    function BaseStore() {
        _classCallCheck(this, BaseStore);

        if (_EventEmitter != null) {
            _EventEmitter.apply(this, arguments);
        }
    }

    _inherits(BaseStore, _EventEmitter);

    _createClass(BaseStore, {
        initialize: {
            value: function initialize() {}
        },
        getState: {
            value: function getState() {
                return this.state;
            }
        },
        resetState: {
            value: function resetState(params) {
                // Used for setting up initial state in stores during tests
                // Assumes there is a _resetState defined, and that the state is
                // an Immutable object.
                this._resetState();
                this.state = this.state.merge(params);
            }
        },
        addChangeListener: {
            value: function addChangeListener(callback) {
                this.on(CHANGE_EVENT, callback);
            }
        },
        removeChangeListener: {
            value: function removeChangeListener(callback) {
                this.removeListener(CHANGE_EVENT, callback);
            }
        },
        emitChange: {
            value: function emitChange() {
                this.emit(CHANGE_EVENT);
            }
        },
        registerWithDispatcher: {
            value: function registerWithDispatcher() {
                this.dispatchToken = AppDispatcher.register((function (action) {
                    if (this.handlers.hasOwnProperty(action.actionType)) {
                        this[this.handlers[action.actionType]](action);
                    }
                }).bind(this));
            }
        }
    });

    return BaseStore;
})(EventEmitter);

module.exports = BaseStore;