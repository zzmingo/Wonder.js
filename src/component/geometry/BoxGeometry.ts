/// <reference path="../../definitions.d.ts"/>
module dy{
    export class BoxGeometry extends Geometry{
        public static create(){
            var geom = new this();

            return geom;
        }

        public width:number = null;
        public height:number = null;
        public depth:number = null;
        public widthSegments:number = 1;
        public heightSegments:number = 1;
        public depthSegments:number = 1;

        public init() {
            this._data = this._computeData(this.width, this.height, this.depth, this.widthSegments, this.heightSegments, this.depthSegments);

            super.init();
        }

        private _data:{
            vertices;
            indices;
            texCoords;
            normals;
        } = null;

        private _computeData(width, height, depth, widthSegments, heightSegments, depthSegments){
            var sides = {
                FRONT  : 0,
                BACK   : 1,
                TOP    : 2,
                BOTTOM : 3,
                RIGHT  : 4,
                LEFT   : 5
            };
            var faceAxes = [
                [ 0, 1, 3 ], // FRONT
                [ 4, 5, 7 ], // BACK
                [ 3, 2, 6 ], // TOP
                [ 1, 0, 4 ], // BOTTOM
                [ 1, 4, 2 ], // RIGHT
                [ 5, 0, 6 ]  // LEFT
            ];

            var faceNormals = [
                [  0,  0,  1 ], // FRONT
                [  0,  0, -1 ], // BACK
                [  0,  1,  0 ], // TOP
                [  0, -1,  0 ], // BOTTOM
                [  1,  0,  0 ], // RIGHT
                [ -1,  0,  0 ]  // LEFT
            ];
            var corners = [
                Vector3.create(-width, -height, depth),
                Vector3.create( width, -height, depth),
                Vector3.create( width,  height, depth),
                Vector3.create(-width,  height, depth),
                Vector3.create( width, -height, -depth),
                Vector3.create(-width, -height, -depth),
                Vector3.create(-width,  height, -depth),
                Vector3.create( width,  height, -depth)
            ];

            var positions = [];
            var normals = [];
            var uvs = [];
            var indices = [];

            function generateFace(side, uSegments, vSegments) {
                var x, y, z, u, v;
                var i, j;
                var offset = positions.length / 3;

                for (i = 0; i <= uSegments; i++) {
                    for (j = 0; j <= vSegments; j++) {
                        var temp1 = Vector3.create();
                        var temp2 = Vector3.create();
                        var temp3 = Vector3.create();
                        var r = Vector3.create();
                        temp1.lerp(corners[faceAxes[side][0]], corners[faceAxes[side][1]], i / uSegments);
                        temp2.lerp(corners[faceAxes[side][0]], corners[faceAxes[side][2]], j / vSegments);
                        temp3.sub2(temp2, corners[faceAxes[side][0]]);
                        r.add2(temp1, temp3);
                        u = i / uSegments;
                        v = j / vSegments;

                        positions.push(r.x, r.y, r.z);
                        normals.push(faceNormals[side][0], faceNormals[side][1], faceNormals[side][2]);
                        uvs.push(u, v);

                        if ((i < uSegments) && (j < vSegments)) {
                            indices.push(offset + j + i * (uSegments + 1),       offset + j + (i + 1) * (uSegments + 1),     offset + j + i * (uSegments + 1) + 1);
                            indices.push(offset + j + (i + 1) * (uSegments + 1), offset + j + (i + 1) * (uSegments + 1) + 1, offset + j + i * (uSegments + 1) + 1);
                        }
                    }
                }
            }

            generateFace(sides.FRONT, widthSegments, heightSegments);
            generateFace(sides.BACK, widthSegments, heightSegments);
            generateFace(sides.TOP, widthSegments, depthSegments);
            generateFace(sides.BOTTOM, widthSegments, depthSegments);
            generateFace(sides.RIGHT, depthSegments, heightSegments);
            generateFace(sides.LEFT, depthSegments, heightSegments);

            return {
                vertices: ArrayBuffer.create(new Float32Array(positions),
                    3, BufferType.FLOAT),
                indices: ElementBuffer.create(new Uint16Array(indices),
                    BufferType.UNSIGNED_SHORT),
                normals: ArrayBuffer.create(new Float32Array(normals),
                    3, BufferType.FLOAT),
                texCoords: ArrayBuffer.create(new Float32Array(uvs),
                    2, BufferType.FLOAT)
            };
        }

        protected computeVerticesBuffer(){
            return this._data.vertices;
        }

        protected computeIndicesBuffer(){
            return this._data.indices;
        }

        protected computeTexCoordsBuffer():ArrayBuffer{
            return this._data.texCoords;
        }

        protected computeNormalsBuffer():ArrayBuffer{
            return this._data.normals;
        }
    }
}

