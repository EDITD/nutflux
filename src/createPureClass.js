"use strict";

const React = require("react/addons");
const { PureRenderMixin } = React;

function createPureClass(obj) {
    const mixins = [PureRenderMixin];

    if (obj.mixins) {
        obj.mixins = mixins.concat(obj.mixins);
    } else {
        obj.mixins = mixins;
    }

    return React.createClass(obj);
}

module.exports = createPureClass;