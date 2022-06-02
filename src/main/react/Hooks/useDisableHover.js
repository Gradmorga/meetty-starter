

import React from "react";


const useDisableHover = () => {
    React.useEffect(() => {
        const body = document.body;
        let timer;

        const onScroll = () => {
            clearTimeout(timer);

            if (!body.classList.contains("disable-hover"))
                body.classList.add("disable-hover");

            timer = setTimeout(() => body.classList.remove("disable-hover"), 300);
        };

        window.addEventListener('scroll', onScroll, false);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);
}


export default useDisableHover;