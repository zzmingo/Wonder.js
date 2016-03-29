describe("ShadowManager", function() {
    var sandbox = null;
    var manager;

    beforeEach(function () {
        sandbox = sinon.sandbox.create();
        manager = wd.ShadowManager.create();
    });
    afterEach(function () {
        sandbox.restore();
    });

    describe("dispose", function(){
        beforeEach(function(){
        });

        it("unbind beforeInit event", function(){
            wd.EventManager.off();
            manager.init();

            sandbox.stub(manager, "_beforeInitHandler");

            manager.dispose();

            wd.EventManager.trigger(wd.CustomEvent.create(wd.EEngineEvent.BEFORE_GAMEOBJECT_INIT));

            expect(manager._beforeInitHandler).not.toCalled();
        });
    });
});
