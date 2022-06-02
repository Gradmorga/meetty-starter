

import React from "react";

import ValidatableFieldView from "./ValidatableFieldView.component";


const ValidatableField = (IValidationLabel, IValidationField, IValidationMessage) => props => (
    <ValidatableFieldView
        {...props}
        IValidationLabel={IValidationLabel}
        IValidationField={IValidationField}
        IValidationMessage={IValidationMessage}
    />
);


export default ValidatableField;