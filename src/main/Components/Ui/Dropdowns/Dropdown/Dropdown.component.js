

import './Dropdown.style.scss';

import React     from 'react';
import PropTypes from 'prop-types';

import ThemedDropdown from "./ThemedDropdown/ThemedDropdown.component";


const Dropdown = ({ children, classes = []}) => (
    <div
        className={`dropdown ${classes.join(" ")}`}
        onWheel={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}
        onTouchMove={e => e.stopPropagation()}
    >
        { children }
    </div>
);


Dropdown.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string)
};


const ThemeDropdown = ThemedDropdown(Dropdown);


export {
    Dropdown,
    ThemeDropdown
};