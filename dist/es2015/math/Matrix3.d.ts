import { Vector2 } from "./Vector2";
export declare class Matrix3 {
    static create(mat: Float32Array): Matrix3;
    static create(): Matrix3;
    constructor(mat: Float32Array);
    constructor();
    a: number;
    c: number;
    b: number;
    d: number;
    tx: number;
    ty: number;
    values: Float32Array;
    setIdentity(): Matrix3;
    invert(): Matrix3;
    multiplyScalar(s: number): this;
    multiplyVector2(vector: Vector2): Vector2;
    multiplyPoint(vector: Vector2): Vector2;
    multiply(matrix: Matrix3): this;
    transpose(): Matrix3;
    clone(): Matrix3;
    cloneToArray(array: Float32Array, offset?: number): Matrix3;
    set(matrix: Matrix3): this;
    setTS(t: Vector2, s: Vector2): void;
    rotate(angle: number): this;
    setRotation(angle: number): this;
    translate(x: number, y: number): void;
    setPosition(x: number, y: number): void;
    scale(x: number, y: number): this;
    setScale(x: number, y: number): this;
    getTranslation(): Vector2;
    getScale(): Vector2;
    getRotation(): number;
    getSkew(): Vector2;
    private _getDeltaTransformPoint(matrix, point);
    private _getSkewX();
    private _getSkewY();
}
