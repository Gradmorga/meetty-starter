

import React from "react";
import { create, act } from 'react-test-renderer'
import Form from "../Form.component";


describe('[Controls] : Form', () => {
    let formComponent = null;
    let onSubmitSpy   = jest.fn();

    beforeEach(() => {
        const renderer = create(<Form onSubmit={onSubmitSpy}/>);

        formComponent = renderer.root.findByType(Form);
    });

    it('Should accept submit function', () => {

        expect(formComponent.props.onSubmit).toBe(onSubmitSpy);
    });

    it('Should fire submit function', () => {

        formComponent.props.onSubmit();

        expect(onSubmitSpy).toHaveBeenCalledTimes(1)
    });
})