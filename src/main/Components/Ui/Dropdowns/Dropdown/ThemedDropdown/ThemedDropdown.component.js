

import './ThemedDropdown.style.scss';

import React from "react";

import { CSSTransition } from "react-transition-group";


const ThemedDropdown = DropdownView => ({ classes = [], ...props }) => {

    const themedMix = ["dropdown--normal", ...classes];

    return (
        <CSSTransition in={props.isOpen} timeout={400} classNames='dropdown--normal' unmountOnExit mountOnEnter>
            <DropdownView classes={themedMix} {...props} />
        </CSSTransition>
    );
};


export default ThemedDropdown;