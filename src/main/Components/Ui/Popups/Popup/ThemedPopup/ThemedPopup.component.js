

import './ThemedPopup.style.scss';

import React from "react";
import { CSSTransition } from "react-transition-group";


const ThemedPopup = IPopup => ({ classes = [], ...props }) => {

    const themedMix = ["popup--normal", ...classes];

    return (
        <CSSTransition in={props.isOpen} timeout={400} classNames='popup--normal' unmountOnExit mountOnEnter>
            <IPopup classes={themedMix} {...props} />
        </CSSTransition>
    );
};


export default ThemedPopup