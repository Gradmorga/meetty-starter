

import "./ValidationLabel.style.scss";

import React from "react";


const ValidationLabel = ILabel => ({ classes = [], message, required, label, ...props }) => {

    const validationMixin = [...classes];
    let displayingLabel = label;

    if (message)
        validationMixin.push("label--error");

    if (required)
        displayingLabel += "*";

    return (
        <ILabel {...props} label={displayingLabel} classes={validationMixin}/>
    );
};


export default ValidationLabel;