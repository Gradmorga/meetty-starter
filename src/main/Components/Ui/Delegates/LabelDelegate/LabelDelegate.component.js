

import './LabelDelegate.style.scss';

import React     from 'react';
import PropTypes from 'prop-types';

import ThemedLabelDelegate from "./ThemedLabelDelegate/ThemedLabelDelegate.component";


const LabelDelegate = ({ children, classes = [], item, onClick }) => (
    <button className="focusable" type="button" onClick={onClick}>
        <p className={`label-item ${classes.join(" ")}`}>
            { item.label }
            { children }
        </p>
    </button>
);


LabelDelegate.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    item:    PropTypes.shape({
        label: PropTypes.string
    }).isRequired
};


const ThemeLabelOption = ThemedLabelDelegate(LabelDelegate);


export {
    LabelDelegate,
    ThemeLabelOption
};