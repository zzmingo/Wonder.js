import { Map } from "immutable";
import { BasicMaterialInitWorkerData, LightMaterialInitWorkerData, MaterialInitWorkerData } from "./MaterialWorkerData";
import { TextureInitWorkerData } from "../../../type/messageDataType";
import { IMaterialConfig } from "../../../data/material_config_interface";
import { IShaderLibGenerator } from "../../../data/shaderLib_generator_interface";
export declare var initMaterials: (state: Map<any, any>, gl: WebGLRenderingContext, material_config: IMaterialConfig, shaderLib_generator: IShaderLibGenerator, initNoMaterialShader: Function, basicMaterialData: BasicMaterialInitWorkerData, lightMaterialData: LightMaterialInitWorkerData, TextureWorkerData: any, AmbientLightWorkerData: any, DirectionLightWorkerData: any, PointLightWorkerData: any, GPUDetectWorkerData: any, GLSLSenderWorkerData: any, ProgramWorkerData: any, VaoWorkerData: any, LocationWorkerData: any, ShaderWorkerData: any) => void;
export declare var initMaterial: (index: number, state: Map<any, any>, className: string) => void;
export declare var initNewInitedMaterials: (workerInitList: {
    index: number;
    className: string;
}[]) => void;
export declare var useShader: (index: number, shaderName: string, state: Map<any, any>, material_config: IMaterialConfig, shaderLib_generator: IShaderLibGenerator, initMaterialShader: Function, initShaderDataMap: {
    GPUDetectDataFromSystem: any;
    DeviceManagerDataFromSystem: any;
    ProgramDataFromSystem: any;
    LocationDataFromSystem: any;
    GLSLSenderDataFromSystem: any;
    ShaderDataFromSystem: any;
    MaterialDataFromSystem: any;
    BasicMaterialDataFromSystem: any;
    LightMaterialDataFromSystem: any;
    MapManagerDataFromSystem: any;
    AmbientLightDataFromSystem: any;
    DirectionLightDataFromSystem: any;
    PointLightDataFromSystem: any;
    VaoDataFromSystem: any;
}) => any;
export declare var getColorArr3: (index: number, DataFromSystem: any) => number[];
export declare var getOpacity: (materialIndex: number, MaterialDataFromSystem: any) => number;
export declare var getAlphaTest: (materialIndex: number, MaterialDataFromSystem: any) => number;
export declare var isTestAlpha: (alphaTest: number) => boolean;
export declare var initData: (materialData: MaterialInitWorkerData, textureData: TextureInitWorkerData, TextureCacheWorkerData: any, TextureWorkerData: any, MapManagerWorkerData: any, MaterialWorkerData: any, BasicMaterialWorkerData: any, LightMaterialWorkerData: any) => void;
