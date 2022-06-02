

import "./SlidingButton.style.scss";

import React from "react";


const Themed = View => ({ classes = [], ...props }) => {

    const themed = [...classes, "button--slider-normal"];

    return (
        <View {...props} classes={themed}/>
    )
}


const SlidingButtonView = ({ classes = [], ...props }) => {

    return (
        <button
            className={`button--slider ${classes.join(" ")}`}
            {...props}
        />
    )
}


const ThemedSlidingButtonView = Themed(SlidingButtonView);

export {
    SlidingButtonView,
    ThemedSlidingButtonView
};