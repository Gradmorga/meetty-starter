

class BaseDrawer {

    constructor(context, contextStyleOptions = {}) {

        this.context = context;
        this.contextStyles = contextStyleOptions;

        if (context)
            this.setContextStyles(contextStyleOptions);

        this.draw = this.draw.bind(this);
    };


    getContext() {
        return this.context;
    };

    setContext(context) {
        this.context = context;

        this.setContextStyles(this.contextStyles);
    };

    setContextStyles(contextStyleOptions) {

        this.contextStyles = contextStyleOptions;

        for (let prop in contextStyleOptions) {
            if (contextStyleOptions.hasOwnProperty(prop) && contextStyleOptions[prop])
                this.getContext()[prop] = contextStyleOptions[prop];
        }
    };

    draw() { throw new Error("Not implemented!"); };


    load()   { throw new Error("Not implemented!"); }
    unload() {
        this.context = null;
    }


    clearScene() {
        this.getContext().clearRect(
            0, 0,
            this.getContext().canvas.getBoundingClientRect().width,
            this.getContext().canvas.getBoundingClientRect().height
        );
    };

    getElementPoint(element) {
        if (!this.getContext())
            return null;

        const canvasElement = this.getContext().canvas.getBoundingClientRect();

        const elementStartX = element.x - canvasElement.x;
        const elementStartY = element.y - canvasElement.y;

        return {
            x: (elementStartX + (element.width  / 2)) | 0,
            y: (elementStartY + (element.height / 2)) | 0,
        };
    };

    moveTo(point) {
        this.getContext().moveTo(point.x, point.y);
    };

    lineTo(point) {
        this.getContext().lineTo(point.x, point.y);
    };

    drawLine(fromElement, toElement) {
        const fromPoint = this.getElementPoint(fromElement);
        const toPoint   = this.getElementPoint(toElement);

        this.moveTo(fromPoint);
        this.lineTo(toPoint);

        this.getContext().stroke();
    };
}


export default BaseDrawer;