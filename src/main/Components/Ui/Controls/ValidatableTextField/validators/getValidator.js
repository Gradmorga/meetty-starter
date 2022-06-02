

import RegExpValidator from "./RegExpValidator.validator";


const Type = {
    EMAIL:   1,
    NAME:    2,
    COMMENT: 3
}
Object.freeze(Type);


const getValidator = validatorType => {
    switch (validatorType) {
        case Type.EMAIL:
            return new RegExpValidator(
                // eslint-disable-next-line
                /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
            );

        case Type.NAME:
            return new RegExpValidator(/^[a-z ,.'-]+$/i);

        case Type.COMMENT:
            return new RegExpValidator(/^.{10,300}$/);

        default:
            throw new Error("Unknown validator type!");
    }
};


export { getValidator, Type };