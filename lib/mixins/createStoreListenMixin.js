"use strict";

function createStoreListenMixin() {
    for (var _len = arguments.length, stores = Array(_len), _key = 0; _key < _len; _key++) {
        stores[_key] = arguments[_key];
    }

    return {
        getInitialState: function getInitialState() {
            return this.getStateFromStores();
        },

        componentDidMount: function componentDidMount() {
            var _this = this;

            stores.forEach(function (store) {
                return store.addChangeListener(_this._onChange);
            });

            this.setState(this.getStateFromStores());
        },

        componentWillUnmount: function componentWillUnmount() {
            var _this = this;

            stores.forEach(function (store) {
                return store.removeChangeListener(_this._onChange);
            });
        },

        _onChange: function _onChange() {
            if (this.isMounted()) {
                this.setState(this.getStateFromStores());
            }
        }
    };
}

module.exports = createStoreListenMixin;