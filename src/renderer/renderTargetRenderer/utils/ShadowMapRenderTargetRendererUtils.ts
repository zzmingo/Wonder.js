/// <reference path="../../../definitions.d.ts"/>
module dy {
    export abstract class ShadowMapRenderTargetRendererUtils{
        constructor(light:Light, texture:Texture){
            this.light = light;
            this.texture = texture;
        }

        public texture:Texture = null;

        protected light:Light = null;

        public initWhenCreate(){
            this.texture.width = this.light.shadowMapWidth;
            this.texture.height = this.light.shadowMapHeight;
        }

        public init(){
            this.texture.init();
        }


        public setShadowData(target:GameObject);
        public setShadowData(target:GameObject, shadowMapCamera:GameObject);

        public setShadowData(arg){
            var target:GameObject = arguments[0],
                material:LightMaterial = <LightMaterial>target.getComponent<Geometry>(Geometry).material,
          shadowMapCamera = null;

            if(arguments.length === 2){
                shadowMapCamera = arguments[1];
            }

            dyCb.Log.error(!(material instanceof LightMaterial), dyCb.Log.info.FUNC_MUST_BE("material", "LightMaterial when set shadowMap"));

            this.setMaterialShadowMapData(material, target, shadowMapCamera);
        }

        protected abstract setMaterialShadowMapData(material:LightMaterial, target:GameObject, shadowMapCamera:GameObject);
        protected abstract addShadowMap(material:LightMaterial, shadowMap:IShadowMapTexture);

        protected setShadowMap(target:GameObject, shadowMap:IShadowMapTexture){
            var material:LightMaterial = <LightMaterial>target.getComponent<Geometry>(Geometry).material;

            if(material.hasShadowMap(shadowMap)){
                return;
            }

            dyCb.Log.error(!(material instanceof LightMaterial), dyCb.Log.info.FUNC_MUST_BE("material", "LightMaterial when set shadowMap"));

            this.addShadowMap(material, shadowMap);
        }
    }
}
