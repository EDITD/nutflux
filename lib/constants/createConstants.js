"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var nutfluxUniqueId = 0;

var NutfluxConstant = (function () {
    function NutfluxConstant(name) {
        _classCallCheck(this, NutfluxConstant);

        nutfluxUniqueId++;
        this.id = nutfluxUniqueId;
        this.name = name;
    }

    _createClass(NutfluxConstant, {
        toString: {
            value: function toString() {
                return this.id + "_" + this.name;
            }
        }
    });

    return NutfluxConstant;
})();

function createConstants() {
    for (var _len = arguments.length, constants = Array(_len), _key = 0; _key < _len; _key++) {
        constants[_key] = arguments[_key];
    }

    var nutfluxConstants = {};

    constants.forEach(function (constant) {
        nutfluxConstants[constant] = new NutfluxConstant(constant);
    });

    return nutfluxConstants;
}

module.exports = createConstants;