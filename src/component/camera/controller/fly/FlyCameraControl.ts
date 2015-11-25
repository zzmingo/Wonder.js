/// <reference path="../../../../filePath.d.ts"/>
module dy {
    export abstract class FlyCameraControl {
        constructor(cameraComponent:Camera) {
            this.cameraComponent = cameraComponent;
        }

        public moveSpeed:number = 1.2;
        public rotateSpeed:number = 100;

        protected cameraComponent:Camera = null;

        private _rotateX:number = 0;
        private _rotateY:number = 0;
        private _isRotate:boolean = false;
        private _mouseDragSubscription:dyRt.IDisposable = null;
        private _keydownSubscription:dyRt.IDisposable = null;
        private _gameObject:GameObject = null;

        public init(gameObject:GameObject) {
            var self = this,
                eulerAngles = gameObject.transform.eulerAngles;

            this._rotateX = eulerAngles.x;
            this._rotateY = eulerAngles.y;

            this._gameObject = gameObject;

            this._bindCanvasEvent();
        }

        public update(time:number){
            if (!this._isRotate) {
                return;
            }

            this._isRotate = false;

            this._gameObject.transform.eulerAngles = Vector3.create(this._rotateX, this._rotateY, 0);
        }

        public dispose() {
            this._removeEvent();
        }

        protected abstract zoom(event:KeyboardEvent);

        private _move(event:KeyboardEvent) {
            var speed = this.moveSpeed,
                gameObject = this._gameObject,
                keyState = event.keyState;

            if (keyState["a"]) {
                gameObject.transform.translateLocal(Vector3.create(-speed, 0, 0));
            }
            else if(keyState["d"]) {
                gameObject.transform.translateLocal(Vector3.create(speed, 0, 0));
            }
            else if(keyState["w"]) {
                gameObject.transform.translateLocal(Vector3.create(0, 0, -speed));
            }
            else if(keyState["s"]) {
                gameObject.transform.translateLocal(Vector3.create(0, 0, speed));
            }
        }

        private _bindCanvasEvent() {
            var self = this,
                rotateSpeed = this.rotateSpeed,
                scene = Director.getInstance().scene,
                mouseup = EventManager.fromEvent(scene, EventName.MOUSEUP),
                mousemove = EventManager.fromEvent(scene, EventName.MOUSEMOVE),
                mousedown = EventManager.fromEvent(scene, EventName.MOUSEDOWN),
                keydown = EventManager.fromEvent(EventName.KEYDOWN),
                mousedrag = null,
                canvas = Director.getInstance().view;

            mousedrag = mousedown.flatMap(function (e) {
                e.stopPropagation();

                return mousemove.map(function (e) {
                    var movementDelta = e.movementDelta,
                        dx = null,
                        dy = null,
                        factor = rotateSpeed / canvas.height;

                    dx = factor * movementDelta.x;
                    dy = factor * movementDelta.y;

                    self._isRotate = true;

                    return {
                        dx: dx,
                        dy: dy
                    };
                }).takeUntil(mouseup);
            });

            this._mouseDragSubscription = mousedrag.subscribe(function (pos) {
                self._rotateY -= pos.dx;
                self._rotateX -= pos.dy;
            });

            this._keydownSubscription = keydown.subscribe(function (e) {
                self._move(e);
                self.zoom(e);
            });
        }

        private _removeEvent() {
            this._mouseDragSubscription.dispose();
            this._keydownSubscription.dispose();
        }
    }
}