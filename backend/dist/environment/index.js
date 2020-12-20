"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.NODE_ENV = exports.FRONTEND_PORT = exports.FRONTEND_HOST = exports.BACKEND_PORT = exports.BACKEND_HOST = exports.PRODUCTION = exports.DEVELOPMENT = void 0;
var dotenv = __importStar(require("dotenv"));
dotenv.config();
exports.DEVELOPMENT = "development";
exports.PRODUCTION = "production";
exports.BACKEND_HOST = process.env.BACKEND_HOST || "http://localhost";
exports.BACKEND_PORT = process.env.BACKEND_PORT || 3050;
exports.FRONTEND_HOST = process.env.FRONTEND_HOST || "http://localhost";
exports.FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;
exports.NODE_ENV = process.env.NODE_ENV || exports.DEVELOPMENT;
//# sourceMappingURL=index.js.map