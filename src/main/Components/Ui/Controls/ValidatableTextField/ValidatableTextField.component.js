

import React from 'react';


const ValidatableTextField = ITextField => ({ validator, onValidation, onValueChange, required, value, label, ...props }) => {

    let validationMessage = "";

    if (value.length)
        validationMessage = validator.validate(value);
    else if (required)
        validationMessage = "This field is required!";

    return (
        <ITextField
            {...props}
            label={ required ? label + "*" : label }
            value={value}
            onValueChange={newValue => {
                onValueChange(newValue);
                onValidation(validator.validate(newValue))
            }}
            onBlur={onValidation.bind(null, validationMessage)}
        />
    );
};


export default ValidatableTextField;