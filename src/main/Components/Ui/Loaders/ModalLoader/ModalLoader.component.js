

import React from 'react';


const ModalLoader = ({ ILoader, IBackdrop, isLoading, children, fixed }) => (
    <>
        <IBackdrop isOpen={isLoading} fixed={fixed}/>

        <ILoader isLoading={isLoading} fixed={fixed}/>

        { children }
    </>
);


export default ModalLoader;