

import './ValidationMessage.style.scss';

import React from 'react';


const ValidationMessage = IMessage => ({ classes = [], message, ...props}) => {

    const validationMixes = [...classes];

    if (message)
        validationMixes.push("message--error");

    return (
        <IMessage {...props} message={message} classes={validationMixes}/>
    );
};


export default ValidationMessage;