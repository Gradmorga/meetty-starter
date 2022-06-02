

import './Block.style.scss';

import React     from 'react';
import PropTypes from "prop-types";


const Block = ({ domRef, classes = [], children, ...props }) => (
    <div ref={domRef} className={`block ${classes.join(" ")}`} {...props}>
        {children}
    </div>
);


Block.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string)
};


export default Block;