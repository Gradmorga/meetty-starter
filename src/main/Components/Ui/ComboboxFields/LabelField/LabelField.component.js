

import './LabelField.style.scss';

import React     from 'react';
import PropTypes from 'prop-types';

import ThemedLabelField from "./ThemedLabelField/ThemedLabelField.component";
import ValidationLabelField from "./ValidationLabelField/ValidationLabelField.component";


const LabelField = ({ children, classes = [], item, onClick }) => (
    <button className="focusable" type="button" onClick={onClick}>
        <p className={`label-field  ${ classes.join(" ") }`}>
            { item.label }
            { children }
        </p>
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