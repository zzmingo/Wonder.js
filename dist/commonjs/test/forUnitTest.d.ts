/// <reference types="wonder-commonlib" />
/// <reference types="wonder-frp" />
import { DomQuery as DomQueryFromCommonlib } from "wonder-commonlib/dist/commonjs/utils/DomQuery";
import { Operator } from "wonder-frp/dist/commonjs/global/Operator";
import { Map } from "immutable";
export declare var initThreeDTransformData: (GlobalTempData: any, ThreeDTransformData: any) => void;
export declare var DomQuery: typeof DomQueryFromCommonlib;
export declare var fromArray: typeof Operator.fromArray;
export declare var initTagData: (TagData: any) => void;
export declare var initGeometryData: (DataBufferConfig: any, GeometryData: any, GPUDetectData: any) => void;
export declare var initMaterialData: (TextureCacheData: any, TextureData: any, MapManagerData: any, MaterialData: any, BasicMaterialData: any, LightMaterialData: any) => void;
export declare var initWebGL1ShaderData: (ShaderDataFromSystem: any) => void;
export declare var initWebGL2ShaderData: (ShaderDataFromSystem: any) => void;
export declare var initProgramData: (ProgramDataFromSystem: any) => void;
export declare var initWebGL1LocationData: (LocationDataFromSystem: any) => void;
export declare var initWebGL2LocationData: (LocationDataFromSystem: any) => void;
export declare var initWebGL1GLSLSenderData: (GLSLSenderDataFromSystem: any) => void;
export declare var initWebGL2GLSLSenderData: (GLSLSenderDataFromSystem: any) => void;
export declare var initMeshRendererData: (MeshRendererData: any) => void;
export declare var initArrayBufferData: (ArrayBufferDataFromSystemFromSystem: any) => void;
export declare var initIndexBufferData: (IndexBufferDataFromSystem: any) => void;
export declare var initDeviceManagerData: (DeviceManagerDataFromSystem: any) => void;
export declare var initCameraControllerData: (CameraControllerData: any, PerspectiveCameraData: any, CameraData: any) => void;
export declare var initWebGL1LightData: (AmbientLightData: any, DirectionLightData: any, PointLightData: any) => void;
export declare var initWebGL2LightData: (AmbientLightData: any, DirectionLightData: any, PointLightData: any) => void;
export declare var initGameObjectData: (GameObjectData: any) => void;
export declare var initSceneData: (SceneData: any) => void;
export declare var initRenderCommandBufferData: (DataBufferConfig: any, BasicRenderCommandBufferData: any, LightRenderCommandBufferData: any) => void;
export declare var initDrawRenderCommandBufferData: (BasicDrawRenderCommandBufferDataFromSystem: any, LightDrawRenderCommandBufferDataFromSystem: any) => void;
export declare var initSendDrawRenderCommandBufferData: (SendDrawRenderCommandBufferData: any) => void;
export declare var initVaoData: (VaoDataFromSystem: any) => void;
export declare var initDeferLightPassData: (DeferAmbientLightPassDataFromSystem: any, DeferDirectionLightPassDataFromSystem: any, DeferPointLightPassDataFromSystem: any) => void;
export declare var createState: () => Map<{}, {}>;
export declare var useProgram: any;
export declare var sendWebGL1AttributeData: (gl: WebGLRenderingContext, shaderIndex: number, program: WebGLProgram, geometryIndex: number, ProgramData: any, LocationData: any, GLSLSenderData: any, GeometryData: any, ArrayBufferData: any, GPUDetectData: any, VaoData: any) => void;
export declare var disableVertexAttribArray: Function;
export declare var setGeometryIndices: Function;
export declare var setGeometryVertices: Function;
export declare var hasGeometryIndices: any;
export declare var getShaderIndex: (materialIndex: number, MaterialData: any) => any;
export declare var updateSystem: (elapsed: number, state: Map<any, any>) => any;
export declare var getNormalMatrix: Function;
export declare var getWorldToCameraMatrix: (...args: any[]) => any;
