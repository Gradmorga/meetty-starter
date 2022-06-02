

import React from 'react';


const useFormFields = (fieldsMap, onSubmitted) => {

    const onSubmitRef = React.useRef(onSubmitted);

    const init = new Map([]);

    for (const [fieldName, fieldValue] of fieldsMap) {
        init.set(fieldName, {
            value: fieldValue,
            error: ""
        });
    }


    const [fields, setFields]         = React.useState(init);
    const [isFormValid, setFormValid] = React.useState(false);

    const field = fieldName => ({
        value: fields.get(fieldName).value,
        error: fields.get(fieldName).error
    });

    React.useEffect(() => {

        let isFormFilled = true;

        for (let { value, error } of fields.values()) {
            if (Boolean(error) || !Boolean(value))
                isFormFilled = false;
        }

        setFormValid(isFormFilled);

    }, [fields]);


    const onSubmit = React.useCallback(() => {

        const formData = {};

        setFields(prevState => {

            prevState.forEach((fieldData, fieldName) => {
                formData[fieldName] = fieldData.value;
            });

            const clearedFields = new Map([]);

            for (const key of prevState.keys()) {
                clearedFields.set(key, {
                    value: "",
                    error: ""
                });
            }

            return clearedFields;
        });

        onSubmitRef.current(formData);

    }, []);


    const onValueChange = React.useCallback(fieldName => value => {

        setFields((prevState) => {
            if (prevState.get(fieldName).value === value)
                return prevState;

            const fieldsCopy = new Map([...prevState]);

            fieldsCopy.set(fieldName, {
                ...fieldsCopy.get(fieldName),
                value,
            });

            return fieldsCopy;
        })
    }, []);

    const onValidationChange = React.useCallback(fieldName => error => {

        setFields((prevState) => {
            if (prevState.get(fieldName).error === error)
                return prevState;

            const fieldsCopy = new Map([...prevState]);

            fieldsCopy.set(fieldName, {
                ...fieldsCopy.get(fieldName),
                error: error
            });

            return fieldsCopy;
        })
    }, []);

    return [isFormValid, field, onValueChange, onValidationChange, onSubmit];
};


export default useFormFields;