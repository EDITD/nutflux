"use strict";

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var BaseStore = require("./BaseStore");

var IGNORE_ON_PROTOTYPE = ["mixins"];

function mixInto(dest, src) {
    Object.keys(src).forEach(function (key) {
        if (IGNORE_ON_PROTOTYPE.indexOf(key) >= 0) {
            return;
        }

        if (dest.hasOwnProperty(key)) {
            throw new Error("Mixin property collision for property " + key);
        }

        dest[key] = src[key];
    });
}

var createStore = function createStore(options) {
    var store;

    var Store = (function (_BaseStore) {
        function Store() {
            _classCallCheck(this, Store);

            if (_BaseStore != null) {
                _BaseStore.apply(this, arguments);
            }
        }

        _inherits(Store, _BaseStore);

        return Store;
    })(BaseStore);

    if (options.mixins) {
        options.mixins.forEach(function (mixin) {
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