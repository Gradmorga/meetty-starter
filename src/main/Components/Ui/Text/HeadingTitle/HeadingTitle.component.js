

import "./HeadingTitle.style.scss";

import React     from 'react';
import PropTypes from "prop-types";


const HeadingTitle = ({ domRef, children, classes = [], ...props}) => (
    <h3 ref={domRef} className={`heading-title ${classes.join(" ")}`} {...props}>
        { children }
    </h3>
);


HeadingTitle.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string)
};


export default HeadingTitle;
