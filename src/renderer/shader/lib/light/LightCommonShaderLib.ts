/// <reference path="../../../../definitions.d.ts"/>
module dy{
    export class LightCommonShaderLib extends ShaderLib{
        private static _instance = null;

        public static getInstance() {
            if (this._instance === null) {
                this._instance = new this();
                this._instance.initWhenCreate();
            }
            return this._instance;
        }

        public type:string = "lightCommon";

        public sendShaderVariables(program: Program, quadCmd:QuadCommand, material:LightMaterial){

        }

        //protected setShaderDefinition(){
            //super.setShaderDefinition();
            //
            //this.addAttributeVariable(["a_normal"]);
            //
            //this.addUniformVariable(["u_normalMatrix", "u_cameraPos", "u_shininess", "u_ambient"]);
            //
            //this._setLightDefinition();
            //
            //this.setFsSource(this.getFsChunk("shadowMap_fragment.glsl"));
            //this.setFsSource(this.getFsChunk("light_common.glsl"), "+");
            //this.setFsSource(this.getFsChunk(), "+");
        //}

        //private _sendLightVariables(program:Program){
        //    var stage:Stage = dy.Director.getInstance().stage,
        //        directionLights:dyCb.Collection<GameObject> = stage.directionLights,
        //        ambientLight:GameObject =stage.ambientLight,
        //        pointLights:dyCb.Collection<GameObject> = stage.pointLights;
        //
        //    program.sendUniformData("u_ambient", VariableType.FLOAT_3, ambientLight.getComponent<AmbientLight>(AmbientLight).color.toVector3());
        //
        //    if(pointLights){
        //        this._sendPointLightVariables(program, pointLights);
        //    }
        //
        //    if(directionLights){
        //        this._sendDirectionLightVariables(program, directionLights);
        //    }
        //}
        //
        //private _sendPointLightVariables(program: Program, pointLights:dyCb.Collection<GameObject> ){
        //    pointLights.forEach((pointLight:GameObject, index:number) => {
        //        var lightComponent:PointLight = pointLight.getComponent<PointLight>(PointLight);
        //
        //        program.sendStructureData(`u_pointLights[${index}].position`, VariableType.FLOAT_3, pointLight.transform.position);
        //        program.sendStructureData(`u_pointLights[${index}].color`, VariableType.FLOAT_3, lightComponent.color.toVector3());
        //
        //        program.sendStructureData(`u_pointLights[${index}].intensity`, VariableType.FLOAT_1, lightComponent.intensity);
        //        program.sendStructureData(`u_pointLights[${index}].range`, VariableType.FLOAT_1, lightComponent.range);
        //        program.sendStructureData(`u_pointLights[${index}].constant`, VariableType.FLOAT_1, lightComponent.constant);
        //        program.sendStructureData(`u_pointLights[${index}].linear`, VariableType.FLOAT_1, lightComponent.linear);
        //        program.sendStructureData(`u_pointLights[${index}].quadratic`, VariableType.FLOAT_1, lightComponent.quadratic);
        //    });
        //}
        //
        //private _sendDirectionLightVariables(program: Program, directionLights:dyCb.Collection<GameObject> ){
        //    directionLights.forEach((directionLight:GameObject, index:number) => {
        //        var lightComponent:DirectionLight = directionLight.getComponent<DirectionLight>(DirectionLight);
        //
        //        program.sendStructureData(`u_directionLights[${index}].direction`, VariableType.FLOAT_3, lightComponent.getDirection());
        //        program.sendStructureData(`u_directionLights[${index}].color`, VariableType.FLOAT_3, lightComponent.color.toVector3());
        //
        //        program.sendStructureData(`u_directionLights[${index}].intensity`, VariableType.FLOAT_1, lightComponent.intensity);
        //    });
        //}
        //
        //private _setLightDefinition(){
        //    var stage:Stage = dy.Director.getInstance().stage,
        //        directionLights:dyCb.Collection<GameObject> = stage.directionLights,
        //        pointLights:dyCb.Collection<GameObject> = stage.pointLights,
        //        direction_lights_count = 0,
        //        point_lights_count = 0;
        //
        //    if(directionLights){
        //        this.addUniformVariable(["u_directionLights"]);
        //
        //        direction_lights_count = directionLights.getCount();
        //    }
        //
        //    if(pointLights){
        //        this.addUniformVariable(["u_pointLights"]);
        //
        //        point_lights_count = pointLights.getCount();
        //    }
        //
        //    this._addDefine(this.vsSourceDefineList, direction_lights_count, point_lights_count);
        //    this._addDefine(this.fsSourceDefineList, direction_lights_count, point_lights_count);
        //}
        //
        //private _addDefine(list, direction_lights_count, point_lights_count){
        //    list.addChildren([{
        //        name: "DIRECTION_LIGHTS_COUNT",
        //        value: direction_lights_count
        //    }, {
        //        name: "POINT_LIGHTS_COUNT",
        //        value: point_lights_count
        //    }]);
        //}
    }
}
