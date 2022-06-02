

import "./TextAreaView.style.scss";

import React     from 'react';
import PropTypes from 'prop-types';

import ValidationTextArea from "./ValidationTextArea/ValidationTextArea.component";


const ThemedTextArea = TextAreaView => ({ classes = [], ...props}) => (
    <TextAreaView {...props} classes={[...classes, "text-area--normal"]}/>
);


const TextAreaView = ({ classes = [], name, value, onValueChange, onRefChanged, ...props }) => (
    <textarea
        className={`text-area ${classes.join(" ")}`}
        name={name}
        value={value}
        ref={onRefChanged}
        onChange={({target}) => onValueChange(target.value)}
        {...props}
    />
);


TextAreaView.propTypes = {
    classes:       PropTypes.arrayOf(PropTypes.string),
    id:            PropTypes.string,
    name:          PropTypes.string,
    placeholder:   PropTypes.string,
    value:         PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired
};


const ThemeTextAreaView    = ThemedTextArea(TextAreaView);
const ValidateTextAreaView = ValidationTextArea(ThemeTextAreaView);


export {
    TextAreaView,
    ValidateTextAreaView,
    ThemeTextAreaView
};