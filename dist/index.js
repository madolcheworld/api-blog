"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var user_router_1 = __importDefault(require("./router/user-router"));
var user_validation_1 = require("./validation/user-validation");
var app = (0, express_1.default)();
var port = 3000;
app.use(express_1.default.json());
app.use('/users', user_router_1.default);
app.get('/test', function (req, res) {
    var data = {
        nama: 1,
        username: 1,
        password: 2
    };
    var error = user_validation_1.userSchema.validate(data).error;
    if (error) {
        return res.status(400).json(error.message);
    }
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:".concat(port));
});
//# sourceMappingURL=index.js.map