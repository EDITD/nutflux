"use strict";

var AppDispatcher = require("../AppDispatcher")
  , EventEmitter = require("events").EventEmitter;

const CHANGE_EVENT = "change";

class BaseStore extends EventEmitter {

    initialize() {}

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