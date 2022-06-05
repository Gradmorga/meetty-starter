

import React from "react";


const useClickless = () => {

    const [clickless, setClickless] = React.useState({
        isActive:      false,
        isForceActive: false
    });

    const onClicked = React.useCallback(() => {
        setClickless(prevState => ({
            ...prevState,
            isForceActive: !prevState.isForceActive
        }));
    }, []);

    const componentClicklessData = React.useRef({
        childs: [],
        activator: null
    });

    const setActivator = React.useCallback(
        activator => componentClicklessData.current.activator = activator,
        []
    );

    const addChild = React.useCallback(
        child => componentClicklessData.current.childs.push(child),
        []
    );

    const onPointChanged = React.useCallback((globalPoint) => {
        if (!componentClicklessData.current.activator)
            return;

        setClickless((prevState) => {
            if (prevState.isForceActive)
                return prevState;

            const isPointOnChild     = componentClicklessData.current.childs.some(child => child.contains(globalPoint));
            const isPointOnActivator = componentClicklessData.current.activator.contains(globalPoint);

            if ((isPointOnChild || isPointOnActivator) === prevState.isActive)
                return prevState;

            return {
                ...prevState,
                isActive: !prevState.isActive
            }
        });
    }, []);

    return {
        isActive: clickless.isActive,
        setActivator,
        addChild,
        onClicked,
        onPointChanged
    };
}


export default useClickless;