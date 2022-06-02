

import "./ThemedLabelDelegate.style.scss";

import React from 'react';


const ThemedLabelDelegate = ILabelDelegate => ({classes = [], isCurrent, ...props}) => {

    const themeMixin = [...classes, "label-item--normal"]

    if (isCurrent)
        themeMixin.push("label-item--current");

    return (
        <ILabelDelegate classes={themeMixin} {...props} />
    )
}


export default ThemedLabelDelegate;