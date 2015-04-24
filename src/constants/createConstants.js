"use strict";

var nutfluxUniqueId = 0;

class NutfluxConstant {

    constructor(name) {
        nutfluxUniqueId++;
        this.id = nutfluxUniqueId;
        this.name = name;
    }

    toString() {
        return this.id + "_" + this.name;
    }
}

function createConstants(...constants) {
    var nutfluxConstants = {};

    constants.forEach((constant) => {
        nutfluxConstants[constant] = new NutfluxConstant(constant);
    });

    return nutfluxConstants;
}

module.exports = createConstants;