


import React from 'react';


const useRefedParams = (params) => {

    const refedParams = React.useRef({ ...params });

    React.useEffect(
        () => { refedParams.current = {...params }; },
        // eslint-disable-next-line
        [Object.values(params)]
    );

    return refedParams;
};


export default useRefedParams;