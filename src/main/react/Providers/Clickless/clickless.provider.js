

import React from 'react';

import useToggle from "../../Hooks/useToggle";

import { throttle } from "../../../Utils/utils";
import useRefedParams from "../../Hooks/useRefedParams";


// WebGazer has wrong default export of @tensorflow/face-mesh neuron network
// https://github.com/brownhci/WebGazer/pull/232
// PS: And new version (v3.0) has broken exports too...



const ClicklessContext = React.createContext({ clientX: -1, clientY: -1 });

export const useClicklessProvider = () => React.useContext(ClicklessContext);

export const ClicklessProvider = ({ children, dataProvider, onModeChanged, onLoadingChanged, onOperatingChanged, onErrorOccurred }) => {

    const [isToggled, onToggle]  = useToggle(false);

    const listenersRef = React.useRef([]);


    const subscribeListener = React.useCallback(listener => {
        if (listener)
            listenersRef.current.push(listener);
    }, []);

    const unsubscribeListener = React.useCallback(listener => {
        if (listener) {
            const toRemoveIndex = listenersRef.current.indexOf(listener);
            listenersRef.current.splice(toRemoveIndex, 1);
        }
    }, []);


    const onError = error => {
        onToggle();
        onErrorOccurred && onErrorOccurred(error);
    };

    const onLoadingChange = isLoading => {
        if (isLoading)
            onPointChanged(-10000, -10000);

        onLoadingChanged && onLoadingChanged(isLoading);
    };

    const params = useRefedParams({
        onModeChanged,
        onLoadingChanged,
        onLoadingChange,
        onOperatingChanged,
        onErrorOccurred,
        onError,
        dataProvider
    });

    // eslint-disable-next-line
    const onPointChanged = React.useCallback(
        throttle(({ clientX, clientY }) => {
            listenersRef.current.forEach(listener => listener({ x: clientX, y: clientY }));
        }, 200),
        []
    );

    React.useEffect(
        () => {
            const { current } = params;

            if (!isToggled) {
                window.addEventListener('mousemove', onPointChanged);
                current.dataProvider.stop();
            } else {
                window.removeEventListener("mousemove", onPointChanged);
                current.dataProvider.start()
            }

            current.onModeChanged && current.onModeChanged(isToggled);
        },
        [isToggled, params, onPointChanged]
    );

    React.useEffect(() => {

        const { current } = params;

        current.dataProvider
            .onOperatingChanged(status => {
                current.onOperatingChanged && current.onOperatingChanged(status);
            })
            .onDataReceived(onPointChanged)
            .onLoadingChanged(current.onLoadingChange)
            .onError(current.onError);

    }, [params, onPointChanged]);


    React.useEffect(
        () => {
            const { current } = params;

            const onLeave = () => current.dataProvider.unload();

            window.addEventListener('beforeunload', onLeave);
            return () => window.removeEventListener("beforeunload", onLeave);
        },
        [params]
    );


    return (
        <ClicklessContext.Provider value={{
            subscribeListener, unsubscribeListener,
            isEyesSelected: isToggled,
            onSelected:     onToggle
        }}
        >
            { children }
        </ClicklessContext.Provider>
    );
}