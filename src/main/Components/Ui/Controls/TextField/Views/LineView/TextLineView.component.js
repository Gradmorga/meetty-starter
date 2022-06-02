

import './TextLineView.style.scss';

import React     from 'react';
import PropTypes from 'prop-types';

import ValidationTextLine from "./ValidationTextLine/ValidationTextLine.component";


const ThemedTextLine = TextLineView => ({ classes = [], ...props }) => (
    <TextLineView {...props} classes={[...classes, "text-line--normal"]}/>
);


const TextLineView = ({ id, name, classes = [], value, onValueChange, onRefChanged, ...props }) => (
    <input
        id={id}
        type='text'
        className={`text-line ${classes.join(" ")}`}
        name={name}
        ref={onRefChanged}
        onChange={({ target }) => onValueChange(target.value)}
        value={value}
        {...props}
    />
);


TextLineView.propTypes = {
    id:            PropTypes.string,
    name:          PropTypes.string,
    classes:       PropTypes.arrayOf(PropTypes.string),
    value:         PropTypes.string.isRequired,
    onValueChange: PropTypes.func.isRequired,
};


const ThemeTextLine = ThemedTextLine(TextLineView);
const ValidateTextLine = ValidationTextLine(ThemeTextLine);


export {
    TextLineView,
    ThemedTextLine,
    ValidateTextLine
};