"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceManagerDataCommon_1 = require("../utils/worker/render_file/device/DeviceManagerDataCommon");
var DeviceManagerData = (function (_super) {
    __extends(DeviceManagerData, _super);
    function DeviceManagerData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceManagerData.webglVersion = null;
    return DeviceManagerData;
}(DeviceManagerDataCommon_1.DeviceManagerDataCommon));
exports.DeviceManagerData = DeviceManagerData;
//# sourceMappingURL=DeviceManagerData.js.map