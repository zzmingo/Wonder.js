import { initData as initDataUtils } from "../utils/buffer/arrayBufferUtils";
import { getGL } from "../device/DeviceManagerSystem";
import { DeviceManagerData } from "../device/DeviceManagerData";
import { disposeBuffer as disposeBufferUtils } from "../utils/worker/render_file/buffer/bufferUtils";
// import { disposeBuffer as disposeBufferUtils } from "../utils/buffer/bufferUtils";

export var disposeBuffer = (geometryIndex: number, ArrayBufferData: any) => {
    disposeBufferUtils(geometryIndex, ArrayBufferData.vertexBuffers, getGL, DeviceManagerData);
    disposeBufferUtils(geometryIndex, ArrayBufferData.normalBuffers, getGL, DeviceManagerData);
    disposeBufferUtils(geometryIndex, ArrayBufferData.texCoordBuffers, getGL, DeviceManagerData);
}

export var initData = initDataUtils;
