

import React     from 'react';
import PropTypes from 'prop-types';


const TextField = ({ FieldView, classes = [], name, onRefChanged, children, value, onValueChange, ...props }) => (
    <FieldView
        {...props}

        classes={classes}
        name={name}
        onRefChanged={onRefChanged}
        value={value}
        onValueChange={onValueChange}
    >
        { children }
    </FieldView>
);


TextField.propTypes = {
    FieldView: PropTypes.elementType.isRequired,

    classes:       PropTypes.arrayOf(PropTypes.string),
    value:         PropTypes.string.isRequired,
    name:          PropTypes.string.isRequired,
    onRefChanged:  PropTypes.func,
    onValueChange: PropTypes.func.isRequired
};


export default TextField;