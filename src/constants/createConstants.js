"use strict";

var FluxConstant = require("flux-constant");

function createConstants(...constants) {
    return FluxConstant.set(constants);
}

module.exports = createConstants;