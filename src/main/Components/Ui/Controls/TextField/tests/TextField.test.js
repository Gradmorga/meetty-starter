import React from "react";
import { create, act } from 'react-test-renderer'

import BaseValidator from "../../ValidatableTextField/validators/BaseValidator.helper";


describe('[Controls] : BaseInput', () => {
    it('Should accept and forward default value', () => {

        const expected = "expected";
        let   actual   = "";

        const renderer = create(
            <BaseInput defaultValue={expected}>
                {(value) => {
                    actual = value;
                }}
            </BaseInput>
        );

        const inputModel = renderer.root.findByType(BaseInput);

        expect(inputModel.props.defaultValue).toEqual("expected");
        expect(actual).toEqual(expected);
    });


    it("Should accept new value", () => {

        let actualValue   = "";
        let expectedValue = "test";

        const renderer = create(
            <BaseInput defaultValue={"123"}>
                {
                    (value, _, onChange) => {
                        onChange("test");
                        actualValue = value;
                    }
                }
            </BaseInput>
        );


        const inputModel = renderer.root.findByType(BaseInput);

        expect(actualValue).toEqual(expectedValue);
    });


    it("Should return successful validation flag", () => {

        const expectedValidationFlag = true;
        let   actualValidationFlag   = false;


        const renderer = create(
            <BaseInput validator={new BaseValidator(/[1-9]{3}/)}>
                {
                    (value, isValid, onChange) => {
                        onChange("123");
                        actualValidationFlag = isValid;
                    }
                }
            </BaseInput>
        );

        expect(actualValidationFlag).toEqual(expectedValidationFlag);
    });

    it("Should fail validation", () => {

        const expectedValidationFlag = false;
        let   actualValidationFlag   = true;

        const renderer = create(
            <BaseInput validator={new BaseValidator(/[1-9]{3}/)}>
                {
                    (value, isValid, onChange) => {
                        onChange("zzz");
                        actualValidationFlag = isValid;
                    }
                }
            </BaseInput>
        );

        expect(actualValidationFlag).toEqual(expectedValidationFlag);
    });
})