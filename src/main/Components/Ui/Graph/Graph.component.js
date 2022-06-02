

import React from 'react';
import GraphDrawer from "./drawers/GraphDrawer.class";
import Canvas from "../Canvas/Canvas.component";


function childs(nodes) {
    const childs = React.Children.toArray(nodes);

    return {
        hasType: function(type) {
            return childs.filter(node => node.type === type);
        },
        hasNotType: function(type) {
            return childs.filter(node => node.type !== type);
        },
    }
}

function nodesToFlat(nodes) {
    const array = [];
    const stack = [];

    let counter = 0;

    nodes.forEach(node => stack.push(node));

    while (stack.length) {
        const node = stack.pop();

        const { children, ...rest } = node.props;
        rest.key = counter;

        const childsArray = childs(children);

        array.push(React.cloneElement(node, rest, childsArray.hasNotType(Node)));

        const subNodes = childsArray.hasType(Node);

        if (subNodes.length) {
            for (let i = subNodes.length - 1; i >= 0; i--)
                stack.push(subNodes[i]);
        }

        counter++;
    }

    return array;
}

function makeDomGraph(roots) {

    const nodes = [];

    roots.forEach(root => {
        const node = {
            domRef: root.props.domRef.current,
            childs: []
        };

        const childsArray = childs(root.props.children)

        const subNodes = childsArray.hasType(Node);

        if (subNodes.length)
            node.childs = makeDomGraph(subNodes);

        nodes.push(node);
    });

    return nodes;
}


const Graph = ({ children, styles = {}, classes = [] }) => {

    const canvasRef = React.useRef(null);

    const nodes = childs(children).hasType(Node);

    const drawer = React.useRef(new GraphDrawer(null, styles, {}));

    React.useEffect(() => {
        drawer.current.graph = makeDomGraph(nodes);
        // eslint-disable-next-line
    }, []);

    return (
        <Canvas drawer={drawer.current} domRef={canvasRef} classes={classes}>
            { nodesToFlat(nodes) }
        </Canvas>
    );
};

const Node = ({ domRef, children, classes = [] }) =>(
    <div ref={domRef} className={`node ${classes.join(" ")}`}>
        { children }
    </div>
);


export { Graph, Node };