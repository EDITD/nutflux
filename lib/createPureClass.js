"use strict";

var React = require("react/addons");
var PureRenderMixin = React.PureRenderMixin;

function createPureClass(obj) {
    var mixins = [PureRenderMixin];

    if (obj.mixins) {
        obj.mixins = mixins.concat(obj.mixins);
    } else {
        obj.mixins = mixins;
    }

    return React.createClass(obj);
}

module.exports = createPureClass;