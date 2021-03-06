import { IUIdEntity } from "../../core/entityObject/gameObject/IUIdEntity";
import { Component } from "../Component";
import { MaterialWorkerInitDataList } from "../../renderer/type/dataType";

export class MaterialData {
    public static buffer: SharedArrayBuffer = null;

    public static shaderIndices: Uint32Array = null;
    public static colors: Float32Array = null;
    public static opacities: Float32Array = null;
    public static alphaTests: Float32Array = null;

    public static defaultShaderIndex: number = null;
    public static defaultColorArr: Array<number> = null;
    public static defaultOpacity: number = null;
    public static defaultAlphaTest: number = null;

    public static gameObjectMap: Array<IUIdEntity> = null;

    public static materialMap: Array<Component> = null;

    public static workerInitList: MaterialWorkerInitDataList = null;
}
