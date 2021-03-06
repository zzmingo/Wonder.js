export class TransformData{
    public static of() {
        var obj = new this();

        obj.initWhenCreate();

        return obj;
    }

    // get count(){
    //     return DataBufferConfig.transformDataBufferCount;
    // }

    public positions:Float32Array = null;
    public length:number = null;
    public buffer:SharedArrayBuffer = null;

    public initWhenCreate(){
        var count = COUNT;

        this.length = Float32Array.BYTES_PER_ELEMENT * 1;
        // this._buffer = new ArrayBuffer(count * this.length);
        this.buffer = new SharedArrayBuffer(count * this.length);

        this.positions = new Float32Array(<any>this.buffer, 0, count);
    }
}

const COUNT = 10;
