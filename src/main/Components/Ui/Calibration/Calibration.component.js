import './Calibration.style.scss';

import React from "react";

import useRefedParams from "../../../react/Hooks/useRefedParams";


const Calibration = ({ onEnded, onCancel }) => {

    const callbacksRef = useRefedParams({ onEnded, onCancel });

    const [points, setPoints] = React.useState(new Array(9).fill(0));

    const minClicksPerPoint = 6;

    const onPointClicked = React.useCallback(clickedPointIndex => {

        setPoints(prevState => {
            const pointsCopy = [...prevState];

            if (pointsCopy[clickedPointIndex] >= minClicksPerPoint)
                return prevState;

            pointsCopy[clickedPointIndex] += 1;

            return pointsCopy;
        });

    }, []);


    React.useEffect(() => {
        const isTrainingEnded = points.every(value => value >= minClicksPerPoint);

        if (isTrainingEnded)
            callbacksRef.current.onEnded();
    }, [points, callbacksRef]);

    return (
        <div className='calibration'>
            {
                points.map((marker, index) => (
                    <button
                        key={index}
                        className={['calibration__point', marker >= minClicksPerPoint ? "calibration__point--done" : ""].join(" ")}
                        onClick={onPointClicked.bind(this, index)}
                    />
                    )
                )
            }

            <button className="calibration__skip" onClick={callbacksRef.current.onCancel}>
                Skip
            </button>
        </div>
    )
}


export default Calibration;