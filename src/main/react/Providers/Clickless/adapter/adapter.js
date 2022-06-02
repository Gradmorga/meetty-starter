

class ClicklessModule {


    constructor(modulePath) {
        this.getModulePath    = function () { return modulePath; }

        this.onDataCallback = null;
        this.onDataReceived = function (callback) {
            this.onDataCallback = callback;
            return this;
        };

        this.onLoadingCallback = null;
        this.onLoadingChanged = function (callback) {
            this.onLoadingCallback = callback;
            return this;
        };

        this.onOperatingCallback = null;
        this.onOperatingChanged = function (callback) {
            this.onOperatingCallback = callback;
            return this;
        };

        this.onErrorCallback = null;
        this.onError = function (callback) {
            this.onErrorCallback = callback;
            return this;
        };
    }


    start() { throw new Error("Not implemented!"); }
    stop() { throw new Error("Not implemented!"); }
    unload() { throw new Error("Not implemented!"); }
}

export default ClicklessModule;