
import "./ThemedLabelField.style.scss";

import React from 'react';


const ThemedLabelField = ILabelField => ({ classes = [], ...props }) => {

    const themeMixin = [...classes, "label-field--normal"]

    return (
        <ILabelField classes={themeMixin} {...props} />
    )
}


export default ThemedLabelField;