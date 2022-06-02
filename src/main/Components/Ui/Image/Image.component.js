

import "./Image.style.scss";

import React from 'react';
import PropTypes from "prop-types"


const Image = ({ alt, srcSet, classes = [] }) => (
    <img alt={alt} srcSet={srcSet.join(', ')} className={`image ${classes.join(" ")}`}/>
);


Image.propTypes = {
    srcSet:  PropTypes.arrayOf(PropTypes.string).isRequired,
    classes: PropTypes.arrayOf(PropTypes.string),
    alt:     PropTypes.string.isRequired
};


export default Image;