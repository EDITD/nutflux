"use strict";

var BaseStore = require("./BaseStore");

const IGNORE_ON_PROTOTYPE = [
    "mixins"
];

function createJoinedFunction(one, two) {
    return function joinedFunction() {
        one.apply(this, arguments);
        two.apply(this, arguments);
    };
}

function mixInto(dest, src) {
    Object.keys(src).forEach(function(key) {
        if (IGNORE_ON_PROTOTYPE.indexOf(key) >= 0) {
            return;
        }

        if (typeof dest[key] === "function" && typeof src[key] === "function") {
            dest[key] = createJoinedFunction(dest[key], src[key])
        } else if (dest.hasOwnProperty(key)) {
            throw new Error("Mixin property collision for property " + key);
        } else {
            dest[key] = src[key];
        }
    });
}

var createStore = function(options) {
    var store;

    class Store extends BaseStore {}

    if (options.mixins) {
        options.mixins.forEach(function(mixin) {
            mixInto(Store.prototype, mixin);
        });
    }

    mixInto(Store.prototype, options);

    store = new Store();
    store.registerWithDispatcher();
    store.initialize();

    return store;
};

module.exports = createStore;