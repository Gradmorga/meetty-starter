

import "./DialogButton.style.scss";

import React from "react";

const Categories = {
    CONFIRM: 0,
    REJECT:  1,
    NEUTRAL: 2
};
Object.freeze(Categories);


const Themed = View => ({classes = [], ...props}) => {

    const themed = [...classes, "dialog-button--normal"];

    return (
        <View {...props} classes={themed} />
    );
};


const DialogButtonView = ({ classes = [], category, ...props }) => {

    const mergedClasses = ["dialog-button", ...classes];

    if (category === Categories.CONFIRM)
        mergedClasses.push("dialog-button--confirm");
    else if (category === Categories.REJECT)
        mergedClasses.push("dialog-button--reject");
    else
        mergedClasses.push("dialog-button--neutral");

    return (
        <button {...props} className={`${mergedClasses.join(" ")}`} />
    );
};


const ThemedDialogButtonView = Themed(DialogButtonView);


export {
    Categories,
    DialogButtonView,
    ThemedDialogButtonView
};