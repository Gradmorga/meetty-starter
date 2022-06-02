

import "./Message.style.scss";

import React     from "react";
import PropTypes from 'prop-types';

import ValidationMessage from "./ValidationMessage/ValidationMessage.component";


const Message = ({ classes = [], message, children }) => (
    <span className={`message ${classes.join(" ")}`} >
        { message }
        { children }
    </span>
);


Message.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    message: PropTypes.string.isRequired
};


const ValidateMessage = ValidationMessage(Message);

export  {
    Message,
    ValidateMessage
}