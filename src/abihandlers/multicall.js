"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        while (_) try {
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
exports.BaseMulticallHandler = void 0;
var fake_tx_data_1 = require("../fake-tx-data");
var abihandler_1 = __importDefault(require("../abihandler"));
function isTheSameAddress(address1, address2) {
    return address1.toLowerCase() === address2.toLowerCase();
}
var BaseMulticallHandler = /** @class */ (function (_super) {
    __extends(BaseMulticallHandler, _super);
    function BaseMulticallHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.methods = {
            tryBlockAndAggregate: function (context, decodedInput) {
                return __awaiter(this, void 0, void 0, function () {
                    var _requireSuccess, calls, results, _i, calls_1, call, callAddress, callInput, _a, _b, _c, contractAddress;
                    return __generator(this, function (_d) {
                        switch (_d.label) {
                            case 0:
                                _requireSuccess = decodedInput[0], calls = decodedInput[1];
                                results = [];
                                _i = 0, calls_1 = calls;
                                _d.label = 1;
                            case 1:
                                if (!(_i < calls_1.length)) return [3 /*break*/, 6];
                                call = calls_1[_i];
                                callAddress = call[0], callInput = call[1];
                                _a = [];
                                for (_b in context.handlers)
                                    _a.push(_b);
                                _c = 0;
                                _d.label = 2;
                            case 2:
                                if (!(_c < _a.length)) return [3 /*break*/, 5];
                                contractAddress = _a[_c];
                                if (!isTheSameAddress(contractAddress, callAddress)) return [3 /*break*/, 4];
                                return [4 /*yield*/, context.handlers[contractAddress].handleCall(context, callInput, function (r) { return results.push([true, r]); })];
                            case 3:
                                _d.sent();
                                _d.label = 4;
                            case 4:
                                _c++;
                                return [3 /*break*/, 2];
                            case 5:
                                _i++;
                                return [3 /*break*/, 1];
                            case 6: return [2 /*return*/, [0, fake_tx_data_1.FAKE_BLOCK_HASH, results]];
                        }
                    });
                });
            },
        };
        return _this;
    }
    return BaseMulticallHandler;
}(abihandler_1.default));
exports.BaseMulticallHandler = BaseMulticallHandler;
