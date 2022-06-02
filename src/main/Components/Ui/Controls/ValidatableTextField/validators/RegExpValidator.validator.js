

import BaseValidator from "./BaseValidator.helper";


class RegExpValidator extends BaseValidator {

    constructor(regExp) {
        super();

        let validationExpression = regExp;
        this.getRegExp = () => { return validationExpression; };
    }

    validate(value) {
        if (!this.getRegExp().test(value))
            return "Please, enter correct value!";
        else
            return "";
    }
}


export default RegExpValidator;