

import React from 'react';


const ModalPopup = (IBackdrop, IPopup) => props => (
    <>
        <IBackdrop isOpen={props.isOpen} fixed />

        <IPopup {...props} />
    </>
);


export default ModalPopup;