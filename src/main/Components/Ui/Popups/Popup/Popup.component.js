

import "./Popup.style.scss";

import React from 'react';

import ThemedPopup from "./ThemedPopup/ThemedPopup.component";


const Popup = ({ classes = [], children }) => (
    <div onWheel={e => e.stopPropagation()} className={`popup ${ classes.join(" ") }`}>
        { children }
    </div>
);


const ThemePopup = ThemedPopup(Popup);


export {
    Popup,
    ThemePopup
};