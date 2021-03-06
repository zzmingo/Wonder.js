export var webgl2_material_config = {
    "shaders": {
        "materialShaders": {
            "BasicRender": [
                { "type": "group", "value": "engineMaterialTop" },
                "BasicMaterialColorShaderLib",
                "BasicShaderLib",
                {
                    "type": "branch",
                    "branch": function (materialIndex, _a, _b) {
                        var getMapCount = _a.getMapCount;
                        var MapManagerDataFromSystem = _b.MapManagerDataFromSystem;
                        if (getMapCount(materialIndex, MapManagerDataFromSystem) === 1) {
                            return "BasicMapShaderLib";
                        }
                    }
                },
                "BasicEndShaderLib",
                { "type": "group", "value": "engineMaterialEnd" }
            ],
            "FrontRenderLight": [
                { "type": "group", "value": "engineMaterialTop" },
                "NormalMatrixNoInstanceShaderLib",
                "NormalCommonShaderLib",
                "LightCommonShaderLib",
                "LightSetWorldPositionShaderLib",
                {
                    "type": "branch",
                    "branch": function (materialIndex, _a, _b) {
                        var hasDiffuseMap = _a.hasDiffuseMap, hasSpecularMap = _a.hasSpecularMap;
                        var LightMaterialDataFromSystem = _b.LightMaterialDataFromSystem;
                        if (hasDiffuseMap(LightMaterialDataFromSystem)
                            || hasSpecularMap(LightMaterialDataFromSystem)) {
                            return "CommonLightMapShaderLib";
                        }
                    }
                },
                {
                    "type": "branch",
                    "branch": function (materialIndex, _a, _b) {
                        var hasDiffuseMap = _a.hasDiffuseMap;
                        var LightMaterialDataFromSystem = _b.LightMaterialDataFromSystem;
                        if (hasDiffuseMap(LightMaterialDataFromSystem)) {
                            return "DiffuseMapShaderLib";
                        }
                        return "NoDiffuseMapShaderLib";
                    }
                },
                {
                    "type": "branch",
                    "branch": function (materialIndex, _a, _b) {
                        var hasSpecularMap = _a.hasSpecularMap;
                        var LightMaterialDataFromSystem = _b.LightMaterialDataFromSystem;
                        if (hasSpecularMap(LightMaterialDataFromSystem)) {
                            return "SpecularMapShaderLib";
                        }
                        return "NoSpecularMapShaderLib";
                    }
                },
                "NoLightMapShaderLib",
                "NoEmissionMapShaderLib",
                "NoNormalMapShaderLib",
                "NoShadowMapShaderLib",
                "LightShaderLib",
                "PointLightShaderLib",
                "LightEndShaderLib",
                { "type": "group", "value": "engineMaterialEnd" }
            ],
            "GBuffer": [
                { "type": "group", "value": "engineMaterialTop" },
                "NormalMatrixNoInstanceShaderLib",
                "NormalCommonShaderLib",
                "GBufferCommonShaderLib",
                "GBufferSetWorldPositionShaderLib",
                {
                    "type": "branch",
                    "branch": function (materialIndex, _a, _b) {
                        var hasDiffuseMap = _a.hasDiffuseMap, hasSpecularMap = _a.hasSpecularMap;
                        var LightMaterialDataFromSystem = _b.LightMaterialDataFromSystem;
                        if (hasDiffuseMap(materialIndex, LightMaterialDataFromSystem)
                            || hasSpecularMap(materialIndex, LightMaterialDataFromSystem)) {
                            return "CommonLightMapShaderLib";
                        }
                    }
                },
                {
                    "type": "branch",
                    "branch": function (materialIndex, _a, _b) {
                        var hasDiffuseMap = _a.hasDiffuseMap;
                        var LightMaterialDataFromSystem = _b.LightMaterialDataFromSystem;
                        if (hasDiffuseMap(materialIndex, LightMaterialDataFromSystem)) {
                            return "DiffuseMapShaderLib";
                        }
                        return "NoDiffuseMapShaderLib";
                    }
                },
                {
                    "type": "branch",
                    "branch": function (materialIndex, _a, _b) {
                        var hasSpecularMap = _a.hasSpecularMap;
                        var LightMaterialDataFromSystem = _b.LightMaterialDataFromSystem;
                        if (hasSpecularMap(materialIndex, LightMaterialDataFromSystem)) {
                            return "SpecularMapShaderLib";
                        }
                        return "NoSpecularMapShaderLib";
                    }
                },
                "GBufferNoNormalMapShaderLib",
                "GBufferShaderLib",
                "GBufferEndShaderLib",
                { "type": "group", "value": "engineMaterialEnd" }
            ]
        },
        "noMaterialShaders": {
            "DeferAmbientLightPass": [
                { "type": "group", "value": "deferLightPassIndexZeroUbo" },
                "AmbientLightUboShaderLib",
                "DeferLightPassCommonShaderLib",
                "NoLightMapShaderLib",
                "DeferLightPassShaderLib",
                "DeferAmbientLightPassShaderLib",
                "DeferLightPassEndShaderLib"
            ],
            "DeferDirectionLightPass": [
                { "type": "group", "value": "deferLightPassIndexZeroUbo" },
                { "type": "group", "value": "deferLightPassUbo" },
                "DirectionLightUboShaderLib",
                "DeferLightPassCommonShaderLib",
                "DeferDirectionLightPointLightPassCommonShaderLib",
                "DeferDirectionLightPassCommonShaderLib",
                { "type": "group", "value": "deferLightPassLightMap" },
                "DeferDirectionLightPassNoNormalMapShaderLib",
                "DeferLightPassShaderLib",
                "DeferDirectionLightPassShaderLib",
                "DeferLightPassEndShaderLib"
            ],
            "DeferPointLightPass": [
                { "type": "group", "value": "deferLightPassIndexZeroUbo" },
                { "type": "group", "value": "deferLightPassUbo" },
                "PointLightUboShaderLib",
                "DeferLightPassCommonShaderLib",
                "DeferDirectionLightPointLightPassCommonShaderLib",
                "DeferPointLightPassCommonShaderLib",
                { "type": "group", "value": "deferLightPassLightMap" },
                "DeferPointLightPassNoNormalMapShaderLib",
                "DeferLightPassShaderLib",
                "DeferPointLightPassShaderLib",
                "DeferLightPassEndShaderLib"
            ]
        }
    },
    "shaderLibGroups": {
        "engineMaterialTop": [
            "CommonShaderLib",
            "ModelMatrixNoInstanceShaderLib",
            "VerticeCommonShaderLib",
            "CameraUboShaderLib"
        ],
        "deferLightPassIndexZeroUbo": [
            "CameraUboShaderLib"
        ],
        "deferLightPassUbo": [
            "LightUboShaderLib"
        ],
        "deferLightPassLightMap": [
            "DeferLightPassNoNormalMapShaderLib",
            "NoLightMapShaderLib",
            "NoEmissionMapShaderLib",
            "NoShadowMapShaderLib"
        ],
        "engineMaterialEnd": [
            "EndShaderLib"
        ]
    }
};
//# sourceMappingURL=material_config.js.map