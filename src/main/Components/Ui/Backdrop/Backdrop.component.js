

import "./Backdrop.style.scss";

import React     from "react";
import PropTypes from 'prop-types';

import { CSSTransition } from "react-transition-group";


const ThemedBackdrop = IBackDrop => ({classes = [], isOpen, ...props}) => {

    const themeMix = [...classes, "backdrop--normal"];

    return (
        <CSSTransition in={isOpen} timeout={400} classNames='backdrop--normal' unmountOnExit mountOnEnter>
            <IBackDrop {...props} classes={themeMix}/>
        </CSSTransition>
    );
};


const Backdrop = ({ children, onClick, isOpen, classes = [], fixed, ...props }) => {

    const backdropClasses = ["backdrop"];

    if (fixed)
        backdropClasses.push("backdrop--fixed");

    const backdrop = <div
        {...props}
        onWheel={e => e.stopPropagation()}
        onClick={onClick}
        className={`${backdropClasses.join(" ")} ${classes.join(" ")}`}
    >
        { children }
    </div>

    if (isOpen === undefined)
        return backdrop;
    else
        return isOpen ? backdrop : null;
};


Backdrop.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func
};


const ThemeBackdrop = ThemedBackdrop(Backdrop);


export {
    Backdrop,
    ThemeBackdrop
};