

import "./Label.style.scss";

import React     from 'react';
import PropTypes from 'prop-types';

import ThemedLabel from "./ThemedLabel/ThemedLabel.component";
import ValidationLabel from "./ValidationLabel/ValidationLabel.component";


const Label = ({ children, classes = [], htmlFor, label }) => (
    <label className={`label ${classes.join(" ")}`} htmlFor={htmlFor || ""}>
        { label }
        { children }
    </label>
);


Label.propTypes = {
    label:   PropTypes.string.isRequired,
    htmlFor: PropTypes.string,
    classes: PropTypes.arrayOf(PropTypes.string)
};


const ThemeLabel    = ThemedLabel(Label);
const ValidateLabel = ValidationLabel(ThemeLabel);


export {
    Label,
    ThemeLabel,
    ValidateLabel
};