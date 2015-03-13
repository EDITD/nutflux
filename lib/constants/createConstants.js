"use strict";

var FluxConstant = require("flux-constant");

function createConstants() {
    for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
        constants[_key] = arguments[_key];
    }

    return FluxConstant.set(constants);
}

module.exports = createConstants;