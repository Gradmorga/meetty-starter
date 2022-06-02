

import React from 'react';


const Method = {
    PUT:   0,
    PATCH: 1,
    POST:  2
};
Object.freeze(Method);

const useFetch = endpoint => {
    const [state, setState] = React.useState({
        processing: false,
        error:      ""
    });

    const send = React.useCallback(
        (method, data) => {
            setState({
                processing: true,
                error:      ""
            });

            new Promise((resolve, reject) => {

                setTimeout(() => {
                    Math.random() * 10 <= 5 ? resolve("Success") : reject("Fail");

                    console.log(`${method} on ${endpoint}`);
                    console.log(JSON.stringify(data));
                }, 3000);

            }).then(() => {
                setState({
                    processing: false,
                    error: ""
                })
            }).catch(error => {
                setState({
                    processing: false,
                    error: error
                })
            });
        },
        [endpoint]
    );

    return {
        loading: state.processing,
        error:   state.error,
        send
    };
};


export { Method, useFetch };