

import React from 'react';


const ModalDropdown = (Backdrop, Dropdown) => ({ onOutsideClick, ...props }) => (
    <>
        <Backdrop isOpen={props.isOpen} fixed onClick={onOutsideClick}/>

        <Dropdown {...props} />
    </>
);


export default ModalDropdown;