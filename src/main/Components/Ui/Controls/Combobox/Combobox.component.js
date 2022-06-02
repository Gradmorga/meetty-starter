

import React       from 'react';
import PropTypes   from "prop-types";

import useCombobox from "./hooks/useCombobox.hook";


const Combobox = ({ View, classes = [], model, value, onValueChange, onValidate, required, ...props }) => {

    const { currentIndex, open, onClick, onItemClicked } = useCombobox(model, onValueChange, model.indexOfValue(value));

    return (
        <View
            {...props}
            required={required}
            classes={classes}
            currentIndex={currentIndex}
            isOpen={open}
            onClick={onClick}
            model={model}
            onItemClicked={modelIndex => {
                onItemClicked(modelIndex);
                onValidate(required && !model.itemAt(modelIndex).value ? "This field is required!" : "");
            }}
        />
    );
};


Combobox.propTypes = {
    View: PropTypes.elementType.isRequired,

    classes:       PropTypes.arrayOf(PropTypes.string),
    model:         PropTypes.object.isRequired,
    value:         PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onValueChange: PropTypes.func.isRequired,
    onValidate:    PropTypes.func.isRequired,
    required:      PropTypes.bool.isRequired
};


export default Combobox;