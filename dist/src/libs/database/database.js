"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
exports.getENV = getENV;
var connection = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};
exports.connection = connection;
function getENV() {
    return {
        DB_HOST: process.env.DB_HOST,
        DB_USER: process.env.DB_USER,
        DB_PASSWORD: process.env.DB_PASSWORD,
        DB_NAME: process.env.DB_NAME
    };
}
//# sourceMappingURL=database.js.map