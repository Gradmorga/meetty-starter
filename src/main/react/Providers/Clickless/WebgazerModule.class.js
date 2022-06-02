

import ClicklessModule from "./adapter/adapter";


class WebgazerModule extends ClicklessModule {

    constructor(modulePath) {
        super(modulePath);

        this.eyesModule = null;
        this.isReady    = false;
    }

    correctPoint(data) {
        const point = {
            clientX: data.x | 0,
            clientY: data.y | 0
        };

        if (point.clientX < 0)
            point.clientX = 0;
        else
            point.clientX = Math.min(point.clientX, window.innerWidth);

        if (point.clientY < 0)
            point.clientY = 0;
        else
            point.clientY = Math.min(point.clientY, window.innerHeight);

        return point;
    }

    async start() {
        if (this.eyesModule) {
            this.onOperatingCallback(true);
            this.eyesModule.setGazeListener(data => {
                if (data === null)
                    return;

                this.onDataCallback(this.correctPoint(data));
            });
            return;
        }

        this.onLoadingCallback(true);

        import(`webgazer/dist/${this.getModulePath()}`).then(webgazer => {
            this.eyesModule = webgazer.default;

            this.eyesModule
                .showVideo(false)
                .showFaceOverlay(false)
                .showFaceFeedbackBox(false)
                .showPredictionPoints(true)
                .setRegression('ridge')
                .setGazeListener(data => {

                    if (!this.isReady) {
                        this.isReady = true;
                        this.onLoadingCallback(false);
                        this.onOperatingCallback(true);
                    }

                    if (data === null)
                        return;

                    this.onDataCallback(this.correctPoint(data));
                })
                .begin()
                .catch(error => this.onErrorCallback(error));

        }).catch(error => {
            this.onLoadingCallback(false);
            this.onErrorCallback(error);
        });
    }

    stop() {
        if (this.eyesModule) {
            this.eyesModule.clearGazeListener();
            this.onOperatingCallback(false);
        }
    }

    unload() {
        if (this.eyesModule)
            this.eyesModule.end();
    }
}


export default WebgazerModule;