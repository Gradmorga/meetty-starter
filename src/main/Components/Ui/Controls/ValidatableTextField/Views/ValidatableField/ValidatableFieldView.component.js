

import React from 'react';


const ValidatableFieldView = ({
                                  IValidationLabel, IValidationField, IValidationMessage,
                                  message, children, classes = [], name, label, required, ...props
}) => (
    <div className={`field ${classes.join(" ")}`} >

        <IValidationLabel label={label} message={message} required={required} />

        <IValidationField
            {...props}
            name={name}
            message={message}
        />

        <IValidationMessage message={message} />

        { children }
    </div>
);


export default ValidatableFieldView;