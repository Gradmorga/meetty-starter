

import React from 'react';

import { useClicklessProvider } from "../../../react/Providers/Clickless/clickless.provider";
import useClickless from "../../../react/Hooks/useClickless";
import useRefedParams from "../../../react/Hooks/useRefedParams";


class Metrics {

    constructor(elementRef) {
        this.elementRef = elementRef;
    }

    contains() {
        throw new Error("Not implemented!");
    }

    elementMetrics() {
        return this.elementRef ? this.elementRef.getBoundingClientRect() : null;
    }
}

class BlockMetrics extends Metrics {

    constructor(elementRef, coefficients = {}) {
        super(elementRef);

        this.coefficients = {
            top:    coefficients.top    ? coefficients.top    : 1,
            right:  coefficients.right  ? coefficients.right  : 1,
            bottom: coefficients.bottom ? coefficients.bottom : 1,
            left:   coefficients.left   ? coefficients.left   : 1
        };
    }

    contains(point) {
        const metrics = this.elementMetrics();

        if (!metrics)
            return false;

        const { x, y, width, height } = metrics;

        const transformedY1 = (y - ((height * this.coefficients.top)  - height) | 0);
        const transformedX1 = (x - ((width  * this.coefficients.left) - width)  | 0);

        const transformedY2 = (y + (height * this.coefficients.bottom) | 0);
        const transformedX2 = (x + (width  * this.coefficients.right)  | 0);

        return transformedX1 <= point.x && point.x <= transformedX2 && transformedY1 <= point.y && point.y <= transformedY2;
    }
}


const ClicklessComponent = ({ children, onEnter, onLeave}) => {

    const params = useRefedParams({ onEnter, onLeave });

    const { subscribeListener, unsubscribeListener } = useClicklessProvider();

    const { isActive, onClicked, setActivator, addChild, onPointChanged } = useClickless();

    React.useEffect(() => {
        subscribeListener(onPointChanged);
        return () => unsubscribeListener(onPointChanged);
    }, [subscribeListener, unsubscribeListener, onPointChanged]);

    React.useEffect(() => {
        const { current } = params;

        isActive  && current.onEnter && current.onEnter();
        !isActive && current.onLeave && current.onLeave();
    }, [isActive, params]);

    return (
        <>
            {
                children(isActive, onClicked, setActivator, addChild)
            }
        </>
    );
};


export {
    ClicklessComponent,
    BlockMetrics
};