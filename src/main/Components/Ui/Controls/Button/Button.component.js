

import "./Button.style.scss";

import React     from 'react';
import PropTypes from 'prop-types';

import { ThemedDialogButtonView  }  from "./Views/DialogButton/DialogButton.component";
import { ThemedSlidingButtonView } from "./Views/SlidingButton/SlidingButton.component";


const Button = ({ View, onClick, classes = [], ...props }) => (
    <View {...props} onClick={onClick} classes={["button", ...classes]} />
);

const Creator = (IButton, ButtonView) => props => (
    <IButton {...props} View={ButtonView}/>
);


const DialogButton  = Creator(Button, ThemedDialogButtonView);
const SlidingButton = Creator(Button, ThemedSlidingButtonView);


Button.propTypes = {
    classes: PropTypes.arrayOf(PropTypes.string),
    onClick: PropTypes.func.isRequired,
    View:    PropTypes.elementType.isRequired
};


export {
    Button,
    DialogButton,
    SlidingButton
};