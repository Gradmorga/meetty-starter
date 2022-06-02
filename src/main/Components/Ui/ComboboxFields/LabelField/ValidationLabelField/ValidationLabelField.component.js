

import './ValidationLabelField.style.scss';

import React from 'react';


const ValidationLabelField = ILabelField => ({ classes = [], message, ...props}) => {

    const errorMixin = [...classes];

    if (message)
        errorMixin.push("label-field--error");

    return (
        <ILabelField {...props} classes={errorMixin}/>
    );
};


export default ValidationLabelField;