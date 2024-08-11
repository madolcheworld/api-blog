"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = dataUpdateFormat;
function dataUpdateFormat(data) {
    var str = Object.entries(data).map(function (_a) {
        var key = _a[0], value = _a[1];
        return "".concat(key, " = '").concat(value, "'");
    }).join(', ');
    return str;
}
//# sourceMappingURL=dataupdateformat.js.map