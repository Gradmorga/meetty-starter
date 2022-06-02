

import './ValidationTextArea.style.scss';

import React from 'react';


const ValidationTextArea = TextAreaView => ({ classes = [], message, ...props }) => {

    const validationMixin = [...classes];

    if (message)
        validationMixin.push("text-area--error");

    return (
        <TextAreaView {...props} classes={validationMixin}/>
    );
};


export default ValidationTextArea;