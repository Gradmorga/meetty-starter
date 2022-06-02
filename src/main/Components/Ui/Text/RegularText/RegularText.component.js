

import "./RegularText.style.scss";

import React     from "react";
import PropTypes from 'prop-types';


const RegularText = ({children, classes}) => (
    <p className={`regular-text ${classes ? classes.join(" ") : ""}`}>
        {children}
    </p>
);


RegularText.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string)
};


export default RegularText;