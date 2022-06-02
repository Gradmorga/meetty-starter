

import React     from 'react';
import PropTypes from 'prop-types';


const Form = ({ children, classes = [], onSubmit }) => (
    <form
        autoComplete="off"
        className={classes.join(" ")}
        onSubmit={evt => {
            evt.preventDefault();
            onSubmit(evt);
        }}
    >
        { children }
    </form>
);


Form.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func.isRequired
};


export default Form;