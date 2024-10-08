"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = __importDefault(require("../config/db"));
var dataupdateformat_1 = __importDefault(require("../lib/dataupdateformat"));
var Crud = /** @class */ (function () {
    function Crud(tableName) {
        this.connection = db_1.default;
        this.tableName = tableName;
    }
    Crud.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result, columns, values;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(data)) return [3 /*break*/, 2];
                        columns = Object.keys(data[0]);
                        values = data.map(function (item) { return "(".concat(Object.values(item).map(function (value) { return "'".concat(value, "'"); }).join(', '), ")"); }).join(', ');
                        query = "INSERT INTO ".concat(this.tableName, " (").concat(columns.join(', '), ") VALUES ").concat(values);
                        return [4 /*yield*/, this.connection.query(query)];
                    case 1:
                        result = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        query = "INSERT INTO ".concat(this.tableName, " SET ?");
                        return [4 /*yield*/, this.connection.query(query, data)];
                    case 3:
                        result = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
    Crud.prototype.read = function (filed) {
        if (typeof filed === 'string') {
            this.query = "SELECT ".concat(filed, " FROM ").concat(this.tableName);
        }
        else {
            var fileds = filed.join(', ');
            this.query = "SELECT ".concat(fileds, " FROM ").concat(this.tableName);
        }
        return this;
    };
    Crud.prototype.join = function (table) {
        this.query += " JOIN ".concat(table);
        return this;
    };
    Crud.prototype.leftJoin = function (table) {
        this.query += " LEFT JOIN ".concat(table);
        return this;
    };
    Crud.prototype.rightJoin = function (table) {
        this.query += " RIGHT JOIN ".concat(table);
        return this;
    };
    Crud.prototype.on = function (field, operator, value) {
        this.query += " ON ".concat(field, " ").concat(operator, " ").concat(value);
        return this;
    };
    Crud.prototype.where = function (field, operator, value) {
        var query = this.query += " WHERE ".concat(field, " ").concat(operator, " ?");
        this.connection.query(query, value);
        return this;
    };
    Crud.prototype.groupBy = function (field) {
        this.query += " GROUP BY ".concat(field);
        return this;
    };
    Crud.prototype.asc = function (field) {
        this.query += " ORDER BY ".concat(field, " ASC");
        return this;
    };
    Crud.prototype.desc = function (field) {
        this.query += " ORDER BY ".concat(field, " DESC");
        return this;
    };
    Crud.prototype.get = function () {
        return this.connection.query(this.query);
    };
    Crud.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = "DELETE FROM ".concat(this.tableName, " WHERE id = ?");
                        return [4 /*yield*/, this.connection.query(query, [id])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Crud.prototype.updateById = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var dataUpdate, query, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dataUpdate = (0, dataupdateformat_1.default)(data);
                        query = "UPDATE ".concat(this.tableName, " SET ").concat(dataUpdate, " WHERE id = ?");
                        return [4 /*yield*/, this.connection.query(query, [id])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    return Crud;
}());
exports.default = Crud;
//# sourceMappingURL=crud.js.map