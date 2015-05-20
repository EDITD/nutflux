"use strict";

var AppDispatcher = require("../AppDispatcher")
  , EventEmitter = require("events").EventEmitter;

const CHANGE_EVENT = "change";

class BaseStore extends EventEmitter {

    initialize() {}

    getState() {
        return this.state;
    }

    resetState(params) {
        // Used for setting up initial state in stores during tests
        // Assumes there is a _resetState defined, and that the state is
        // an Immutable object.
        this._resetState();
        this.state = this.state.merge(params);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    registerWithDispatcher() {
        this.dispatchToken = AppDispatcher.register(function(action) {
            if (this.handlers.hasOwnProperty(action.actionType)) {
                this[this.handlers[action.actionType]](action);
            }
        }.bind(this));
    }
}

module.exports = BaseStore;