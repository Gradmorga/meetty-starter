

import "./ThemedLabel.style.scss";

import React from "react";


const ThemedLabel = ILabel => ({ classes = [], ...props}) => {

    const themeMixin = [...classes, "label--normal"];

    return (
        <ILabel {...props} classes={themeMixin}/>
    );
};


export default ThemedLabel;