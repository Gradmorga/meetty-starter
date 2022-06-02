

import './Dialog.style.scss';

import React from 'react';


const Dialog = ({ IPopup, IDialogButton, isOpen, title, controls, children, classes = [] }) => (
    <IPopup classes={["dialog", classes.join(" ")]} isOpen={isOpen}>

        <p className="dialog__title">
            { title }
        </p>

        <div className="dialog__content">
            { children }
        </div>

        <div className="dialog__controls">
            {
                controls.map((control, index) => (
                    <IDialogButton
                        key={index}
                        classes={["dialog__button"]}
                        category={control.category}
                        onClick={control.onClick}
                    >
                        { control.label }
                    </IDialogButton>
                ))
            }
        </div>
    </IPopup>
);


export default Dialog;