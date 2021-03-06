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
import { SpecifyMaterialData } from "./SpecifyMaterialData";
var LightMaterialData = (function (_super) {
    __extends(LightMaterialData, _super);
    function LightMaterialData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LightMaterialData.specularColors = null;
    LightMaterialData.emissionColors = null;
    LightMaterialData.shininess = null;
    LightMaterialData.shadings = null;
    LightMaterialData.lightModels = null;
    LightMaterialData.hasDiffuseMaps = null;
    LightMaterialData.hasSpecularMaps = null;
    LightMaterialData.defaultShininess = null;
    LightMaterialData.defaultShading = null;
    LightMaterialData.defaultLightModel = null;
    LightMaterialData.defaultHasMap = null;
    LightMaterialData.emptyColor = null;
    LightMaterialData.emptyColorArr = null;
    return LightMaterialData;
}(SpecifyMaterialData));
export { LightMaterialData };
//# sourceMappingURL=LightMaterialData.js.map