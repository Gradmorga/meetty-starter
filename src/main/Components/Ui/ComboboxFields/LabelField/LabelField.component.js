

import './LabelField.style.scss';

import React     from 'react';
import PropTypes from 'prop-types';

import ThemedLabelField from "./ThemedLabelField/ThemedLabelField.component";
import ValidationLabelField from "./ValidationLabelField/ValidationLabelField.component";


const LabelField = ({ children, classes = [], item, onClick }) => (
    <button className={`label-field ${ classes.join(" ") }`} type="button" onClick={onClick}>
        { item.label }
        { children }
    </button>
);


LabelField.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    item:    PropTypes.shape({
        label: PropTypes.string
    }).isRequired
};


const ThemeLabelField = ThemedLabelField(LabelField);
const ValidatableLabelField = ValidationLabelField(ThemeLabelField);


export {
    LabelField,
    ThemeLabelField,
    ValidatableLabelField
};