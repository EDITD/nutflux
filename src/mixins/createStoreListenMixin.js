"use strict";

function createStoreListenMixin(...stores) {
    return {
        getInitialState() {
            return this.getStateFromStores();
        },

        componentDidMount() {
            stores.forEach(store =>
                store.addChangeListener(this._onChange)
            );

            this.setState(this.getStateFromStores());
        },

        componentWillUnmount() {
            stores.forEach(store =>
                store.removeChangeListener(this._onChange)
            );
        },

        _onChange() {
            if (this.isMounted()) {
                this.setState(this.getStateFromStores());
            }
        }
    };
}

module.exports= createStoreListenMixin;