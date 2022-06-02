
import BaseDrawer from "./BaseDrawer.class";


class GraphDrawer extends BaseDrawer {


    constructor(context, contextStyleOptions, graph) {
        super(context, contextStyleOptions);

        if (!graph)
            throw new Error("Tree must has root and traversal function");

        this.graph       = graph;
        this.animationId = 0;

        this.connectChildsToParent = this.connectChildsToParent.bind(this);
        this.traverseGraph         = this.traverseGraph.bind(this);
    }


    traverseGraph(graph, onNodeVisit) {
        const stack = [];

        graph.forEach(node => stack.push(node));

        while (stack.length) {
            const node = stack.pop();

            onNodeVisit(node);

            if (node.childs.length)
                for (let i = node.childs.length - 1; i >= 0; i--)
                    stack.push(node.childs[i]);
        }
    };

    connectChildsToParent(node) {
        if (!node.childs.length || !node.domRef)
            return;

        const context = this.getContext();
        const childs  = node.childs;

        const parentElement = node.domRef.getBoundingClientRect();

        context.beginPath();

        for (let i = 0; i < childs.length; ++i) {

            const childElement = childs[i].domRef.getBoundingClientRect();

            this.drawLine(parentElement, childElement);
        }
    };

    draw() {
        if (!this.getContext())
            return;

        this.setContextStyles(this.contextStyles);

        this.clearScene();

        this.traverseGraph(this.graph, this.connectChildsToParent);

        this.animationId = window.requestAnimationFrame(this.draw);
    }

    load() {
        this.animationId = window.requestAnimationFrame(this.draw);
    }

    unload() {
        super.unload();
        window.cancelAnimationFrame(this.animationId);
    }
}


export default GraphDrawer;