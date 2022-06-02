

import React from "react";

import { useClicklessProvider } from "../../../react/Providers/Clickless/clickless.provider";


async function isDeviceReady() {
    try {
        await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "user" }});
        return true;
    } catch (e) {
        if (e.name === 'NotFoundError') {
            try {
                await navigator.mediaDevices.getUserMedia({ audio: false, video: true});
                return true;
            } catch (e) {
                return false;
            }
        }

        return false;
    }
}


const ClicklessSwitcher = ({ children }) => {

    const clicklessManager = useClicklessProvider();

    const [isAccessible, setAccessible] = React.useState(false);

    React.useEffect(() => {
        isDeviceReady().then(value => setAccessible(value));
    }, []);

    return (
        <>
            {
                isAccessible ?
                    children(clicklessManager.isEyesSelected, clicklessManager.onSelected)
                    :
                    null
            }
        </>
    )
};


export default ClicklessSwitcher;