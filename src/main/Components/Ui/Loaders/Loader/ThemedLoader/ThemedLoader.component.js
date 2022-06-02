

import './ThemedLoader.style.scss';

import React from 'react';

import {CSSTransition} from "react-transition-group";


const ThemedLoader = ILoader => ({ classes = [], ...props }) => {

    const themedMix = ["loader--normal", ...classes];

    return (
        <CSSTransition in={props.isLoading} timeout={400} classNames='loader--normal' unmountOnExit mountOnEnter>
            <ILoader classes={themedMix} {...props} />
        </CSSTransition>
    );
};


export default ThemedLoader;