describe("LightMaterial", function () {
    var sandbox = null;
    var material = null;
    var obj;
    var geo;
    var cameraGameObject;

    var gl;
    var state;

    var Color = wd.Color;
    var MaterialData = wd.MaterialData;
    var LightMaterialData = wd.LightMaterialData;
    var DataBufferConfig = wd.DataBufferConfig;
    var EShading = wd.EShading;
    var ELightModel = wd.ELightModel;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();

        testTool.clearAndOpenContractCheck(sandbox);

        state = stateTool.createAndSetFakeGLState(sandbox);

        gl = stateTool.getGLFromFakeGLState(state);
    });
    afterEach(function () {
        testTool.clear(sandbox);
        sandbox.restore();
    });

    describe("only test light material", function () {
        beforeEach(function () {
            var data = sceneTool.prepareGameObjectAndAddToScene(false, null, lightMaterialTool.create());
            obj = data.gameObject;
            geo = data.geometry;
            material = data.material;
            cameraGameObject = data.cameraGameObject;
        });

        // it("glsl only set glPosition,glFragColor once", function () {
        //     gl = directorTool.init(sandbox);
        //
        //     directorTool.loopBody(state);
        //
        //     var vs = materialTool.getVsSource(gl);
        //     var fs = materialTool.getFsSource(gl);
        //     expect(glslTool.containSpecifyCount(vs, "gl_Position =", 1)).toBeTruthy();
        //     expect(glslTool.containSpecifyCount(fs, "gl_FragColor =", 1)).toBeTruthy();
        // });

        describe("test default value", function () {
            describe("getSpecularColor", function () {
                beforeEach(function () {
                });

                it("default color is #ffffff", function () {
                    colorTool.judgeIsEqual(lightMaterialTool.getSpecularColor(material), Color.create("#ffffff"), expect);
                });
            });

            describe("setSpecularColor", function () {
                beforeEach(function () {

                });

                it("set color", function () {
                    var color = Color.create("#123456");

                    lightMaterialTool.setSpecularColor(material, color);

                    colorTool.judgeIsEqual(lightMaterialTool.getSpecularColor(material), color, expect);
                });
            });

            describe("getEmissionColor", function () {
                beforeEach(function () {
                });

                it("default color is #000000", function () {
                    colorTool.judgeIsEqual(lightMaterialTool.getEmissionColor(material), Color.create("#000000"), expect);
                });
            });

            describe("setEmissionColor", function () {
                beforeEach(function () {

                });

                it("set color", function () {
                    var color = Color.create("#123456");

                    lightMaterialTool.setEmissionColor(material, color);

                    colorTool.judgeIsEqual(lightMaterialTool.getEmissionColor(material), color, expect);
                });
            });

            describe("getShininess", function () {
                beforeEach(function () {

                });

                it("default is 32", function () {
                    expect(lightMaterialTool.getShininess(material)).toEqual(32);
                });
            });

            describe("getShading", function () {
                beforeEach(function () {

                });

                it("default is EShading.FLAT", function () {
                    expect(lightMaterialTool.getShading(material)).toEqual(EShading.FLAT);
                });
            });

            describe("getLightModel", function () {
                beforeEach(function () {

                });

                it("default is ELightModel.PHONG", function () {
                    expect(lightMaterialTool.getLightModel(material)).toEqual(ELightModel.PHONG);
                });
            });
        });

        describe("initData", function () {
            beforeEach(function () {
            });

            describe("separate buffer index into segements of corresponding material type", function () {
                beforeEach(function () {

                });

                it("make LightMaterialData.index after BasicMaterialData", function () {

                    sandbox.stub(DataBufferConfig, "basicMaterialDataBufferCount", 20);
                    sandbox.stub(DataBufferConfig, "lightMaterialDataBufferCount", 100);

                    materialTool.resetData();

                    expect(LightMaterialData.index).toEqual(20);
                });
            });
        });

        describe("disposeComponent", function () {
            beforeEach(function () {
            });

            describe("remove by swap with last one", function () {
                var obj2, mat2;

                beforeEach(function () {
                    mat2 = lightMaterialTool.create();
                    obj2 = gameObjectTool.create();
                    gameObjectTool.addComponent(obj2, mat2);
                    sceneTool.addGameObject(obj2);
                });

                it("index -= 1", function () {
                    var index = LightMaterialData.index;

                    gameObjectTool.disposeComponent(obj, material);

                    expect(LightMaterialData.index).toEqual(index - 1);
                });

                describe("reset removed one's value", function () {
                    function judgeColor(getMethodName, setMethodName, defaultColor) {
                        var color1 = Color.create("rgb(0.1,0.2,0.3)");
                        var color2 = Color.create("rgb(0.4,0.2,0.3)");
                        lightMaterialTool[setMethodName](material, color1);
                        lightMaterialTool[setMethodName](mat2, color2);

                        var materialIndex = material.index;
                        var mat2Index = mat2.index;
                        gameObjectTool.disposeComponent(obj, material);

                        colorTool.judgeIsEqual(lightMaterialTool[getMethodName](componentTool.createComponent(materialIndex)), color2, expect);
                        colorTool.judgeIsEqual(lightMaterialTool[getMethodName](componentTool.createComponent(mat2Index)), defaultColor, expect);
                    }

                    function judgeSingleValue(getMethodName, setMethodName, defaultValue) {
                        disposeTool.judgeSingleValue(lightMaterialTool, getMethodName, setMethodName, defaultValue, material, mat2, function(material){
                            gameObjectTool.disposeComponent(obj, material);
                        })
                    }

                    function judgeMap(setMapMethodName, hasMapMethodName) {
                        var texture = textureTool.create();
                        textureTool.setSource(texture, {});

                        lightMaterialTool[setMapMethodName](material, texture);

                        var texture2 = textureTool.create();
                        textureTool.setSource(texture2, {});

                        lightMaterialTool[setMapMethodName](mat2, texture2);

                        var matIndex1 = material.index;
                        var matIndex2 = mat2.index;

                        gameObjectTool.disposeComponent(obj, material);


                        expect(LightMaterialData[hasMapMethodName][lightMaterialTool.computeLightBufferIndex(matIndex1)]).toEqual(1);
                        expect(LightMaterialData[hasMapMethodName][lightMaterialTool.computeLightBufferIndex(matIndex2)]).toEqual(0);
                    }

                    it("remove from specularColors", function () {
                        judgeColor("getSpecularColor", "setSpecularColor", colorTool.createDefaultColor(MaterialData));
                    });
                    it("remove from emissionColors", function () {
                        judgeColor("getEmissionColor", "setEmissionColor", Color.create("#000000"));
                    });
                    it("remove from shadings", function () {
                        judgeSingleValue("getShading", "setShading", LightMaterialData.defaultShading);
                    });
                    it("remove from shininess", function () {
                        judgeSingleValue("getShininess", "setShininess", LightMaterialData.defaultShininess);
                    });
                    it("remove from lightModels", function () {
                        judgeSingleValue("getLightModel", "setLightModel", LightMaterialData.defaultLightModel);
                    });
                    it("remove from diffuseMaps", function () {
                        judgeMap("setDiffuseMap", "hasDiffuseMaps");
                    });
                    it("remove from specularMaps", function () {
                        judgeMap("setSpecularMap", "hasSpecularMaps");
                    });
                });

                // describe("remove by swap the target one and the last one", function () {
                //     function judge(methodName, mapDataName) {
                //         var texture = textureTool.create();
                //         textureTool.setSource(texture, {});
                //
                //         lightMaterialTool[methodName](material, texture);
                //
                //         var texture2 = textureTool.create();
                //         textureTool.setSource(texture2, {});
                //
                //         lightMaterialTool[methodName](mat2, texture2);
                //
                //         var matIndex1 = material.index;
                //         var matIndex2 = mat2.index;
                //
                //         gameObjectTool.disposeComponent(obj, material);
                //
                //
                //         expect(LightMaterialData[mapDataName][matIndex1]).toEqual(texture2.index);
                //         expect(LightMaterialData[mapDataName][matIndex2]).toBeUndefined();
                //     }
                //
                //     it("remove diffuseMapMap", function () {
                //         judge("setDiffuseMap", "diffuseMapMap");
                //     });
                //     it("remove diffuseMapMap", function () {
                //         judge("setSpecularMap", "specularMapMap");
                //     });
                // });
            });
        });
    });
});
