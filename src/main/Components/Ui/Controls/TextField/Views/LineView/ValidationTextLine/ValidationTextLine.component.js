

import './ValidationTextLine.style.scss';

import React from 'react';


const ValidationTextLine = TextLineView => ({classes = [], message, ...props}) => {

    const validationMixin = [...classes];

    if (message)
        validationMixin.push("text-line--error");

    return (
        <TextLineView {...props} classes={validationMixin}/>
    );
};


export default ValidationTextLine;