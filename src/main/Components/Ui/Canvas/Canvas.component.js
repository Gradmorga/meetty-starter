

import "./Canvas.style.scss";

import React from 'react';
import useRefedParams from "../../../react/Hooks/useRefedParams";


const Canvas = ({ domRef, drawer, children, classes = [] }) => {

    const canvasRef = React.useRef(null);

    const params = useRefedParams({ drawer });

    React.useEffect(() => {

        if (!canvasRef.current)
            return;

        domRef.current = canvasRef.current;
        const canvas   = canvasRef.current;

        const { drawer } = params.current;

        drawer.setContext(canvas.getContext("2d"));

        const onResize = () => {
            const cssStyle = window.getComputedStyle(canvas);

            const newWidth  = cssStyle.getPropertyValue("width").replace("px", '');
            const newHeight = cssStyle.getPropertyValue("height").replace("px", '');

            canvas.width  = newWidth;
            canvas.height = newHeight;
        };

        window.addEventListener("resize", onResize);

        onResize();

        drawer.load();

        return () => {
            drawer.unload();
            window.removeEventListener("resize", onResize);
        };

    }, [params, domRef]);

    return(
        <div className={`canvas__wrapper ${classes.join(" ")}`}>
            <canvas
                ref={canvasRef}
                    className="canvas"/>
            { children }
        </div>
    );
};


export default Canvas;