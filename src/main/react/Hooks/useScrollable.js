

import React from "react";

import useRefedParams from "./useRefedParams";

import { throttle } from "../../Utils/utils";


const Direction = Object.freeze({
    UP:    1,
    RIGHT: 2,
    DOWN:  3,
    LEFT:  4
});


const useScrollable = onScrolled => {

    const callbackRef = useRefedParams({ onScrolled });

    // eslint-disable-next-line
    const onWheel = React.useCallback(throttle(e => {
        callbackRef.current.onScrolled(e.deltaY < 0 ? Direction.UP : Direction.DOWN);
        e.preventDefault();
        e.stopPropagation();
    }, 600), [callbackRef]);

    const touchData = React.useRef({
        xDown: null,
        yDown: null
    });

    const onTouchStart = React.useCallback(e => {

        const { clientX, clientY } = e.touches[0];

        touchData.current.xDown = clientX;
        touchData.current.yDown = clientY;

        e.stopPropagation();

    }, []);

    // eslint-disable-next-line
    const onTouchMove = React.useCallback(throttle(e => {

        if (!touchData.current.xDown || !touchData.current.yDown)
            return;

        const { clientX: xUp, clientY: yUp } = e.touches[0];

        const xDiff = touchData.current.xDown - xUp;
        const yDiff = touchData.current.yDown - yUp;

        const { current } = callbackRef;

        if (Math.abs(xDiff) > Math.abs(yDiff))
            current.onScrolled(xDiff > 0 ? Direction.RIGHT : Direction.LEFT);
        else
            current.onScrolled(yDiff < 0 ? Direction.UP : Direction.DOWN);

        touchData.current.xDown = null;
        touchData.current.yDown = null;

        e.preventDefault();
        e.stopPropagation();

    }, 700), [callbackRef]);

    return { onWheel, onTouchStart, onTouchMove };
};


export { useScrollable, Direction };